export default function StatsSection() {
    return (
        <div className="relative overflow-hidden py-12 sm:py-16">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        VC Roles: Enhancing Discord Voice Channels
                    </h2>
                    <p className="mt-6 text-base leading-7 text-gray-600">
                        VC Roles is a powerful Discord bot that enriches your
                        server's voice channels with features like role
                        assignment, channel generators, and more. Join thousands
                        of servers already benefiting from our services.
                    </p>
                </div>
                <div className="mx-auto mt-16 flex max-w-2xl flex-col gap-8 lg:mx-0 lg:mt-20 lg:max-w-none lg:flex-row lg:items-end">
                    <div className="flex flex-col-reverse justify-between gap-x-16 gap-y-8 rounded-2xl bg-gray-50 p-8 sm:w-3/4 sm:max-w-md sm:flex-row-reverse sm:items-end lg:w-72 lg:max-w-none lg:flex-none lg:flex-col lg:items-start">
                        <p className="flex-none text-3xl font-bold tracking-tight text-gray-900">
                            237 million
                        </p>
                        <div className="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
                            <p className="text-lg font-semibold tracking-tight text-gray-900">
                                Roles changed by VC Roles
                            </p>
                            <p className="mt-2 text-base leading-7 text-gray-600">
                                Streamlining server management and enhancing
                                user experiences across Discord.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col-reverse justify-between gap-x-16 gap-y-8 rounded-2xl bg-gray-900 p-8 sm:flex-row-reverse sm:items-end lg:w-full lg:max-w-sm lg:flex-auto lg:flex-col lg:items-start lg:gap-y-44">
                        <p className="flex-none text-3xl font-bold tracking-tight text-white">
                            16,448
                        </p>
                        <div className="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
                            <p className="text-lg font-semibold tracking-tight text-white">
                                Trusted by over 16,000 servers
                            </p>
                            <p className="mt-2 text-base leading-7 text-gray-400">
                                Join the growing community of Discord servers
                                enhanced by VC Roles - there's features for
                                servers of all sizes!
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col-reverse justify-between gap-x-16 gap-y-8 rounded-2xl bg-indigo-600 p-8 sm:w-11/12 sm:max-w-xl sm:flex-row-reverse sm:items-end lg:w-full lg:max-w-none lg:flex-auto lg:flex-col lg:items-start lg:gap-y-28">
                        <p className="flex-none text-3xl font-bold tracking-tight text-white">
                            15.8 million
                        </p>
                        <div className="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
                            <p className="text-lg font-semibold tracking-tight text-white">
                                Members across Discord
                            </p>
                            <p className="mt-2 text-base leading-7 text-indigo-200">
                                We're proud to empower more than 15 million
                                members across Discord.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
