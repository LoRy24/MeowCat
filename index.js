const Discord = require("discord.js");
const SecurityValues = require("./security_values.js");
const Images = require("./images.js")
const bot = new Discord.Client();

bot.on("message", (message) => {
    let words = message.content.toLowerCase().split(" ");
    if (message.author === bot.user) return;

    let imageEmbed = new Discord.MessageEmbed().setTitle("Meow").setColor("ORANGE")
        .setFooter("Bot made by LoRy24");
    if (words.includes("meow")) {
        message.channel.send(imageEmbed.setImage(Images.random_images[Math.floor(Math.random() * Images
            .random_images.length)])).then(() => {});
    } else if (words.includes("hacker-meow")) {
        message.channel.send(imageEmbed
            .setImage(Images.hacker_cat).setTitle("HACKER MEOW"))
            .then(() => {});
    }
});

bot.login(SecurityValues.bot_token).then(() => {
    console.log("Bot logged!");
});