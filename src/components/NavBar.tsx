import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { navigation } from "../constants";
import { classNames } from "../utils/utils";
import Logo from "./Logo";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

const NavBar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const router = useRouter();
    const currentPage = router.pathname;

    return (
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
                        <Link href="/" className="-m-1.5 p-1.5">
                            <span className="sr-only">VC Roles</span>
                            <Logo size={40} />
                        </Link>
                    </div>
                    <div className="flex lg:hidden">
                        <button
                            type="button"
                            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                            onClick={() => setMobileMenuOpen(true)}
                        >
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="z-10 hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-center lg:gap-x-12">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={classNames(
                                    "font-semibold text-gray-900 hover:text-gray-900",
                                    currentPage === item.href
                                        ? "font-extrabold"
                                        : "",
                                )}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>
                    <div className="hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-end">
                        <SignedOut>
                            <SignInButton />
                        </SignedOut>
                        <SignedIn>
                            <UserButton />
                        </SignedIn>
                    </div>
                </nav>
                <Dialog
                    as="div"
                    open={mobileMenuOpen}
                    onClose={setMobileMenuOpen}
                >
                    <DialogPanel
                        // focus="true"
                        className="fixed inset-0 z-10 overflow-y-auto bg-white px-6 py-6 lg:hidden"
                    >
                        <div className="flex h-9 items-center justify-between">
                            <div className="flex">
                                <Link href="/" className="-m-1.5 p-1.5">
                                    <span className="sr-only">VC Roles</span>
                                    <Logo size={40} />
                                </Link>
                            </div>
                            <div className="flex">
                                <button
                                    type="button"
                                    className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    <span className="sr-only">Close menu</span>
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
                                        <Link
                                            key={item.name}
                                            href={item.href}
                                            className={classNames(
                                                "-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10",
                                                currentPage === item.href
                                                    ? "font-extrabold"
                                                    : "",
                                            )}
                                        >
                                            {item.name}
                                        </Link>
                                    ))}
                                </div>
                                <div className="py-6">
                                    <SignedOut>
                                        <SignInButton />
                                    </SignedOut>
                                    <SignedIn>
                                        <UserButton />
                                    </SignedIn>
                                </div>
                            </div>
                        </div>
                    </DialogPanel>
                </Dialog>
            </div>
        </div>
    );
};

export default NavBar;
