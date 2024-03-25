import type { NextPage } from "next";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import type { AppProps, AppType } from "next/app";
import type { ReactElement, ReactNode } from "react";
import { trpc } from "../utils/trpc";
import { slugifyWithCounter } from "@sindresorhus/slugify";
import { DocsLayout } from "src/layouts/Docs";
import posthog from "posthog-js";
import { PostHogProvider } from "posthog-js/react";
import { env } from "src/env/client.mjs";

import "../styles/globals.css";

import { useRouter } from "next/router";

if (typeof window !== "undefined") {
    // checks that we are client-side
    posthog.init(env.NEXT_PUBLIC_POSTHOG_KEY, {
        api_host: env.NEXT_PUBLIC_POSTHOG_HOST || "https://app.posthog.com",
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

export type NextPageWithLayout<P = unknown, IP = P> = NextPage<P, IP> & {
    getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout;
};

const MyApp: AppType<{ session: Session | null }> = ({
    Component,
    pageProps: { session, ...pageProps },
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

    return (
        <SessionProvider session={session}>
            <PostHogProvider client={posthog}>
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
            </PostHogProvider>
        </SessionProvider>
    );
};

export default trpc.withTRPC(MyApp);
