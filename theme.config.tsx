import type { DocsThemeConfig } from "nextra-theme-docs";
import Logo from "./src/components/Logo";

const config: DocsThemeConfig = {
    logo: (
        <div className="h-10 w-10 bg-white">
            <Logo size={40} />
        </div>
    ),
    project: {
        link: "https://github.com/CDE90/VCRoles",
    },
    docsRepositoryBase: "https://github.com/CDE90/VCRoles/blob/main",
    useNextSeoProps() {
        return {
            titleTemplate: "%s - VC Roles",
            description:
                "VC Roles is a Discord bot that allows you to create and manage roles in voice channels.",
            openGraph: {
                type: "website",
                locale: "en_IE",
                url: "https://vcroles.com",
                site_name: "VC Roles",
            },
        };
    },
    head() {
        return (
            <>
                <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href="/apple-touch-icon.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href="/favicon-32x32.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href="/favicon-16x16.png"
                />
                <link rel="manifest" href="/site.webmanifest" />
                <link
                    rel="mask-icon"
                    href="/safari-pinned-tab.svg"
                    color="#5bbad5"
                />
                <meta name="msapplication-TileColor" content="#603cba" />
                <meta name="theme-color" content="#ffffff"></meta>
            </>
        );
    },
    darkMode: true,
    chat: {
        link: "https://discord.gg/yHU6qcgNPy",
    },
};

export default config;
