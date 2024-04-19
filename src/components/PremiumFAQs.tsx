import Link from "next/link";

const faqs = [
    {
        question: "Where can I buy premium?",
        answer() {
            return (
                <p>
                    You can buy premium{" "}
                    <Link
                        className="cursor-pointer font-semibold text-indigo-600 hover:text-indigo-500"
                        href="#pricing"
                    >
                        above
                    </Link>
                    . Or directly from the{" "}
                    <Link
                        href="https://discord.com/application-directory/775025797034541107/premium"
                        className="font-semibold text-indigo-600 hover:text-indigo-500"
                    >
                        Discord App Directory
                    </Link>
                    .
                </p>
            );
        },
    },
    {
        question: "What is the difference between premium and free?",
        answer() {
            return (
                <p>
                    Premium has more features than free, without any limitations
                    on usage. You can see the full list of features{" "}
                    <Link
                        href="#features"
                        className="font-semibold text-indigo-600 hover:text-indigo-500"
                    >
                        above
                    </Link>
                    .
                </p>
            );
        },
    },
    {
        question: "Can I use premium on multiple servers?",
        answer() {
            return (
                <p>
                    Premium subscriptions are only available on one server at a
                    time, however after purchasing a subscription the
                    user-specific benefits will be available to you across all
                    servers.
                </p>
            );
        },
    },
    {
        question: "I'm still unsure about premium, can I get help?",
        answer() {
            return (
                <p>
                    If you have any questions, please join our{" "}
                    <Link
                        href="/support"
                        className="font-semibold text-indigo-600 hover:text-indigo-500"
                    >
                        support server
                    </Link>{" "}
                    and we&apos;ll be happy to help.
                </p>
            );
        },
    },
];

const PremiumFAQs = () => {
    return (
        <div>
            <div className="mx-auto max-w-7xl px-6 pb-24 sm:pt-32 lg:px-8 lg:pb-40">
                <div className="lg:grid lg:grid-cols-12 lg:gap-8">
                    <div className="lg:col-span-5">
                        <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">
                            Frequently asked questions
                        </h2>
                        <p className="mt-4 text-base leading-7 text-gray-600">
                            Can’t find the answer you’re looking for? Join our{" "}
                            <Link
                                href="/support"
                                className="font-semibold text-indigo-600 hover:text-indigo-500"
                            >
                                support server
                            </Link>
                            .
                        </p>
                    </div>
                    <div className="mt-10 lg:col-span-7 lg:mt-0">
                        <dl className="space-y-10">
                            {faqs.map((faq) => (
                                <div key={faq.question}>
                                    <dt className="text-base font-semibold leading-7 text-gray-900">
                                        {faq.question}
                                    </dt>
                                    <dd className="mt-2 text-base leading-7 text-gray-600">
                                        {faq.answer()}
                                    </dd>
                                </div>
                            ))}
                        </dl>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PremiumFAQs;
