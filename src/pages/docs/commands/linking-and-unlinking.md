---
title: Linking Commands
description: Learn how to use linking commands in VC Roles.
pageTitle: VC Roles | Linking Commands
---

## What are linking commands?

The linking commands allow you to use the [linking feature](/docs/features/linking) in VC Roles. You can use the linking commands to link and unlink channels.

## /link

The `/link` command allows you to link a channel to a role. [Learn more about linking](/docs/features/linking).

### Link Usage

`/link <channel> <role>`

![Linking a channel](/assets/link-command.png)

### Link Options

-   `channel` - The channel to link
-   `role` - The role to link to the channel

## /unlink

The `/unlink` command allows you to unlink a channel from a role. [Learn more about unlinking](/docs/features/linking#unlinking).

### Unlink Usage

`/unlink <channel> <role>`

![Unlinking a channel](/assets/unlink-command.png)

### Unlink Options

-   `channel` - The channel to unlink
-   `role` - The role to unlink from the channel

## /suffix add

The `/suffix add` command allows you to link a suffix with a role. [Learn more about suffixes](/docs/features/linking#what-is-a-suffix).

### Suffix Add Usage

`/suffix add <channel> <suffix>`

![Adding a suffix](/assets/suffix-add-command.png)

### Suffix Add Options

-   `channel` - The channel to add the suffix to
-   `suffix` - The suffix to add

## /suffix remove

The `/suffix remove` command allows you to unlink a suffix from a role. [Learn more about suffixes](/docs/features/linking#what-is-a-suffix).

### Suffix Remove Usage

`/suffix remove <channel>`

![Removing a suffix](/assets/suffix-remove-command.png)

### Suffix Remove Options

-   `channel` - The channel to remove the suffix from

## /reverse link

The `/reverse link` command allows you to link a role to a channel. [Learn more about reverse linking](/docs/features/linking#what-is-a-reverse-link).

### Reverse Link Usage

`/reverse link <channel> <role>`

![Reverse linking a channel](/assets/reverse-link-command.png)

### Reverse Link Options

-   `channel` - The channel to reverse link
-   `role` - The role to reverse link to the channel

## /reverse unlink

The `/reverse unlink` command allows you to unlink a role from a channel. [Learn more about reverse unlinking](/docs/features/linking#what-is-a-reverse-link).

### Reverse Unlink Usage

`/reverse unlink <channel> <role>`

![Reverse unlinking a channel](/assets/reverse-unlink-command.png)

### Reverse Unlink Options

-   `channel` - The channel to reverse unlink
-   `role` - The role to reverse unlink from the channel

## /forceunlink

The `/forceunlink` command allows you to force unlink a channel from a role.

### Force Unlink Usage

`/forceunlink <channel_id>`

![Force unlinking a channel](/assets/forceunlink-command.png)

### Force Unlink Options

-   `channel_id` - The channel ID to force unlink
