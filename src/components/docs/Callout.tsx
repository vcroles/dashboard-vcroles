import { classNames } from "src/utils/utils";

import { Icon } from "@/components/docs/Icon";

const styles = {
    note: {
        container:
            "bg-sky-50 dark:bg-slate-800/60 dark:ring-1 dark:ring-slate-300/10",
        title: "text-sky-900 dark:text-sky-400",
        body: "text-sky-800 [--tw-prose-background:theme(colors.sky.50)] prose-a:text-sky-900 prose-code:text-sky-900 dark:text-slate-300 dark:prose-code:text-slate-300",
    },
    warning: {
        container:
            "bg-amber-50 dark:bg-slate-800/60 dark:ring-1 dark:ring-slate-300/10",
        title: "text-amber-900 dark:text-amber-500",
        body: "text-amber-800 [--tw-prose-underline:theme(colors.amber.400)] [--tw-prose-background:theme(colors.amber.50)] prose-a:text-amber-900 prose-code:text-amber-900 dark:text-slate-300 dark:[--tw-prose-underline:theme(colors.sky.700)] dark:prose-code:text-slate-300",
    },
};

const icons = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    note: (props: any) => <Icon icon="lightbulb" {...props} />,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    warning: (props: any) => <Icon icon="warning" color="amber" {...props} />,
};

export function Callout({
    type = "note",
    title,
    children,
}: {
    type?: keyof typeof styles;
    title: string;
    children: React.ReactNode;
}) {
    const IconComponent = icons[type];

    return (
        <div
            className={classNames(
                "my-8 flex rounded-3xl p-6",
                styles[type].container,
            )}
        >
            <IconComponent className="h-8 w-8 flex-none" />
            <div className="ml-4 flex-auto">
                <p
                    className={classNames(
                        "font-display m-0 text-xl",
                        styles[type].title,
                    )}
                >
                    {title}
                </p>
                <div className={classNames("prose mt-2.5", styles[type].body)}>
                    {children}
                </div>
            </div>
        </div>
    );
}
