import { useId } from "react";
import { classNames } from "src/utils/utils";

import { InstallationIcon } from "@/components/docs/icons/InstallationIcon";
import { LightbulbIcon } from "@/components/docs/icons/LightbulbIcon";
import { PluginsIcon } from "@/components/docs/icons/PluginsIcon";
import { PresetsIcon } from "@/components/docs/icons/PresetsIcon";
import { ThemingIcon } from "@/components/docs/icons/ThemingIcon";
import { WarningIcon } from "@/components/docs/icons/WarningIcon";

const icons = {
    installation: InstallationIcon,
    presets: PresetsIcon,
    plugins: PluginsIcon,
    theming: ThemingIcon,
    lightbulb: LightbulbIcon,
    warning: WarningIcon,
};

const iconStyles = {
    blue: "[--icon-foreground:theme(colors.slate.900)] [--icon-background:theme(colors.white)]",
    amber: "[--icon-foreground:theme(colors.amber.900)] [--icon-background:theme(colors.amber.100)]",
};

export type IconType = keyof typeof icons;
export type IconColor = keyof typeof iconStyles;

export function Icon({
    color = "blue",
    icon,
    className,
    ...props
}: {
    color?: IconColor;
    icon: IconType;
    className?: string;
}) {
    const id = useId();
    const IconComponent = icons[icon];

    return (
        <svg
            aria-hidden="true"
            viewBox="0 0 32 32"
            fill="none"
            className={classNames(className ?? "", iconStyles[color])}
            {...props}
        >
            <IconComponent id={id} color={color} />
        </svg>
    );
}

const gradients = {
    blue: [
        { stopColor: "#0EA5E9" },
        { stopColor: "#22D3EE", offset: ".527" },
        { stopColor: "#818CF8", offset: 1 },
    ],
    amber: [
        { stopColor: "#FDE68A", offset: ".08" },
        { stopColor: "#F59E0B", offset: ".837" },
    ],
};

export function Gradient({
    color = "blue",
    ...props
}: {
    color?: IconColor;
    id?: string;
    gradientTransform?: string;
}) {
    return (
        <radialGradient
            cx={0}
            cy={0}
            r={1}
            gradientUnits="userSpaceOnUse"
            {...props}
        >
            {gradients[color].map((stop, stopIndex) => (
                <stop key={stopIndex} {...stop} />
            ))}
        </radialGradient>
    );
}

export function LightMode({
    className,
    ...props
}: {
    className?: string;
    children?: React.ReactNode;
}) {
    return (
        <g className={classNames("dark:hidden", className ?? "")} {...props} />
    );
}

export function DarkMode({
    className,
    ...props
}: {
    className?: string;
    children?: React.ReactNode;
    strokeWidth?: number;
    strokeLinecap?: "butt" | "round" | "square" | "inherit";
    strokeLinejoin?: "miter" | "round" | "bevel" | "inherit";
    fill?: string;
}) {
    return (
        <g
            className={classNames("hidden dark:inline", className ?? "")}
            {...props}
        />
    );
}
