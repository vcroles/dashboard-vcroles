import { Fragment } from "react";
import { Listbox, Transition } from "@headlessui/react";
import {
    CheckIcon,
    ChevronUpDownIcon,
    XMarkIcon,
} from "@heroicons/react/20/solid";
import type { Role } from "../server/trpc/router/discord";

import { classNames } from "../utils/utils";

const RoleDropdown: React.FC<{
    roles: Role[];
    disabled?: boolean;
    selected: Role | null;
    setSelected: (role: Role | null) => void;
}> = ({ roles, disabled, selected, setSelected }) => {
    roles.sort((a, b) => a.name.localeCompare(b.name));
    return (
        <Listbox value={selected} onChange={setSelected} disabled={disabled}>
            {({ open }) => (
                <>
                    <div className="relative mt-1">
                        <Listbox.Button
                            className={classNames(
                                disabled ? "cursor-default" : "cursor-pointer",
                                "relative w-full rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
                            )}
                        >
                            <span className="flex items-center">
                                {selected ? (
                                    <>
                                        <span
                                            className={`block h-5 w-5 rounded-full`}
                                            style={{
                                                backgroundColor:
                                                    `#${selected.color.toString(
                                                        16
                                                    )}` === "#0"
                                                        ? "#99AAb5"
                                                        : `#${selected.color.toString(
                                                              16
                                                          )}`,
                                            }}
                                        />
                                        <span className="ml-3 block truncate">
                                            {selected?.name}
                                        </span>
                                        <XMarkIcon
                                            className="ml-auto h-5 w-5 text-gray-400"
                                            aria-hidden="true"
                                            onClick={() => setSelected(null)}
                                        />
                                    </>
                                ) : (
                                    <span className="ml-3 block truncate">
                                        Select a role
                                    </span>
                                )}
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
                                {roles.map((role) => (
                                    <Listbox.Option
                                        key={role.id}
                                        className={({ active }) =>
                                            classNames(
                                                active
                                                    ? "bg-indigo-600 text-white"
                                                    : "text-gray-900",
                                                "relative cursor-default select-none py-2 pl-3 pr-9"
                                            )
                                        }
                                        value={role}
                                    >
                                        {({ selected, active }) => (
                                            <>
                                                <div className="flex items-center">
                                                    <span
                                                        className={`block h-5 w-5 rounded-full`}
                                                        style={{
                                                            backgroundColor:
                                                                `#${role.color.toString(
                                                                    16
                                                                )}` === "#0"
                                                                    ? "#99AAb5"
                                                                    : `#${role.color.toString(
                                                                          16
                                                                      )}`,
                                                        }}
                                                    />
                                                    <span
                                                        className={classNames(
                                                            selected
                                                                ? "font-semibold"
                                                                : "font-normal",
                                                            "ml-3 block truncate"
                                                        )}
                                                    >
                                                        {role.name}
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
                </>
            )}
        </Listbox>
    );
};

export default RoleDropdown;
