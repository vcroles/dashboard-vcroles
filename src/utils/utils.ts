export const iconHashToUrl = (hash: string, guildID: string) => {
    return `https://cdn.discordapp.com/icons/${guildID}/${hash}.png`;
};

export const classNames = (...classes: string[]) => {
    return classes.filter(Boolean).join(" ");
};
