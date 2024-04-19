import { CheckIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

type Tier = {
    title: string;
    monthly: number;
    description: string;
    features: string[];
    cta: string;
    url: string;
    serverCount: number;
};

const tier: Tier = {
    title: "Premium",
    monthly: 3.99,
    description: "The Premium plan, perfect for your server.",
    features: [
        "Unlimited Voice Channel Generators!",
        "Voice Channel Analytics",
        "No Command Limits",
        "Generate Text Channels",
        "Invite Members to Generated Channels",
        "Hide Generators at Limit",
    ],
    cta: "Subscribe now!",
    url: "https://discord.com/application-directory/775025797034541107/premium",
    serverCount: 1,
};

const PricingSection = () => {
    return (
        <div>
            {/* Tiers */}
            <div className="mx-auto mt-24 max-w-4xl">
                <div
                    key={tier.title}
                    className="relative flex flex-col rounded-2xl border border-gray-200 bg-white p-8 shadow-sm"
                >
                    <div className="flex-1">
                        <div className="flex flex-row">
                            <h3 className="text-xl font-semibold text-gray-900">
                                {tier.title}
                            </h3>
                        </div>
                        <p className="mt-4 flex items-baseline text-gray-900">
                            <span className="text-5xl font-bold tracking-tight">
                                ${tier.monthly}
                            </span>
                            <span className="ml-1 text-xl font-semibold">
                                /month
                            </span>
                        </p>
                        <p className="mt-6 text-gray-500">{tier.description}</p>

                        <div className="mt-4 flex items-center">
                            <p className="font-medium text-gray-900">
                                <span className="font-lg font-bold">
                                    {tier.serverCount}
                                </span>{" "}
                                server
                                {tier.serverCount > 1 ? "s" : ""}
                            </p>
                        </div>

                        {/* Feature list */}
                        <ul className="mt-6 space-y-6">
                            {tier.features.map((feature) => (
                                <li key={feature} className="flex">
                                    <CheckIcon
                                        className="h-6 w-6 flex-shrink-0 text-indigo-500"
                                        aria-hidden="true"
                                    />
                                    <span className="ml-3 text-gray-500">
                                        {feature}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <Link
                        href={tier.url}
                        className="mt-8 block w-full rounded-md border border-transparent bg-indigo-500 px-6 py-3 text-center font-medium text-white hover:bg-indigo-600"
                    >
                        {tier.cta}
                    </Link>
                </div>
                <p className="mt-6 max-w-2xl text-xs italic text-gray-500">
                    Prices shown are in USD, and may exclude applicable taxes.
                </p>
            </div>
        </div>
    );
};

export default PricingSection;
