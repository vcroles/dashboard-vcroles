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
    link: string;
};

export const features: Feature[] = [
    {
        name: "Channel - Role Linking",
        description:
            "Role(s) are automatically assigned to a user when they join a specific channel.",
        icon: LinkIcon,
        link: "/docs/features/linking",
    },
    {
        name: "TTS Commands",
        description:
            "Text-to-speech commands that can be used to communicate without a mic.",
        icon: SpeakerWaveIcon,
        link: "/docs/features/tts",
    },
    {
        name: "Voice Channel Generators",
        description:
            "Automatically create voice channels when a user joins a specific voice channel. Great for creating temporary voice channels!",
        icon: BoltIcon,
        link: "/docs/features/voice-channel-generators",
    },
    {
        name: "Voice Channel Logging",
        description:
            "Log when a user joins or leaves a voice channel, and any roles that may have been assigned or removed.",
        icon: NewspaperIcon,
        link: "/docs/features/audit-logs",
    },
];
