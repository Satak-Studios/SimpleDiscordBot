const express = require("express");
const app = express();

app.listen(3000, () => {
  console.log("Project is running");
})

app.get("/", (req, res) => {
  res.send("A Server for the Bot-IG Bot");
})

const Discord = require("discord.js");
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });

client.on("message", message => {
  if (message.content === "a") {
    message.reply("Yes I am alive, don't worry about me");
  }

  if (message.content === "IG") {
    message.channel.send("I am a bot created by Satak Studios to help in discord");
  }

  if (message.content === "spam") {
    message.channel.send("SpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpaming");

    message.channel.send("SpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpaming");
    message.channel.send("SpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpaming");

    message.channel.send("SpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpaming");

    message.channel.send("SpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpaming");

    message.channel.send("SpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpaming");

    message.channel.send("SpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpamingSpaming");

    message.channel.send("I spammed all this because some " + Discord.User.name + " asked");
  }

  if (message.content === "ping") {
    message.channel.send("pong");
  }

  if (message.content === "add bots") {
    message.channel.send("Adding some bots");
    message.channel.send("Mee6 and DankMemer were added");
    message.channel.send("Say Hi to DankMemer");
    message.channel.send("Say Hi to Mee6");
  }

  if (message.content === "sk") {
    message.channel.send("Satak Studios is a new Game Studios created by Satak, Sathvik and Indrakanti Gamer. Satak and Indrakanti gamer are actually Sathvik itself thus this company is a indie game studio");
  }



  if (message.content === "word") {
    message.delete();
    message.reply("Dear " + message.member.user.username + ", Please don't use forbidden word in this server or you can be muted");
  }
})

client.login("MTAxMzgxODM5OTkwMzcxMTI0Mw.GTgVQ9.0b9Hqs0P4hD_CqLKNWco5FIpGrNcZo52Nd4tkc");
