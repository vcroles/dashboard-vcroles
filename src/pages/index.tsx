import Head from "next/head";
import Link from "next/link";
import CTASection from "../components/CTASection";
import FeatureSection from "../components/FeatureSection";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import PricingSection from "../components/Pricing";
import { features, pricing } from "../constants";

export default function Home() {
    return (
        <>
            <Head>
                <title>VC Roles | Home</title>
            </Head>
            <div className="isolate bg-white">
                <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">
                    <svg
                        className="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
                        viewBox="0 0 1155 678"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
                            fillOpacity=".3"
                            d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
                        />
                        <defs>
                            <linearGradient
                                id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
                                x1="1155.49"
                                x2="-78.208"
                                y1=".177"
                                y2="474.645"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop stopColor="#9089FC" />
                                <stop offset={1} stopColor="#FF80B5" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
                <NavBar />
                <main>
                    <div className="relative px-6 lg:px-8">
                        <div className="mx-auto max-w-3xl pt-20 pb-32 sm:pt-48 sm:pb-40">
                            <div>
                                <div>
                                    <h1 className="text-4xl font-bold tracking-tight sm:text-center sm:text-6xl">
                                        VC Roles Discord Bot
                                    </h1>
                                    <p className="mt-6 text-lg leading-8 text-gray-600 sm:text-center">
                                        VC Roles will enhance your Discord
                                        server by enriching voice channels with
                                        much needed features such as role
                                        assignment, channel generators, and
                                        more! It&apos;s easy to use and will
                                        help you manage your server with ease.
                                    </p>
                                    <div className="mt-8 flex gap-x-4 sm:justify-center">
                                        <Link
                                            href="/dashboard"
                                            className="inline-block rounded-lg bg-highlight-light px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-highlight-light hover:bg-highlight hover:ring-highlight"
                                        >
                                            Get started
                                            <span
                                                className="text-indigo-200"
                                                aria-hidden="true"
                                            >
                                                &rarr;
                                            </span>
                                        </Link>
                                        <Link
                                            href="/docs"
                                            className="inline-block rounded-lg px-4 py-1.5 text-base font-semibold leading-7 text-gray-900 ring-1 ring-gray-900/10 hover:ring-gray-900/20"
                                        >
                                            Documentation
                                            <span
                                                className="text-gray-400"
                                                aria-hidden="true"
                                            >
                                                &rarr;
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                                <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
                                    <svg
                                        className="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]"
                                        viewBox="0 0 1155 678"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)"
                                            fillOpacity=".3"
                                            d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
                                        />
                                        <defs>
                                            <linearGradient
                                                id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc"
                                                x1="1155.49"
                                                x2="-78.208"
                                                y1=".177"
                                                y2="474.645"
                                                gradientUnits="userSpaceOnUse"
                                            >
                                                <stop stopColor="#9089FC" />
                                                <stop
                                                    offset={1}
                                                    stopColor="#FF80B5"
                                                />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <FeatureSection features={features} />
                    <div className="mx-auto max-w-7xl bg-white px-4 pb-24 sm:px-6 lg:px-8">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl sm:leading-none lg:text-6xl">
                            Premium plans everyone will love.
                        </h2>
                        <div className="flex flex-col lg:flex-row">
                            <p className="mt-6 max-w-2xl text-xl text-gray-500">
                                Ready to{" "}
                                <span className="font-semibold">upgrade </span>
                                your experience? Choose an affordable premium
                                plan packed with all the features you need to
                                manage your server.
                            </p>
                            {/* add a button to learn more on the premium page */}
                            <div className="mt-8 flex items-center gap-x-4 sm:ml-auto sm:justify-center">
                                <Link
                                    href="/premium"
                                    className="inline-block rounded-lg px-4 py-1.5 text-base font-semibold leading-7 text-gray-900 ring-1 ring-gray-900/10 hover:ring-gray-900/20"
                                >
                                    Learn more
                                    <span
                                        className="text-gray-400"
                                        aria-hidden="true"
                                    >
                                        &rarr;
                                    </span>
                                </Link>
                            </div>
                        </div>
                        <PricingSection tiers={pricing.tiers} />
                    </div>
                    <CTASection />
                    <Footer />
                </main>
            </div>
        </>
    );
}
