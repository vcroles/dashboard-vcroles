import { Fragment } from "react";
import { Listbox, Transition } from "@headlessui/react";
import {
    CheckIcon,
    ChevronUpDownIcon,
    HashtagIcon,
    SignalIcon,
    SpeakerWaveIcon,
    FolderIcon,
    ListBulletIcon,
    LockClosedIcon,
} from "@heroicons/react/20/solid";

import { classNames } from "../utils/utils";
import { LinkType } from "@prisma/client";

const LinkTypeIcon: React.FC<{ type: LinkType }> = ({ type }) => {
    switch (type) {
        case "ALL":
            return (
                <ListBulletIcon
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                />
            );
        case "PERMANENT":
            return (
                <LockClosedIcon
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                />
            );
        case "REGULAR":
            return (
                <SpeakerWaveIcon
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                />
            );
        case "STAGE":
            return (
                <SignalIcon
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                />
            );
        case "CATEGORY":
            return (
                <FolderIcon
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                />
            );

        default:
            return (
                <HashtagIcon
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                />
            );
    }
};

const LinkTypeDropdown: React.FC<{
    selected: LinkType;
    setSelected: (type: LinkType) => void;
}> = ({ selected, setSelected }) => {
    return (
        <Listbox value={selected} onChange={setSelected}>
            {({ open }) => (
                <div className="relative mt-1">
                    <Listbox.Button className="relative w-full cursor-default rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm">
                        <span className="flex items-center">
                            <LinkTypeIcon type={selected} />
                            <span className="ml-3 block truncate capitalize">
                                {selected.toLowerCase()}
                            </span>
                        </span>
                        <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                            <ChevronUpDownIcon
                                className="h-5 w-5 text-gray-400"
                                aria-hidden="true"
                            />
                        </span>
                    </Listbox.Button>

                    <Transition
                        show={open}
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                            {Object.values(LinkType).map((linkType) => (
                                <Listbox.Option
                                    key={linkType}
                                    className={({ active }) =>
                                        classNames(
                                            active
                                                ? "bg-indigo-600 text-white"
                                                : "text-gray-900",
                                            "relative cursor-default select-none py-2 pl-3 pr-9"
                                        )
                                    }
                                    value={linkType}
                                >
                                    {({ selected, active }) => (
                                        <>
                                            <div className="flex items-center">
                                                <LinkTypeIcon type={linkType} />
                                                <span
                                                    className={classNames(
                                                        selected
                                                            ? "font-semibold"
                                                            : "font-normal",
                                                        "ml-3 block truncate capitalize"
                                                    )}
                                                >
                                                    {linkType.toLowerCase()}
                                                </span>
                                            </div>

                                            {selected ? (
                                                <span
                                                    className={classNames(
                                                        active
                                                            ? "text-white"
                                                            : "text-indigo-600",
                                                        "absolute inset-y-0 right-0 flex items-center pr-4"
                                                    )}
                                                >
                                                    <CheckIcon
                                                        className="h-5 w-5"
                                                        aria-hidden="true"
                                                    />
                                                </span>
                                            ) : null}
                                        </>
                                    )}
                                </Listbox.Option>
                            ))}
                        </Listbox.Options>
                    </Transition>
                </div>
            )}
        </Listbox>
    );
};

export default LinkTypeDropdown;
