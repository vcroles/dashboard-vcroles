import type { Tier } from "./components/Pricing";
import {
    BoltIcon,
    LinkIcon,
    SpeakerWaveIcon,
    NewspaperIcon,
} from "@heroicons/react/24/outline";

export const navigation = [
    { name: "Home", href: "/" },
    { name: "Pricing", href: "/pricing" },
    { name: "Dashboard", href: "/dashboard" },
    { name: "Documentation", href: "/docs" },
    { name: "Invite", href: "/invite" },
];

export type Feature = {
    name: string;
    description: string;
    icon: React.ComponentType<{ className: string | undefined }>;
};

export const features: Feature[] = [
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

interface Pricing {
    tiers: Tier[];
}

export const pricing: Pricing = {
    tiers: [
        {
            title: "Premium",
            monthly: 3.99,
            yearly: 39.99,
            description: "Our most basic plan, perfect for a single server.",
            features: [
                "Unlimited users",
                "All features included",
                "24-hour support response time",
            ],
            cta: "Subscribe now!",
            mostPopular: false,
            url: "https://cde90.gumroad.com/l/vcroles?option=Ypy6i23Wsp9LXur51GNQIA%3D%3D&wanted=true",
            serverCount: 1,
        },
        {
            title: "Premium Plus",
            monthly: 6.99,
            yearly: 69.99,
            description:
                "A step up from Premium, with more servers upgradable.",
            features: [
                "Unlimited users",
                "All features included",
                "24-hour support response time",
            ],
            cta: "Subscribe now!",
            mostPopular: true,
            url: "https://cde90.gumroad.com/l/vcroles?option=RmRNbhZ7ixse_w7gH3J2-w%3D%3D&wanted=true",
            serverCount: 3,
        },
        {
            title: "Premium Pro",
            monthly: 14.99,
            yearly: 149.99,
            description: "Our most powerful plan, for those who need the best.",
            features: [
                "Unlimited users",
                "All features included",
                "24-hour support response time",
            ],
            cta: "Subscribe now!",
            mostPopular: false,
            url: "https://cde90.gumroad.com/l/vcroles?option=lGHZQh6McZGSzEhz98xSfw%3D%3D&wanted=true",
            serverCount: 10,
        },
    ],
};
