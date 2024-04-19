import type { NextPage } from "next";
import { BottomBackground, TopBackground } from "src/components/Background";
import { SeoHeaders } from "src/components/SeoHeaders";
import { PremiumCTASection } from "../components/CTASection";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import PremiumFAQs from "../components/PremiumFAQs";
import PremiumFeatures from "../components/PremiumFeatures";
import PricingSection from "../components/Pricing";

const PremiumPage: NextPage = () => {
    return (
        <>
            <SeoHeaders
                title="VC Roles | Pricing"
                description="VC Roles is a Discord bot that allows you to manage your voice channels with ease. It's free to use, but if you want to support us, you can upgrade to a premium plan."
                url="https://vcroles.com/pricing"
            />

            <div className="isolate bg-white">
                <TopBackground />
                <NavBar />
                <main>
                    <div className="relative px-6 lg:px-8">
                        <div className="mx-auto max-w-3xl pb-16 pt-10 sm:pb-20 sm:pt-24"></div>
                    </div>
                    <div className="relative mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
                        <div className="mx-auto max-w-4xl">
                            <h2 className="text-3xl font-bold tracking-tight sm:text-center sm:text-6xl">
                                Unlock the power of VC Roles
                            </h2>
                            <p className="mt-6 text-lg leading-8 text-gray-600 sm:text-center">
                                Ready to{" "}
                                <span className="font-semibold">upgrade </span>
                                your experience? The VC Roles Premium plan
                                unlocks the power of voice channel generators,
                                voice channel analytics, and more!
                            </p>
                        </div>
                        <div id="pricing" />
                        <PricingSection />
                        <BottomBackground />
                    </div>
                    {/* Testimonials */}
                    <PremiumFeatures />
                    <PremiumFAQs />
                    <PremiumCTASection />
                    <Footer />
                </main>
            </div>
        </>
    );
};

export default PremiumPage;
