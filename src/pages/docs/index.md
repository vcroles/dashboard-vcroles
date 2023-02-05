---
title: VC Roles Documentation
description: The official documentation for VC Roles.
pageTitle: VC Roles | Documentation
---

## [Add to your Discord Server!](/invite) | [Upgrade to Premium](/pricing)

[Discord Support Server](/support) | [View GitHub](https://github.com/CDE90/VCRoles) | [Top.gg Page](https://top.gg/bot/775025797034541107)

## Introduction

Welcome to the VC Roles documentation! Here you'll find everything you need to get up and running with the bot!

If you want to report a bug or request a feature, head over to our [GitHub page](https://github.com/CDE90/VCRoles), and make a new issue!

### Ready to start?

{% quick-links %}

{% quick-link title="Get Started" icon="installation" href="/docs/get-started" description="Get started with the bot" /%}

{% quick-link title="Basic Setup" icon="presets" href="/docs/basic-setup" description="Get the bot up and running" /%}

{% quick-link title="Commands" icon="theming" href="/docs/commands/linking-and-unlinking" description="All the commands the bot has to offer" /%}

{% quick-link title="FAQ" icon="plugins" href="/docs/faq" description="Frequently asked questions" /%}

{% /quick-links %}

## Features

VC Roles is a bot that will make your server and its voice channels much more interactive, enabling features such as: giving members roles when they join a voice channel, removing it on leave or the reverse of that, reading TTS messages in voice channels, for those without a mic, creating and managing voice channels, and much more!

This is the bot you need to make your server more interactive, and bring your community together!

* [Channel - Role linking](/docs/features/linking)
  * Normal linking - A role(s) can be given to a member when they join a channel, and removed when they leave
  * Reverse Linking - A role(s) can be removed from a member when they join a channel, and added when they leave
  * Great for hiding voice reply channels, or music bot command channels when they aren't needed
* [All channel - Role linking](/docs/features/all-linking)
  * A role(s) will be given to a member when they join any voice channel, and removed when they leave
  * Option to add exception channels (members aren't given the 'all' role(s) when they join/leave)
  * Normal & Reverse Linking supported
* [Permanent Role Links](/docs/features/permanent-links)
  * A role(s) will be given to a member when they join the voice channel, and will remain after they leave.
  * Normal & Reverse Linking supported
  * Great for easy user verification
* [Voice Channel Generators](/docs/features/voice-channel-generators)
  * When a member joins the generator channel a new voice channel is made just for them, and is deleted when there are no more members in the channel.
  * Generators also come with an interface channel, which contains additional configuration for users' private channels.
  * This is highly configurable, dive in and see what you can make!
* [Voice Channel TTS commands](/docs/features/tts)
  * TTS commands are used to make the bot read a message in a voice channel
  * Options for multiple languages.
  * Great for users who have no mic and still want to be heard
* [Analytics Commands](/docs/features/analytics)
  * See insights on what's happening in your voice channels.
  * How much time is being spent in them? How many times do people join? How many commands are being used? and more!
  * See beautiful graphs with per-day data or per-hour visualisations, or prefer to analyse yourself? Download an export of the data as a csv.
* [Voice Admin Commands](/docs/features/voice-admin)
  * Used to mute, unmute, deafen and undeafen all members in a voice channel
* [Audit logging (for voice channels)](/docs/features/audit-logs)
  * See when members join, leave or change channels, and the roles that are given/removed by the bot.
