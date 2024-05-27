import type { NextPage } from "next";
import { ClerkProvider, useAuth, useUser } from "@clerk/nextjs";
import type { AppProps, AppType } from "next/app";
import { useEffect, type ReactElement, type ReactNode } from "react";
import { trpc } from "../utils/trpc";
import { slugifyWithCounter } from "@sindresorhus/slugify";
import { DocsLayout } from "src/layouts/Docs";
import posthog from "posthog-js";
import { PostHogProvider } from "posthog-js/react";
import { env } from "src/env/client.mjs";

import "../styles/globals.css";

import { useRouter } from "next/router";
import Head from "next/head";

if (typeof window !== "undefined") {
    // checks that we are client-side
    posthog.init(env.NEXT_PUBLIC_POSTHOG_KEY, {
        api_host: "/ingest",
        ui_host: "https://eu.posthog.com",
        loaded: (posthog) => {
            if (process.env.NODE_ENV === "development") posthog.debug(); // debug mode in development
        },
    });
}

// I could probably have typed this better, but the types for the
// entire markdoc library seem a bit strange...

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function getNodeText(node: any) {
    let text = "";
    for (const child of node.children ?? []) {
        if (typeof child === "string") {
            text += child;
        }
        text += getNodeText(child);
    }
    return text;
}

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function collectHeadings(nodes: any, slugify = slugifyWithCounter()) {
    const sections = [];

    for (const node of nodes) {
        if (node.name === "h2" || node.name === "h3") {
            const title = getNodeText(node);
            if (title) {
                const id = slugify(title);
                node.attributes.id = id;
                if (node.name === "h3") {
                    if (!sections[sections.length - 1]) {
                        throw new Error(
                            "Cannot add `h3` to table of contents without a preceding `h2`",
                        );
                    }
                    sections[sections.length - 1].children.push({
                        ...node.attributes,
                        title,
                    });
                } else {
                    sections.push({ ...node.attributes, title, children: [] });
                }
            }
        }

        sections.push(...collectHeadings(node.children ?? [], slugify));
    }

    return sections;
}

function CSPostHogProvider({ children }: { children: ReactNode }) {
    return (
        <PostHogProvider client={posthog}>
            <PostHogAuthWrapper>{children}</PostHogAuthWrapper>
        </PostHogProvider>
    );
}

function PostHogAuthWrapper({ children }: { children: ReactNode }) {
    const auth = useAuth();
    const userData = useUser();

    useEffect(() => {
        if (auth.userId && userData.user) {
            posthog.identify(auth.userId, {
                email: userData.user.primaryEmailAddress?.emailAddress,
                name: userData.user.fullName,
                username: userData.user.username,
                image: userData.user.imageUrl,
            });
        } else if (auth.isLoaded && !auth.isSignedIn) {
            posthog.reset();
        }
    }, [auth, userData]);

    return children;
}

export type NextPageWithLayout<P = unknown, IP = P> = NextPage<P, IP> & {
    getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout;
};

const MyApp: AppType = ({
    Component,
    pageProps: { ...pageProps },
}: AppPropsWithLayout) => {
    const getLayout = Component.getLayout ?? ((page) => page);

    const title = pageProps.markdoc?.frontmatter.title;

    const pageTitle =
        pageProps.markdoc?.frontmatter.pageTitle ||
        `${pageProps.markdoc?.frontmatter.title} - Docs`;

    const description = pageProps.markdoc?.frontmatter.description;

    const tableOfContents = pageProps.markdoc?.content
        ? collectHeadings(pageProps.markdoc.content)
        : [];

    const router = useRouter();

    useEffect(() => {
        // Track page views
        const handleRouteChange = () => posthog.capture("$pageview");
        router.events.on("routeChangeComplete", handleRouteChange);

        return () => {
            router.events.off("routeChangeComplete", handleRouteChange);
        };
    }, [router.events]);

    return (
        <ClerkProvider {...pageProps}>
            <CSPostHogProvider>
                <Head>
                    <link
                        rel="canonical"
                        href={`https://www.vcroles.com${router.asPath}`}
                    />
                </Head>
                {getLayout(
                    router.pathname.startsWith("/docs") ? (
                        <DocsLayout
                            title={title}
                            pageTitle={pageTitle}
                            description={description}
                            tableOfContents={tableOfContents}
                        >
                            <Component {...pageProps} />
                        </DocsLayout>
                    ) : (
                        <Component {...pageProps} />
                    ),
                )}
            </CSPostHogProvider>
        </ClerkProvider>
    );
};

export default trpc.withTRPC(MyApp);
