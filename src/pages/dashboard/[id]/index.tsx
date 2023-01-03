import {
    CalendarIcon,
    ChartBarIcon,
    FolderIcon,
    HomeIcon,
    InboxIcon,
    UsersIcon,
} from "@heroicons/react/24/outline";
import { useRouter } from "next/router";
import type { ReactElement } from "react";

import type { NextPageWithLayout } from "../../_app";
import DashboardLayout from "../../../Layouts/Dashboard";

const navigation = [
    { name: "Dashboard", href: "#", icon: HomeIcon, current: true },
    { name: "Team", href: "#", icon: UsersIcon, current: false },
    { name: "Projects", href: "#", icon: FolderIcon, current: false },
    { name: "Calendar", href: "#", icon: CalendarIcon, current: false },
    { name: "Documents", href: "#", icon: InboxIcon, current: false },
    { name: "Reports", href: "#", icon: ChartBarIcon, current: false },
];

type Query = {
    id: string;
};

const DashboardPage: NextPageWithLayout = () => {
    const router = useRouter();
    const { id } = router.query as Query;

    return (
        <div className="h-96 rounded-lg border-4 border-dashed border-gray-200">
            <p className="pt-20 text-center text-2xl text-gray-400">{id}</p>
        </div>
    );
};

DashboardPage.getLayout = (page: ReactElement) => {
    return <DashboardLayout navigation={navigation}>{page}</DashboardLayout>;
};

export default DashboardPage;
