---
title: TTS Commands
description: Learn how to use the TTS commands in VC Roles.
pageTitle: VC Roles | TTS Commands
---

## What are TTS commands?

TTS is a feature of the bot, where it will join your voice channel, and read out the message that you gave it. It has options for a selection of languages and is great for users who don't have a mic but still want to be heard in the voice call.

## /tts setup

The `/tts setup` command allows you to enable or disable TTS, whether to lock it to a certain role, and whether the bot should leave the voice channel after reading the message.

### TTS Setup Usage

`/tts setup <enabled> [role] [leave]`

![TTS Setup Command](/assets/tts-setup-command.png)

### TTS Setup Options

-   `enabled` - Whether TTS is enabled
-   `role` - The role that is required to use TTS
-   `leave` - Whether the bot should leave the voice channel after reading the message

## /tts play

The main TTS command for your users. With this command, you can give the bot a message to read out, and you also have the ability to specify which language the bot reads the message in, and also, whether or not the bot leaves the channel after reading the message.

You need to be in a voice channel for this command to work.

### TTS Play Usage

`/tts play <message> [language] [leave]`

![TTS Play Command](/assets/tts-play-command.png)

### TTS Play Options

-   `message` - The message to read out
-   `language` - The language to read the message in
-   `leave` - Whether the bot should leave the voice channel after reading the message

## /tts stop

The `/tts stop` command allows you to stop the bot from reading out the message.

### TTS Stop Usage

`/tts stop`

![TTS Stop Command](/assets/tts-stop-command.png)
