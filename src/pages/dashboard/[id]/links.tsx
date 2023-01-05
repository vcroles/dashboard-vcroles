import { Switch } from "@headlessui/react";
import { useRouter } from "next/router";
import { type ReactElement, useEffect, useState } from "react";
import {
    HashtagIcon,
    FolderIcon,
    SpeakerWaveIcon,
    SignalIcon,
    ListBulletIcon,
} from "@heroicons/react/20/solid";

import type { NextPageWithLayout } from "../../_app";
import DashboardLayout from "../../../layouts/Dashboard";
import { trpc } from "../../../utils/trpc";
import { classNames } from "../../../utils/utils";
import ChannelDropdown from "../../../components/ChannelDropdown";
import type { Channel, Role } from "../../../server/trpc/router/discord";
import RoleDropdown from "../../../components/RoleDropdown";
import RoleSelectionBox from "../../../components/RoleSelectionBox";
import Loading from "../../../components/Loading";
import { LinkType } from "@prisma/client";
import ChannelSelectionBox from "../../../components/ChannelSelectionBox";

type Query = {
    id: string;
};

const DashboardLinksPage: NextPageWithLayout = () => {
    const router = useRouter();
    const { id } = router.query as Query;

    const { data: channels } = trpc.discord.getGuildChannels.useQuery({
        guild: id,
    });
    const { data: roles } = trpc.discord.getGuildRoles.useQuery({ guild: id });
    const { data: linkData, isLoading: linksLoading } =
        trpc.discord.getLinks.useQuery({ guild: id });
    const [links, setLinks] = useState(linkData);
    // const { data: guild } = trpc.discord.getGuildData.useQuery({ guild: id });

    // const utils = trpc.useContext();
    // const mutation = trpc.discord.updateGuildData.useMutation({
    //     onMutate: () => {
    //         utils.discord.getGuildData.cancel({ guild: id });
    //         const optimisticUpdate = utils.discord.getGuildData.getData({
    //             guild: id,
    //         });
    //         if (optimisticUpdate) {
    //             utils.discord.getGuildData.setData(
    //                 { guild: id },
    //                 optimisticUpdate
    //             );
    //         }
    //     },
    //     onSettled: () => {
    //         utils.discord.getGuildData.invalidate({ guild: id });
    //     },
    // });

    // every time the ID changes, update the state
    useEffect(() => {
        setLinks(linkData);
    }, [id, linkData]);

    return (
        <form
            className="mt-6 space-y-8 divide-y divide-gray-200"
            onSubmit={(e) => {
                e.preventDefault();
                // mutation.mutate({
                //     guild: id,
                // });
            }}
        >
            <div className="space-y-8 divide-y divide-gray-200 sm:space-y-5">
                <div className="space-y-6 sm:space-y-5">
                    <div>
                        <h3 className="text-lg font-medium leading-6 text-gray-900">
                            Links
                        </h3>
                        <p className="mt-1 max-w-2xl text-sm text-gray-500">
                            Edit the links for this server.
                        </p>
                    </div>
                </div>
            </div>

            {linksLoading ? (
                <div className="m-4">
                    <Loading />
                </div>
            ) : (
                <ul>
                    {links?.map((link) => {
                        const selectedChannel = channels?.find(
                            (c) => c.id === link.id
                        );
                        return (
                            <li
                                key={link.dbId}
                                className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-b sm:border-gray-200 sm:pt-5"
                            >
                                <div className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                    {selectedChannel ? (
                                        <div className="mb-2 flex items-center">
                                            {selectedChannel.type === 0 ? (
                                                <HashtagIcon className="h-5 w-5 text-gray-400" />
                                            ) : selectedChannel.type === 2 ? (
                                                <SpeakerWaveIcon className="h-5 w-5 text-gray-400" />
                                            ) : selectedChannel.type === 4 ? (
                                                <FolderIcon className="h-5 w-5 text-gray-400" />
                                            ) : selectedChannel.type === 13 ? (
                                                <SignalIcon className="h-5 w-5 text-gray-400" />
                                            ) : (
                                                <HashtagIcon className="h-5 w-5 text-gray-400" />
                                            )}
                                            <span className="ml-3 block truncate">
                                                {selectedChannel?.name}
                                            </span>
                                        </div>
                                    ) : null}
                                    {link.type === LinkType.ALL ? (
                                        <div className="mb-2 flex items-center">
                                            <ListBulletIcon className="h-5 w-5 text-gray-400" />
                                            <span className="ml-3 block truncate">
                                                All
                                            </span>
                                        </div>
                                    ) : null}
                                </div>
                                <div className="mt-1 mb-4 flex flex-col gap-4 sm:col-span-2 sm:mt-0">
                                    <RoleSelectionBox
                                        title="Linked Roles"
                                        roles={roles ?? []}
                                        selected={
                                            roles?.filter((r) =>
                                                link.linkedRoles.includes(r.id)
                                            ) ?? []
                                        }
                                        setSelected={(selected) => {
                                            const newLinks = links?.map((l) => {
                                                if (l.id === link.id) {
                                                    return {
                                                        ...l,
                                                        linkedRoles:
                                                            selected.map(
                                                                (r) => r.id
                                                            ),
                                                    };
                                                }
                                                return l;
                                            });
                                            setLinks(newLinks);
                                        }}
                                    />
                                    <RoleSelectionBox
                                        title="Reverse Linked Roles"
                                        roles={roles ?? []}
                                        selected={
                                            roles?.filter((r) =>
                                                link.reverseLinkedRoles.includes(
                                                    r.id
                                                )
                                            ) ?? []
                                        }
                                        setSelected={(selected) => {
                                            const newLinks = links?.map((l) => {
                                                if (l.id === link.id) {
                                                    return {
                                                        ...l,
                                                        reverseLinkedRoles:
                                                            selected.map(
                                                                (r) => r.id
                                                            ),
                                                    };
                                                }
                                                return l;
                                            });
                                            setLinks(newLinks);
                                        }}
                                    />
                                    <div>
                                        <div className="block text-sm font-medium leading-6 text-gray-700">
                                            Suffix
                                        </div>
                                        <div className="mt-1 sm:mt-0">
                                            <input
                                                type="text"
                                                name="suffix"
                                                className="block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:max-w-xs sm:text-sm"
                                                maxLength={32}
                                                value={link.suffix ?? ""}
                                                onChange={(e) => {
                                                    const newLinks = links?.map(
                                                        (l) => {
                                                            if (
                                                                l.id === link.id
                                                            ) {
                                                                return {
                                                                    ...l,
                                                                    suffix: e
                                                                        .target
                                                                        .value,
                                                                };
                                                            }
                                                            return l;
                                                        }
                                                    );
                                                    setLinks(newLinks);
                                                }}
                                            />
                                        </div>
                                    </div>
                                    {/* conditional speaker roles dropdown - only if channel type is stage */}
                                    {selectedChannel?.type === 13 ? (
                                        <RoleSelectionBox
                                            title="Speaker Roles"
                                            roles={roles ?? []}
                                            selected={
                                                roles?.filter((r) =>
                                                    link.speakerRoles.includes(
                                                        r.id
                                                    )
                                                ) ?? []
                                            }
                                            setSelected={(selected) => {
                                                const newLinks = links?.map(
                                                    (l) => {
                                                        if (l.id === link.id) {
                                                            return {
                                                                ...l,
                                                                speakerRoles:
                                                                    selected.map(
                                                                        (r) =>
                                                                            r.id
                                                                    ),
                                                            };
                                                        }
                                                        return l;
                                                    }
                                                );
                                                setLinks(newLinks);
                                            }}
                                        />
                                    ) : null}
                                    {/* conditional channel select for exclude channels if channel type is category or link type is all */}
                                    {selectedChannel?.type === 4 ||
                                    link.type === LinkType.ALL ||
                                    link.type === LinkType.CATEGORY ? (
                                        <ChannelSelectionBox
                                            title="Exclude Channels"
                                            channels={
                                                channels?.filter(
                                                    (c) =>
                                                        c.type === 2 ||
                                                        c.type === 13
                                                ) ?? []
                                            }
                                            selected={
                                                channels?.filter((c) =>
                                                    link.excludeChannels.includes(
                                                        c.id
                                                    )
                                                ) ?? []
                                            }
                                            setSelected={(selected) => {
                                                const newLinks = links?.map(
                                                    (l) => {
                                                        if (l.id === link.id) {
                                                            return {
                                                                ...l,
                                                                excludeChannels:
                                                                    selected.map(
                                                                        (c) =>
                                                                            c.id
                                                                    ),
                                                            };
                                                        }
                                                        return l;
                                                    }
                                                );
                                                setLinks(newLinks);
                                            }}
                                        />
                                    ) : null}
                                    {/* add a red delete button for deleting the entire link */}
                                    <div className="flex justify-end">
                                        <button
                                            type="button"
                                            className="inline-flex justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:text-sm"
                                            onClick={() => {
                                                const newLinks = links?.filter(
                                                    (l) => l.id !== link.id
                                                );
                                                setLinks(newLinks);
                                            }}
                                        >
                                            Delete Link
                                        </button>
                                    </div>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            )}

            <div className="pt-5">
                <div className="flex justify-end">
                    <button
                        type="button"
                        className="rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        onClick={() => {
                            // set to defaults
                        }}
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        className="ml-3 inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                        Save
                    </button>
                </div>
            </div>
        </form>
    );
};

DashboardLinksPage.getLayout = (page: ReactElement) => {
    return <DashboardLayout>{page}</DashboardLayout>;
};

export default DashboardLinksPage;
