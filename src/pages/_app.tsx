import type { AppType, AppProps } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import type { NextPage } from "next";
import type { ReactElement, ReactNode } from "react";

import { trpc } from "../utils/trpc";

import "../styles/globals.css";

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

    return (
        <SessionProvider session={session}>
            {getLayout(<Component {...pageProps} />)}
        </SessionProvider>
    );
};

export default trpc.withTRPC(MyApp);