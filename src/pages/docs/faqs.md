---
title: FAQs
description: Frequently asked questions
pageTitle: VC Roles | FAQs
---

Here is a selection of VC Roles FAQs, if you feel like any are missing, let us know in our support server, or make a pull request on GitHub.

---

## What does Premium offer?

For a list of the premium features offered, visit the [pricing page](/pricing).

---

## Why does it say 'You must be the channel owner to edit?'

Since our voice generator update, we have added the ability to limit command usage to the owner of the voice channel. If the previous owner has left, you can use the [/interface claim](/docs/commands/interface-commands#interface-claim) command to become the owner, and get access to the editing commands.

---

## Why does it say I've reached my command limit?

We have added an initial limit on how many commands a user can use per day - 15. If you go over this limit, don't worry, voting for the bot on Top.gg will give you unlimited command usage for the rest of the day, or at the end of each day (UTC) your limit will reset!

### Why have you done this?

Hosting a growing bot like VC Roles isn't simple or cheap, and voting for the bot on Top.gg allows the bot to be seen by more people, and ultimately, allows us to continue developing VC Roles and making it better!

---

## What is the bot's prefix?

The bot doesn't have a prefix, since we use slash commands. (You could say the prefix is `/`)

---

## Why did you switch to slash commands?

We switched to slash commands, as recommended by discord (and since we no longer have access to message content) - you can read more here: ([Message Content Privileged Intent for Verified Bots](https://support-dev.discord.com/hc/en-us/articles/4404772028055-Message-Content-Privileged-Intent-for-Verified-Bots))

---

## What is the bot's website?

The bot's website is [https://www.vcroles.com/](https://www.vcroles.com/) but you already know that!

---

## The bot's slash commands aren't showing

-   If you have just invited the bot to your server, it may take up to a minute for slash commands to show, and you may also need to reload your client. Sadly there is nothing we can do about this, as it is a limitation on discord's end.
-   If the bot has been in your server for a while (last time you used it, slash commands weren't being used) you may need to re-invite the bot with new permissions using the [invite link](/invite).

---

## The bot isn't responding / Application did not respond error

This may be because the bot is offline - this happens occasionally, but we will always do our best to limit downtime.

---

## The bot isn't giving me roles

This is likely because the bot doesn't have permissions to give you the role. Make sure the bot has `Manage Roles` permission, and the _VC Roles_ role is above the role that you want the bot to add (in the role list)

---

## The channel I want to link isn't showing up in my command

This is likely because the bot doesn't have permissions to see the channel which you are trying to link. To fix this, please make sure that the bot has `View Channel` permissions for the channel you want to link, then try again.

---

## The bot is showing as offline

If the bot is offline in the members list, this could be for a few reasons:

-   We are performing maintenance on either the bot, the database, or the machine the bot is hosted on. This will be announced in our support server.
-   The bot has gone offline for another reason - while we do our best to keep the bot online, it does occasionally go offline. If this happens, we will get a notification, and we will try to fix the problem as soon as possible.

---

## When I try to use TTS it says _TTS not enabled_

This is likely because you haven't enabled TTS in your server, to do this, use the command `/tts setup`. More info can be found [here](/docs/commands/tts#tts-setup)

---

## What happens if I delete a channel? Will it become unlinked?

Whenever you delete a voice, stage, or category channel, all role links will be removed from the database immediately.

If you think this hasn't happened, you can use the [Linked](/docs/commands/linked#linked) command to see all links, and any channels which have been deleted will be shown there. You can then use the [Force Unlink](/docs/commands/linking-and-unlinking#forceunlink) command to remove the ID.
