export const iconHashToUrl = (hash: string, guildID: string, size?: number) => {
    return `https://cdn.discordapp.com/icons/${guildID}/${hash}.png?size=${
        size || 128
    }`;
};

export const classNames = (...classes: string[]) => {
    return classes.filter(Boolean).join(" ");
};
