import { useRouter } from "next/router";
import DashboardLayout from "../../../layouts/Dashboard";
import { trpc } from "../../../utils/trpc";
import type { NextPageWithLayout } from "../../_app";

type Query = {
    id: string;
};

const DashboardGeneratorsPage: NextPageWithLayout = () => {
    const router = useRouter();
    const { id } = router.query as Query;

    const { data: channels } = trpc.discord.getGenerators.useQuery({
        guild: id,
    });

    const { data: roles } = trpc.discord.getGuildRoles.useQuery({
        guild: id,
    });

    const { data: generators } = trpc.discord.getGenerators.useQuery({
        guild: id,
    });

    return (
        <>
            <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-4">
                    <h1 className="text-2xl font-bold">Generators</h1>
                    <p className="text-gray-500">
                        Create a generator to automatically create voice
                        channels when a user joins a voice channel.
                    </p>
                </div>
                <div className="flex flex-col gap-4">
                    <h1 className="text-xl font-bold">Create a Generator</h1>
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col gap-2">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                className="rounded-md border border-gray-300 px-2 py-1"
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="name">Channel</label>
                            <select
                                name="channel"
                                id="channel"
                                className="rounded-md border border-gray-300 px-2 py-1"
                            >
                                {channels?.map((channel) => (
                                    <option key={channel.id} value={channel.id}>
                                        {channel.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="name">Role</label>
                            <select
                                name="role"
                                id="role"
                                className="rounded-md border border-gray-300 px-2 py-1"
                            >
                                {roles?.map((role) => (
                                    <option key={role.id} value={role.id}>
                                        {role.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="name">Limit</label>
                            <input
                                type="number"
                                name="limit"
                                id="limit"
                                className="rounded-md border border-gray-300 px-2 py-1"
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="name">Bitrate</label>
                            <input
                                type="number"
                                name="bitrate"
                                id="bitrate"
                                className="rounded-md border border-gray-300 px-2 py-1"
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="name">User Limit</label>
                            <input
                                type="number"
                                name="userLimit"
                                id="userLimit"
                                className="rounded-md border border-gray-300 px-2 py-1"
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="name">Category</label>
                            <select
                                name="category"
                                id="category"
                                className="rounded-md border border-gray-300 px-2 py-1"
                            >
                                {channels?.map((channel) => (
                                    <option key={channel.id} value={channel.id}>
                                        {channel.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

DashboardGeneratorsPage.getLayout = (page) => (
    <DashboardLayout>{page}</DashboardLayout>
);

export default DashboardGeneratorsPage;
