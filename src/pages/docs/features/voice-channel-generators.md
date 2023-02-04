---
title: Voice Channel Generators
description: Learn how to use voice channel generators in VC Roles.
pageTitle: VC Roles | Voice Generators
---

## What are voice channel generators?

Voice channel generators are a feature that allows you to create a voice channel for each member who joins a specific voice channel. This is useful if you want members to be able to create their own private voice channels.

Generators are highly customisable, giving users the ability to edit their channel however they like, such as locking, hiding, renaming and editing which roles/members can join their channel for ultimate control.

{% callout title="Premium" %}
All servers are able to create one free generator, but to create more than one, you will need to [upgrade to premium](/pricing).
{% /callout %}

## How can I make a voice channel generator?

Currently the only way to create a voice channel generator is using discord commands. You can find more information about the commands on the [commands page](/docs/commands/generators).

## What are the different types of generators?

### Default

The default generator is the most basic generator. It allows you to create a voice channel for each member who joins a specific voice channel. You can also set a limit on how many channels can be created, create an [interface channel](#what-is-an-interface-channel) and set a default user limit for each channel.

### Numbered

The numbered generator is similar to the default generator, but it allows you to set a prefix for the channel name, after which a number will be added. This is useful if you want to create a channel for each member, but you want to keep the channels organised. Options which are available for the default generator are also available for the numbered generator.

Example: `Member #1`, `Member #2`, `Member #3`, etc.

### Clone

The clone generator is similar to the default generator, but it allows you to clone the generator channel. This is useful if you want to create channels for gaming, or copy settings from the generator channel to the user's channel. Options which are available for the default generator are also available for the clone generator. The generated channels follow the naming scheme of the generator channel.

Example: The generator channel is called `Gaming`, the generated channels will be called `[Gaming] #1`, `[Gaming] #2`, `[Gaming] #3`, etc.

### Custom Name

The custom name generator is similar to the default generator, but allows you to use the user's name and count in the name. You can use the variables `$username` and `$count` to use the user's name and count in the name. This is useful if you want to create a channel for each member, but you want to keep the channels organised. Options which are available for the default generator are also available for the custom name generator.

Example: `$username's Channel` could be `John's Channel`, `Bob's Channel`, `Sarah's Channel`, etc.

## What is an interface channel?

An interface channel is a channel where users can edit their channels. An interface channel is optional, but it is recommended to create one.

An example of an interface channel is shown below:

![Interface Channel](</assets/interface-channel.png>)

The 'Permit Roles/Members' select will give roles/members the permission to join your voice channel. Similarly, the 'Restrict Roles/Members' removes those role/members permissions to join your voice channel.

There are also a selection of commands that can be used as well. You can find more information about the commands on the [commands page](/docs/commands/interface-commands).

## What other options are available?

Using the [/generator toggle](/docs/commands/generators#generator-toggle) command, you can toggle the following options:

- **LOCK** - when enabled all generated channels are locked, but you can toggle this option to allow members to join their channel without needing to be given the permission.
- **HIDE** - when enabled all generated channels are hidden, but you can toggle this option to allow members to see their channel without needing to be given the permission.
- **OWNER** - when enabled all generated channels are owned by the member who created them, so only they can edit the channel.
- **TEXT** - when enabled all generated channels get their own private text channel. This is a [premium feature](/pricing).

To view which options are enabled, you can use the [/generator options](/docs/commands/generators#generator-options) command.

### Generator Roles

The generator role is the default role that the bot edits permissions for. E.g. when locking a channel this is the role the permission overwrite is applied to. By default this is the `@everyone` role, you can change the generator role using the [/generator role](/docs/commands/generators#generator-role) command.

### Generator Restrict Roles

The generator restrict role is a role which is not allowed to use the generator - They can't join the generator channel, and they can't join any generated channels. You can change the generator restrict role using the [/generator restrictrole](/docs/commands/generators#generator-restrictrole) command.

### Generator Hide at Limit

The generator hide at limit option is a feature which hides the generator channel when the channel limit is reached. You can toggle this option using the [/generator hide_at_limit](/docs/commands/generators#generator-hide_at_limit) command.
