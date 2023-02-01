import { CheckIcon } from "@heroicons/react/20/solid";

const features = [
    {
        name: "Analytics",
        description:
            "See powerful analytics about how people are using your server's voice channels.",
    },
    {
        name: "No Command Vote Restrictions",
        description:
            "Get rid of those pesky restrictions on voting for commands.",
    },
    {
        name: "Unlimited Voice Generators",
        description:
            "1 not enough? Create as many voice generators as you want.",
    },
    {
        name: "Generate Text Channels",
        description:
            "Give your users the ability to generate their own private text channels with their voice channels.",
    },
    {
        name: "Invite Members",
        description:
            "Invite members to your generated channels without letting anyone else in.",
    },
    {
        name: "Hide at Limit",
        description:
            "Hide the voice channel generator when the max no. channels are generated.",
    },
    {
        name: "Priority Support",
        description:
            "Get priority support with any of your problems or suggestions.",
    },
    {
        name: "Supporter Role",
        description:
            "Get the supporter role on the official server to show your support.",
    },
];

const PremiumFeatures = () => {
    return (
        <div className="pb-24 sm:pb-32" id="features">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    <div>
                        <h2 className="text-lg font-semibold leading-8 tracking-tight text-indigo-600">
                            Everything you need
                        </h2>
                        <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                            All the tools you need to upgrade your server
                        </p>
                        <p className="mt-6 text-base leading-7 text-gray-600">
                            Unlock the full potential of your server with our
                            premium features.
                        </p>
                    </div>
                    <dl className="col-span-2 grid grid-cols-1 gap-x-8 gap-y-10 text-base leading-7 text-gray-600 sm:grid-cols-2 lg:gap-y-16">
                        {features.map((feature) => (
                            <div key={feature.name} className="relative pl-9">
                                <dt className="font-semibold text-gray-900">
                                    <CheckIcon
                                        className="absolute top-1 left-0 h-5 w-5 text-indigo-500"
                                        aria-hidden="true"
                                    />
                                    {feature.name}
                                </dt>
                                <dd className="mt-2">{feature.description}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    );
};

export default PremiumFeatures;
