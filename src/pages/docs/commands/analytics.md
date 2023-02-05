---
title: Analytics Commands
description: Learn how to use analytics commands in VC Roles.
pageTitle: VC Roles | Analytics Commands
---

## What are analytics commands?

The analytics commands allow you to view analytics about your server. You can use the analytics commands to view analytics about your server's voice channels, voice channel generators, and voice channel roles.

[Learn more about analytics](/docs/features/analytics).

{% callout title="Premium" %}
Analytics commands are only available to [premium servers](/pricing).
{% /callout %}

## /analytics toggle

The `/analytics toggle` command allows you to toggle analytics on or off.

### Analytics Toggle Usage

`/analytics toggle <enabled>`

![Toggling analytics](/assets/analytics-toggle-command.png)

### Analytics Toggle Options

- `enabled` - Whether to enable analytics collection

## /analytics view

The `/analytics view` command allows you to view analytics about your server.

### Analytics View Usage

`/analytics view`

![Viewing analytics](/assets/analytics-view-command.png)

## /analytics graph

The `/analytics graph` command allows you to view analytics about your server in a graph.

### Analytics Graph Usage

`/analytics graph [timeframe]`

![Viewing analytics in a graph](/assets/analytics-graph-command.png)

### Analytics Graph Options

- `timeframe` - The timeframe to view analytics for (options: `day`, `hour`)

## /analytics export

The `/analytics export` command allows you to export analytics about your server. You can export analytics as a CSV file.

### Analytics Export Usage

`/analytics export`

![Exporting analytics](/assets/analytics-export-command.png)
