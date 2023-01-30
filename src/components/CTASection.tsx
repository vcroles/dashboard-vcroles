import Link from "next/link";

const CTASection: React.FC = () => {
    return (
        <div className="bg-white">
            <div className="mx-auto max-w-7xl px-6 pb-24 sm:pb-32 lg:flex lg:items-center lg:justify-between lg:px-8">
                <h2 className="text-4xl font-bold tracking-tight text-gray-900">
                    Ready to dive in?
                    <br />
                    Invite the bot today.
                </h2>
                <div className="mt-10 flex items-center gap-x-6 lg:mt-0 lg:flex-shrink-0">
                    <Link
                        href="/invite"
                        className="rounded-md bg-indigo-600 px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Get started
                    </Link>
                    <Link
                        href="/docs"
                        className="text-base font-semibold leading-7 text-gray-900"
                    >
                        Learn more <span aria-hidden="true">→</span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

const PremiumCTASection: React.FC = () => {
    return (
        <div className="bg-white">
            <div className="mx-auto max-w-7xl px-6 pb-24 sm:pb-32 lg:flex lg:items-center lg:justify-between lg:px-8">
                <h2 className="text-4xl font-bold tracking-tight text-gray-900">
                    Ready to dive in?
                    <br />
                    Upgrade to premium today.
                </h2>
                <div className="mt-10 flex items-center gap-x-6 lg:mt-0 lg:flex-shrink-0">
                    <Link
                        href="/premium#pricing"
                        className="rounded-md bg-indigo-600 px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Get started
                    </Link>
                    <Link
                        href="/docs"
                        className="text-base font-semibold leading-7 text-gray-900"
                    >
                        Learn more <span aria-hidden="true">→</span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CTASection;
export { PremiumCTASection };
