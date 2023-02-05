---
title: Audit Logging
description: Learn how to use audit logging in VC Roles.
pageTitle: VC Roles | Audit Logging
---

## What is audit logging?

Audit logging is a feature which allows you to view a log of all actions performed by VC Roles. This is useful if you want to see who has changed settings, who has joined/leaved a voice channel, and more.

With logging enabled, the bot sends a log message to the set channel whenever a member joins, leaves, or changes voice channel. The log message contains various bits of information, such as the member, the channel, the roles added/removed, and the timestamp.

![Audit Logging Example](/assets/log-messages.png)

## How can I use audit logging?

The easiest way to manage audit logging settings is using our [dashboard](/dashboard). You can also use the [audit logging commands](/docs/commands/audit-logging) to manage audit logging settings.

### Managing audit logging settings with the dashboard

1. Navigate to your server's [dashboard](/dashboard)
2. Select your server from the list
3. Click on the "Server Settings" tab
4. Toggle the "Enable Audit Logging" switch to enable audit logging
5. Select a channel from the dropdown to set the log channel
6. That's it! You can now use audit logging in your server

### Managing audit logging settings with commands

1. Enable audit logging using the [/logging](/docs/commands/audit-logging#logging) command with the `enable: True` option
2. That's it! You can now use audit logging in your server
