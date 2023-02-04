---
title: Linking and Unlinking
description: What is linking and unlinking, and how to do it
pageTitle: VC Roles | Linking and Unlinking
---

## What are links?

A "link" is a connection between a voice channel and a role. When a member joins a linked voice channel, they are given the linked role. And when they leave, they are removed from the role.

VC Roles has a number of different types of links, and this page will explain how to use the most common ones. Links can be created with voice channels, stage channels, and categories.

Please note a link can also refer to a connection between a voice channel and a suffix. Which will be explained below.

## How can I make a link?

The easiest way to create a link, is using our [dashboard](/dashboard), which we will explain below. You can also use the [/link](/docs/commands/linking-and-unlinking#link) command in the server you wish to link the channel. Or the [/unlink](/docs/commands/linking-and-unlinking#unlink) command to remove a link.

### Linking and unlinking with the dashboard

The dashboard is a web interface that allows you to manage your server's settings, and create links.

1. Navigate to your server's [dashboard](/dashboard)
2. Select your server from the list
3. Click on the "Linked Channels" tab
![Linked Channels Tab](</assets/dashboard-sidebar-links.png>)
4. Select a channel to link from the dropdown menu and click "Create"
![Create Channel](</assets/dashboard-link-create.png>)
5. Select a role to link to the channel and click "Save"
![Edit Channel](</assets/dashboard-link-edit.png>)

As you can see above, there are also options for [reverse links](#what-is-a-reverse-link) and [suffixes](#what-is-a-suffix). You may also notice [speaker roles](#what-are-speaker-roles) or [exclude channels](#what-are-excluded-channels). These are explained below.

### Linking and unlinking with commands

You can also use the commands to create a link. You can find more information about the commands on the [commands page](/docs/commands/linking-and-unlinking).

## What is a suffix?

A "suffix" is a string of text that is added to the end of a member's nickname when they join a linked voice channel. When they leave, the suffix is removed.

Example: If a member's nickname is "John Doe", and the suffix is "🎧", then their nickname will be changed to "John Doe🎧" when they join a linked voice channel.

The command to add a suffix is [/suffix add](/docs/commands/linking-and-unlinking#suffix-add). The command to remove a suffix is [/suffix remove](/docs/commands/linking-and-unlinking#suffix-remove).

## What is a reverse link?

A "reverse link" is a connection between a role and a channel. When a member joins the channel the role will be removed from them, and when they leave the channel the role will be added back to them.

Example: If a member has the "Member" role, and the "Member" role is linked to the "General" voice channel, then when the member joins the "General" voice channel, they will lose the "Member" role. And when they leave the "General" voice channel, they will get the "Member" role again.

The command to add a reverse link is [/reverse link](/docs/commands/linking-and-unlinking#reverse-link). The command to remove a reverse link is [/reverse unlink](/docs/commands/linking-and-unlinking#reverse-unlink).

## What are speaker roles?

A "speaker role" is a type of role specific to stage channels. When a member begins speaking in the linked stage channel, they will be given the linked role. When they stop speaking, the role will be removed.

The command to add a speaker role is [/stage speaker link](/docs/commands/linking-and-unlinking#stage-speaker-link). The command to remove a speaker role is [/stage speaker unlink](/docs/commands/linking-and-unlinking#stage-speaker-unlink).

## What are excluded channels?

An "excluded channel" is a channel that is not linked to a role. When a member joins an excluded channel, they will not be given the linked role. When they leave the channel, they will not be removed from the role.
