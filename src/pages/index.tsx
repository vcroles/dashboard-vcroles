import React, { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { signIn, signOut, useSession } from "next-auth/react";

import FeatureSection from "../components/FeatureSection";

const navigation = [
    { name: "Invite", href: "/invite" },
    { name: "Dashboard", href: "/dashboard" },
    { name: "Documentation", href: "/docs" },
    { name: "Premium", href: "/premium" },
];

import {
    BoltIcon,
    LinkIcon,
    SpeakerWaveIcon,
    NewspaperIcon,
} from "@heroicons/react/24/outline";
import PricingSection, { type Tier } from "../components/Pricing";
import Footer from "../components/Footer";

const features = [
    {
        name: "Channel - Role Linking",
        description:
            "Role(s) are automatically assigned to a user when they join a specific channel.",
        icon: LinkIcon,
    },
    {
        name: "TTS Commands",
        description:
            "Text-to-speech commands that can be used to communicate without a mic.",
        icon: SpeakerWaveIcon,
    },
    {
        name: "Voice Channel Generators",
        description:
            "Automatically create voice channels when a user joins a specific voice channel. Great for creating temporary voice channels!",
        icon: BoltIcon,
    },
    {
        name: "Voice Channel Logging",
        description:
            "Log when a user joins or leaves a voice channel, and any roles that may have been assigned or removed.",
        icon: NewspaperIcon,
    },
];

const pricing = {
    tiers: [
        {
            title: "Premium",
            monthly: 3.99,
            yearly: 39.99,
            description: "Our most basic plan.",
            features: [
                "1 server",
                "Unlimited users",
                "All features included",
                "24-hour support response time",
            ],
            cta: "Subscribe now!",
            mostPopular: false,
            url: "https://cde90.gumroad.com/l/vcroles?option=Ypy6i23Wsp9LXur51GNQIA%3D%3D",
        },
        {
            title: "Premium Plus",
            monthly: 6.99,
            yearly: 69.99,
            description:
                "A step up from Premium, with more servers upgradable.",
            features: [
                "3 servers",
                "Unlimited users",
                "All features included",
                "24-hour support response time",
            ],
            cta: "Subscribe now!",
            mostPopular: true,
            url: "https://cde90.gumroad.com/l/vcroles?option=RmRNbhZ7ixse_w7gH3J2-w%3D%3D",
        },
        {
            title: "Premium Pro",
            monthly: 14.99,
            yearly: 149.99,
            description: "Our most powerful plan, for those who need the best.",
            features: [
                "10 servers",
                "Unlimited users",
                "All features included",
                "24-hour support response time",
            ],
            cta: "Subscribe now!",
            mostPopular: false,
            url: "https://cde90.gumroad.com/l/vcroles?option=lGHZQh6McZGSzEhz98xSfw%3D%3D",
        },
    ] as Tier[],
};

const Logo: React.FC = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={40}
        height={40}
        viewBox="0 0 512 512"
        className="fill-[#3F48CC]"
        {...props}
    >
        <path d="M0 256v256h512V0H0v256zm353.7-134.2c29.8 25 51.5 61.8 59.4 100.8 4 20.4 3.8 48.3-.7 70.4-5.1 24.6-19.6 55.1-35.2 74-8.7 10.6-20.6 22-22.8 22-2.2 0-10.4-8-10.4-10.1 0-.7 4.2-5.5 9.3-10.8 15.3-15.9 22-25.3 30.8-43.4 21.3-44.4 20.8-96-1.4-140.2-8.1-16.2-15.8-26.7-30.9-41.8-7.6-7.7-13.8-14.2-13.8-14.6 0-1.1 5.1-8.5 6.8-9.9 2.3-1.8 2.5-1.7 8.9 3.6zM246.1 152c1.9 1 1.9 3.3 1.9 103.8 0 105.5 0 105.2-3.7 105.2-.7 0-21.9-12.8-47.1-28.5L151.3 304h-22c-21.2 0-22.1-.1-25.4-2.3-1.8-1.2-4.4-3.8-5.7-5.7l-2.3-3.4.3-37.2c.3-35.8.4-37.4 2.4-40 5-6.8 5.3-6.9 30.4-7.2l22.9-.3 45.7-28.5c25.2-15.6 45.9-28.4 46.1-28.4.3 0 1.3.5 2.4 1zm84.8 14.8c24.6 25.1 37.1 55.2 37.1 89.3 0 20.8-4.4 39.2-13.7 57.4-5.9 11.7-11.8 19.8-22.2 30.7-9.1 9.6-11.3 11.2-13.9 10.3-2.2-.7-7.2-7.8-7.2-10.2 0-1 3.1-4.9 6.9-8.6 13.2-12.8 22.5-27.4 28-44.3 4.1-12.6 5.5-22.1 5.4-36.4-.2-30.4-10.7-55.3-32.5-77.3-4.8-4.8-8.8-9.2-8.8-9.6 0-1.2 5-8.4 6.8-9.9.9-.6 2.3-1.2 3.1-1.2.8 0 5.8 4.4 11 9.8zm-37.4 30c9.9 8.1 18.9 22.3 23.5 36.7 3 9.4 3.8 28.1 1.7 38.1-3.3 15.3-10.7 29-22.2 41.3-8.4 8.8-10.6 9.2-15.9 2.7-2-2.3-3.6-4.8-3.6-5.4 0-.6 2.5-3.4 5.6-6.4 7.8-7.3 14.8-18.4 18-28.2 2.2-6.6 2.7-10.1 2.7-18.6 0-18.8-5.3-32-18.5-45.4-4.3-4.3-7.8-8.6-7.8-9.4 0-.8 2-3.5 4.4-5.9 4.9-4.9 5.6-4.9 12.1.5z" />
    </svg>
);

