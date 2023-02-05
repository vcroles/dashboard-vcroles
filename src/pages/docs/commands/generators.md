---
title: Voice Generator Commands
description: Learn how to use voice generator commands in VC Roles.
pageTitle: VC Roles | Voice Generator Commands
---

## What are voice generator commands?

The voice generator commands allow you to use the [voice generator feature](/docs/features/voice-channel-generators) in VC Roles. You can use the voice generator commands to add and remove voice generators.

## /generator create default

The `/generator create default` command allows you to create a default voice generator. [Learn more about default voice generators](/docs/features/voice-channel-generators#default).

### Default Generator Create Usage

`/generator create default <user_editable> [channel_limit] [category_name] [voice_channel_name] [create_interface_channel] [interface_channel_name] [default_user_limit]`

![Creating a default generator](/assets/default-generator-create-command.png)

### Default Generator Create Options

-   `user_editable` - Whether users can edit their generated voice channel
-   `channel_limit` - The maximum number of voice channels that can be generated
-   `category_name` - The name of the category to create the voice channels in
-   `voice_channel_name` - The name of the generator voice channel
-   `create_interface_channel` - Whether to create an interface channel (default: `user_editable`)
-   `interface_channel_name` - The name of the interface channel
-   `default_user_limit` - The default user limit for the generated voice channels

## /generator create numbered

The `/generator create numbered` command allows you to create a numbered voice generator. [Learn more about numbered voice generators](/docs/features/voice-channel-generators#numbered).

### Numbered Generator Create Usage

`/generator create numbered <user_editable> <generated_channel_name> <channel_limit> [category_name] [create_interface_channel] [interface_channel_name] [voice_channel_name] [default_user_limit]`

![Creating a numbered generator](/assets/numbered-generator-create-command.png)

### Numbered Generator Create Options

-   `user_editable` - Whether users can edit their generated voice channel
-   `generated_channel_name` - The name of the generated voice channels
-   `channel_limit` - The maximum number of voice channels that can be generated
-   `category_name` - The name of the category to create the voice channels in
-   `create_interface_channel` - Whether to create an interface channel (default: `user_editable`)
-   `interface_channel_name` - The name of the interface channel
-   `voice_channel_name` - The name of the generator voice channel
-   `default_user_limit` - The default user limit for the generated voice channels

## /generator create clone

The `/generator create clone` command allows you to create a clone voice generator. [Learn more about clone voice generators](/docs/features/voice-channel-generators#clone).

### Clone Generator Create Usage

`/generator create clone <user_editable> <voice_channel_name> [channel_limit] [category_name] [create_interface_channel] [interface_channel_name]`

![Creating a clone generator](/assets/clone-generator-create-command.png)

### Clone Generator Create Options

-   `user_editable` - Whether users can edit their generated voice channel
-   `voice_channel_name` - The name of the generator voice channel
-   `channel_limit` - The maximum number of voice channels that can be generated
-   `category_name` - The name of the category to create the voice channels in
-   `create_interface_channel` - Whether to create an interface channel (default: `user_editable`)
-   `interface_channel_name` - The name of the interface channel

## /generator create custom_name

The `/generator create custom_name` command allows you to create a custom name voice generator. [Learn more about custom name voice generators](/docs/features/voice-channel-generators#custom-name).

### Custom Name Generator Create Usage

`/generator create custom_name <user_editable> <generated_channel_name> <channel_limit> [category_name] [create_interface_channel] [interface_channel_name] [voice_channel_name] [default_user_limit]`

![Creating a custom name generator](/assets/custom-name-generator-create-command.png)

### Custom Name Generator Create Options

-   `user_editable` - Whether users can edit their generated voice channel
-   `generated_channel_name` - The name of the generated voice channels
-   `channel_limit` - The maximum number of voice channels that can be generated
-   `category_name` - The name of the category to create the voice channels in
-   `create_interface_channel` - Whether to create an interface channel (default: `user_editable`)
-   `interface_channel_name` - The name of the interface channel
-   `voice_channel_name` - The name of the generator voice channel
-   `default_user_limit` - The default user limit for the generated voice channels

## /generator remove

The `/generator remove` command allows you to remove a voice generator.

### Generator Remove Usage

`/generator remove <generator>`

![Removing a generator](/assets/generator-remove-command.png)

### Generator Remove Options

-   `generator` - The generator channel to remove

## /generator force_remove

The `/generator force_remove` command allows you to force remove a voice generator. You can use this command when you don't know which channel is setup as the generator. It will remove all generators linked with your channel from the database **it will NOT delete** the actual channels from your server, just make them non-functional.

### Generator Force Remove Usage

`/generator force_remove`

![Force removing a generator](/assets/generator-force-remove-command.png)

### Generator Force Remove Options

-   `none`

## /generator toggle

The `/generator toggle` command allows you to toggle a default option for a voice generator.

### Generator Toggle Usage

`/generator toggle <generator> <option> <state>`

![Toggling a generator option](/assets/generator-toggle-command.png)

### Generator Toggle Options

-   `generator` - The generator channel to toggle the option for
-   `option` - The option to toggle. [Learn more about generator options](/docs/features/voice-channel-generators#what-other-options-are-available)
-   `state` - The state to toggle the option to

## /generator options

The `/generator options` command allows you to view the options for a voice generator.

### Generator Options Usage

`/generator options <generator>`

![Viewing generator options](/assets/generator-options-command.png)

### Generator Options Options

-   `generator` - The generator channel to view the options for

## /generator role

Sets the default role the bot edits permissions for e.g. when locking a channel this is the role permissions will be edited for. By default this is the @everyone role.

### Generator Role Usage

`/generator role <generator> <default_role>`

![Setting the generator role](/assets/generator-role-command.png)

### Generator Role Options

-   `generator` - The generator channel to set the role for
-   `default_role` - The role to set as the default role

## /generator restrict_role

Sets a role which cannot use the voice channel generator - when a user with that role joins, they will be disconnected from the generated channel, and they won't be able to join newly created channels either.

### Generator Restrict Role Usage

`/generator restrict_role <generator> <role>`

![Setting the generator restrict role](/assets/generator-restrict-role-command.png)

### Generator Restrict Role Options

-   `generator` - The generator channel to set the restrict role for
-   `role` - The role to set as the restrict role

## /generator hide_at_limit

Sets whether the generator channel should be hidden when the channel limit is reached.

{% callout title="Premium" %}
This feature is only available to [Premium](/pricing) users.
{% /callout %}

### Generator Hide At Limit Usage

`/generator hide_at_limit <generator> <enabled>`

![Setting the generator hide at limit](/assets/generator-hide-at-limit-command.png)

### Generator Hide At Limit Options

-   `generator` - The generator channel to set the hide at limit for
-   `enabled` - Whether to enable or disable hiding the generator channel at limit
