---
title: Interface Commands
description: Learn how to use interface commands in VC Roles.
pageTitle: VC Roles | Interface Commands
---

## What are interface commands?

The interface commands allow you to use the same tools as the [interface channel feature](/docs/features/voice-channel-generators#what-is-an-interface-channel) except without the need for a special channel.

{% callout title="Owner" %}
For all these commands (except claim) you need to be the owner of the voice channel.
{% /callout %}

## /interface lock

The `/interface lock` command allows you to lock a voice channel. This stops other members from being able to join the channel

### Interface Lock Usage

`/interface lock`

![Locking a channel](/assets/interface-lock-command.png)

## /interface unlock

The `/interface unlock` command allows you to unlock a voice channel. This allows other members to join the channel.

### Interface Unlock Usage

`/interface unlock`

![Unlocking a channel](/assets/interface-unlock-command.png)

## /interface hide

The `/interface hide` command allows you to hide a voice channel. This stops other members from being able to see the channel.

### Interface Hide Usage

`/interface hide`

![Hiding a channel](/assets/interface-hide-command.png)

## /interface show

The `/interface show` command allows you to show a voice channel. This allows other members to see the channel.

### Interface Show Usage

`/interface show`

![Showing a channel](/assets/interface-show-command.png)

## /interface increase

The `/interface increase` command allows you to increase the user limit in a voice channel.

### Interface Increase Usage

`/interface increase`

![Increasing a channel](/assets/interface-increase-command.png)

## /interface decrease

The `/interface decrease` command allows you to decrease the user limit in a voice channel.

### Interface Decrease Usage

`/interface decrease`

![Decreasing a channel](/assets/interface-decrease-command.png)

## /interface limit

The `/interface limit` command allows you to set the user limit in a voice channel.

### Interface Limit Usage

`/interface limit <limit>`

![Limiting a channel](/assets/interface-limit-command.png)

### Interface Limit Options

- `limit` - The new user limit

## /interface rename

The `/interface rename` command allows you to rename a voice channel.

### Interface Rename Usage

`/interface rename <name>`

![Renaming a channel](/assets/interface-rename-command.png)

### Interface Rename Options

- `name` - The new name for the channel

## /interface claim

The `/interface claim` command allows you to claim a voice channel. This allows you to use the interface commands in a channel that you didn't own.

The owner must have left the channel for you to be able to claim it.

### Interface Claim Usage

`/interface claim`

![Claiming a channel](/assets/interface-claim-command.png)

## /interface invite

Invites a user to your voice channel. The user will receive a DM, letting them know, and the channel permissions will be updated to let them in (so if your channel is locked and you invite them, they are allowed to join).

{% callout title="Premium" %}
This command is only available in [premium](/pricing) servers.
{% /callout %}

### Interface Invite Usage

`/interface invite <user> [message]`

![Inviting a user](/assets/interface-invite-command.png)

### Interface Invite Options

- `user` - The user to invite
- `message` - The message to send to the user

## /interface permit

The `/interface permit` command allows you to permit a user/role to join your voice channel. This allows the member/role to join the channel even if it is locked.

### Interface Permit Usage

`/interface permit`

![Permitting a user](/assets/interface-permit-command.png)

You can then select the member(s)/role(s) to permit.

## /interface restrict

The `/interface restrict` command allows you to restrict a user/role from joining your voice channel. This prevents the member/role from joining the channel even if it is unlocked.

### Interface Restrict Usage

`/interface restrict`

![Restricting a user](/assets/interface-restrict-command.png)

You can then select the member(s)/role(s) to restrict.
