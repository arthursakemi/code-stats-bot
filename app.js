require("dotenv").config();

const Telegraf = require("telegraf");

const bot = new Telegraf(process.env.BOT_API_KEY);

const helpText = `

`;

bot.start((ctx) => ctx.reply("Welcome mate!"));
bot.help((ctx) => ctx.reply("Not yet fella!"));

bot.command("stats", (ctx) => {
  const user = ctx.from.username;

  ctx.reply(`Have some stats @${user}!`);
});

bot.launch();
