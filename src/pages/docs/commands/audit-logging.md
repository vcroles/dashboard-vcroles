---
title: Audit Logging Commands
description: Learn how to use audit logging commands in VC Roles.
pageTitle: VC Roles | Audit Logging Commands
---

## What are audit logging commands?

The audit logging commands allow you to use the [audit logging feature](/docs/features/audit-logs) in VC Roles. You can use the audit logging commands to enable and disable audit logging.

![Audit logging example](/assets/log-messages.png)

## /logging

The `/logging` command allows you to enable or disable audit logging. And select a channel to send the audit logs to.

### Logging Usage

`/logging <enabled> [channel]`

![Enabling audit logging](/assets/logging-command.png)

### Logging Options

- `enabled` - Whether audit logging is enabled
- `channel` - The channel to send the audit logs to (default: `current channel`)