export default function Home() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { data: session } = useSession();

    return (
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
            <div className="px-6 pt-6 lg:px-8">
                <div>
                    <nav
                        className="flex h-9 items-center justify-between"
                        aria-label="Global"
                    >
                        <div
                            className="flex lg:min-w-0 lg:flex-1"
                            aria-label="Global"
                        >
                            <a href="#" className="-m-1.5 p-1.5">
                                <span className="sr-only">VC Roles</span>
                                <Logo />
                            </a>
                        </div>
                        <div className="flex lg:hidden">
                            <button
                                type="button"
                                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                                onClick={() => setMobileMenuOpen(true)}
                            >
                                <span className="sr-only">Open main menu</span>
                                <Bars3Icon
                                    className="h-6 w-6"
                                    aria-hidden="true"
                                />
                            </button>
                        </div>
                        <div className="hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-center lg:gap-x-12">
                            {navigation.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className="font-semibold text-gray-900 hover:text-gray-900"
                                >
                                    {item.name}
                                </a>
                            ))}
                        </div>
                        <div className="hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-end">
                            <button
                                onClick={() =>
                                    session ? signOut() : signIn("discord")
                                }
                                className="inline-block rounded-lg px-3 py-1.5 text-sm font-semibold leading-6 text-gray-900 shadow-sm ring-1 ring-gray-900/10 hover:ring-gray-900/20"
                            >
                                {session ? `Log out` : `Log in`}
                            </button>
                        </div>
                    </nav>
                    <Dialog
                        as="div"
                        open={mobileMenuOpen}
                        onClose={setMobileMenuOpen}
                    >
                        <Dialog.Panel
                            // focus="true"
                            className="fixed inset-0 z-10 overflow-y-auto bg-white px-6 py-6 lg:hidden"
                        >
                            <div className="flex h-9 items-center justify-between">
                                <div className="flex">
                                    <a href="#" className="-m-1.5 p-1.5">
                                        <span className="sr-only">
                                            VC Roles
                                        </span>
                                        <Logo />
                                    </a>
                                </div>
                                <div className="flex">
                                    <button
                                        type="button"
                                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        <span className="sr-only">
                                            Close menu
                                        </span>
                                        <XMarkIcon
                                            className="h-6 w-6"
                                            aria-hidden="true"
                                        />
                                    </button>
                                </div>
                            </div>
                            <div className="mt-6 flow-root">
                                <div className="-my-6 divide-y divide-gray-500/10">
                                    <div className="space-y-2 py-6">
                                        {navigation.map((item) => (
                                            <a
                                                key={item.name}
                                                href={item.href}
                                                className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10"
                                            >
                                                {item.name}
                                            </a>
                                        ))}
                                    </div>
                                    <div className="py-6">
                                        <button
                                            onClick={() =>
                                                session
                                                    ? signOut()
                                                    : signIn("discord")
                                            }
                                            className="-mx-3 block rounded-lg py-2.5 px-3 text-base font-semibold leading-6 text-gray-900 hover:bg-gray-400/10"
                                        >
                                            {session ? `Log out` : `Log in`}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </Dialog.Panel>
                    </Dialog>
                </div>
            </div>
            <main>
                <div className="relative px-6 lg:px-8">
                    <div className="mx-auto max-w-3xl pt-20 pb-32 sm:pt-48 sm:pb-40">
                        <div>
                            <div>
                                <h1 className="text-4xl font-bold tracking-tight sm:text-center sm:text-6xl">
                                    VC Roles Discord Bot
                                </h1>
                                <p className="mt-6 text-lg leading-8 text-gray-600 sm:text-center">
                                    VC Roles will enhance your Discord server by
                                    enriching voice channels with much needed
                                    features such as role assignment, channel
                                    generators, and more! It&apos;s easy to use
                                    and will help you manage your server with
                                    ease.
                                </p>
                                <div className="mt-8 flex gap-x-4 sm:justify-center">
                                    <a
                                        href="#"
                                        className="inline-block rounded-lg bg-indigo-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-indigo-600 hover:bg-indigo-700 hover:ring-indigo-700"
                                    >
                                        Get started
                                        <span
                                            className="text-indigo-200"
                                            aria-hidden="true"
                                        >
                                            &rarr;
                                        </span>
                                    </a>
                                    <a
                                        href="#"
                                        className="inline-block rounded-lg px-4 py-1.5 text-base font-semibold leading-7 text-gray-900 ring-1 ring-gray-900/10 hover:ring-gray-900/20"
                                    >
                                        Documentation
                                        <span
                                            className="text-gray-400"
                                            aria-hidden="true"
                                        >
                                            &rarr;
                                        </span>
                                    </a>
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
                <PricingSection tiers={pricing.tiers} />
                <Footer />
            </main>
        </div>
    );
}
