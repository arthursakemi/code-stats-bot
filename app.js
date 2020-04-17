require("dotenv").config();

const Telegraf = require("telegraf");

const bot = new Telegraf(process.env.BOT_API_KEY);
const menus = require('./src/menus/menus')

const helpText = `

`;

bot.start((ctx) => ctx.reply("Welcome mate!"));
bot.help((ctx) => ctx.reply("Not yet fella!"));

bot.command("stats", (ctx) => {
  const user = ctx.from.username;

  console.log(user);
  ctx.reply(`Have some stats @${user}!`, menus.mainMenu);
});

bot.command("seila2", (ctx) => {
  ctx.reply(`Have some stats`, menus.statsMenu);
})

bot.launch();
