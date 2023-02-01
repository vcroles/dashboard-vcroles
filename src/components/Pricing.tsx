import { CheckIcon } from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/24/solid";

import { classNames } from "../utils/utils";

export type Tier = {
    title: string;
    monthly: number;
    yearly: number;
    description: string;
    features: string[];
    cta: string;
    mostPopular: boolean;
    url: string;
    serverCount: number;
};

const PricingSection: React.FC<{ tiers: Tier[] }> = ({ tiers }) => {
    return (
        <div>
            {/* Tiers */}
            <div className="mt-24 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:space-y-0">
                {tiers.map((tier) => (
                    <div
                        key={tier.title}
                        className="relative flex flex-col rounded-2xl border border-gray-200 bg-white p-8 shadow-sm"
                    >
                        <div className="flex-1">
                            <div className="flex flex-row">
                                <h3 className="text-xl font-semibold text-gray-900">
                                    {tier.title}
                                </h3>
                                <div className="ml-auto flex items-center">
                                    {[
                                        ...Array(
                                            tier.serverCount === 10
                                                ? 3
                                                : tier.serverCount === 3
                                                ? 2
                                                : 1
                                        ),
                                    ].map((_, i) => (
                                        <StarIcon
                                            key={i}
                                            className={
                                                "h-6 w-6 flex-shrink-0 text-highlight"
                                            }
                                            aria-hidden="true"
                                        />
                                    ))}
                                </div>
                            </div>
                            {tier.mostPopular ? (
                                <p className="absolute top-0 -translate-y-1/2 transform rounded-full bg-highlight-light py-1.5 px-4 text-sm font-semibold text-white">
                                    Most popular
                                </p>
                            ) : null}
                            <p className="mt-4 flex items-baseline text-gray-900">
                                <span className="text-5xl font-bold tracking-tight">
                                    £{tier.monthly}
                                </span>
                                <span className="ml-1 text-xl font-semibold">
                                    /month
                                </span>
                            </p>
                            <p className="mt-2 flex flex-col text-gray-900 sm:flex-row">
                                <span className="items-baseline">
                                    <span className="text-2xl font-bold tracking-tight">
                                        £{tier.yearly}
                                    </span>
                                    <span className="ml-1 font-semibold">
                                        /year
                                    </span>
                                </span>
                                <span className="w-fit rounded-full bg-yellow-200 px-4 py-1 sm:ml-2">
                                    Save 16%
                                </span>
                            </p>
                            <p className="mt-6 text-gray-500">
                                {tier.description}
                            </p>

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
                                            className="h-6 w-6 flex-shrink-0 text-highlight-light"
                                            aria-hidden="true"
                                        />
                                        <span className="ml-3 text-gray-500">
                                            {feature}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <a
                            href={tier.url}
                            className={classNames(
                                tier.mostPopular
                                    ? "bg-highlight-light text-white hover:bg-highlight"
                                    : "bg-indigo-50 text-indigo-700 hover:bg-indigo-100",
                                "mt-8 block w-full rounded-md border border-transparent py-3 px-6 text-center font-medium"
                            )}
                        >
                            {tier.cta}
                        </a>
                    </div>
                ))}
            </div>
            <p className="mt-6 max-w-2xl text-xs italic text-gray-500">
                All prices shown are in GBP, and may exclude applicable taxes.
            </p>
        </div>
    );
};

export default PricingSection;
