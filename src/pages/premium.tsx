import type { NextPage } from "next";
import Head from "next/head";
import { PremiumCTASection } from "../components/CTASection";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import PremiumFAQs from "../components/PremiumFAQs";
import PremiumFeatures from "../components/PremiumFeatures";
import PricingSection from "../components/Pricing";
import { pricing } from "../constants";

const PremiumPage: NextPage = () => {
    return (
        <>
            <Head>
                <title>VC Roles | Premium</title>
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
                        <div className="mx-auto max-w-3xl pt-10 pb-16 sm:pt-24 sm:pb-20">
                            <div>
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
                    <div className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
                        <div className="mx-auto max-w-4xl">
                            <h2 className="text-3xl font-bold tracking-tight sm:text-center sm:text-6xl">
                                Premium plans for everyone
                            </h2>
                            <p className="mt-6 text-lg leading-8 text-gray-600 sm:text-center">
                                Ready to{" "}
                                <span className="font-semibold">upgrade </span>
                                your experience? Choose an affordable premium
                                plan packed with all the features you need to
                                manage your server.
                            </p>
                        </div>
                        <div id="pricing" />
                        <PricingSection tiers={pricing.tiers} />
                    </div>
                    {/* Testimonials */}
                    <PremiumFeatures />
                    {/* FAQs */}
                    <PremiumFAQs />
                    <PremiumCTASection /> {/* make this premium specific */}
                    <Footer />
                </main>
            </div>
        </>
    );
};

export default PremiumPage;
