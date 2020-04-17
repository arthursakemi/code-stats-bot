require("dotenv").config();

const Telegraf = require("telegraf");
const menus = require("./src/menus/menus");

const codeStats = require("./src/codeStats");

const bot = new Telegraf(process.env.BOT_API_KEY);

const {
    getUserStats
} = codeStats;

const helpText = `

`;

bot.start((ctx) => ctx.reply("Welcome mate!"));
bot.help((ctx) => ctx.reply("Not yet fella!"));

bot.command("stats", (ctx) => {
    const user = ctx.from.username;

    ctx.reply(`Tell me watcha need @${user}!`, menus.mainMenu);
});

bot.command("userTotalXP", (ctx) => {
    const userName = ctx.from.username

    const xp = getUserStats(userName)
        .then((response) => {
            ctx.reply(`@${userName} your total XP is: ${response.data.total_xp}`);
        });
})

bot.launch();