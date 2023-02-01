import Link from "next/link";

const faqs = [
    {
        question: "How do I activate my benefits?",
        answer() {
            return (
                <p>
                    To activate your benefits, you need to run the command{" "}
                    <span className="rounded bg-gray-100 p-1 font-mono text-indigo-600">
                        /premium activate [license_key]
                    </span>{" "}
                    with your license key.
                </p>
            );
        },
    },
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
                        here
                    </Link>
                    . Or from our Gumroad store{" "}
                    <Link
                        href="https://premium.vcroles.com/l/vcroles"
                        className="font-semibold text-indigo-600 hover:text-indigo-500"
                    >
                        here
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
                        here
                    </Link>
                    .
                </p>
            );
        },
    },
    {
        question: "Can I get a refund?",
        answer() {
            return (
                <p>
                    Refunds are not available. If you have any issues with the
                    bot, please join our{" "}
                    <Link
                        href="/support"
                        className="font-semibold text-indigo-600 hover:text-indigo-500"
                    >
                        support server
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
                    That depends on the tier you purchased. Please see the{" "}
                    <Link
                        href="#pricing"
                        className="font-semibold text-indigo-600 hover:text-indigo-500"
                    >
                        pricing
                    </Link>{" "}
                    section for details on what you get with each tier.
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
