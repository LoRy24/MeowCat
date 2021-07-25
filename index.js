const Discord = require("discord.js");
const SecurityValues = require("security_values");
const bot = new Discord.Client();

bot.on("message", () => {

});

bot.login(SecurityValues.bot_token).then(() => {
    console.log("Bot logged!");
});