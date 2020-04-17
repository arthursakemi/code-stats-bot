require("dotenv").config();

const Telegraf = require("telegraf");
const menus = require("./src/menus/menus");

const {
    getUserStats
} = require("./src/codeStats");

const bot = new Telegraf(process.env.BOT_API_KEY);

const helpText = `

`;

let userNames = new Map();

bot.start((ctx) => ctx.reply("Welcome mate!"));
bot.help((ctx) => ctx.reply("Not yet fella!"));

bot.hears(/\/setUser (.+)/, (ctx) => {
    const userName = ctx.from.username;
    const newUserName = ctx.match[1];

    userNames.set(userName, newUserName);

    ctx.reply(`@${userName}'s username set to ${newUserName}`);

    console.log(userNames);

});

bot.command("stats", (ctx) => {
    const user = ctx.from.username;

    ctx.reply(`Tell me watcha need @${user}!`, menus.mainMenu);
});

bot.command('getUser', (ctx) => {
    const userName = ctx.from.username;

    if (!userNames.has(userName)) {
        userNames.set(userName, userName)
    }

    const codeStatsUser = userNames.get(userName);

    ctx.reply(`@${userName}, your CodeStats username is: ${codeStatsUser}`);
});

bot.command("userTotalXP", (ctx) => {
    const userName = ctx.from.username;

    if (!userNames.has(userName)) {
        userNames.set(userName, userName)
    }

    const codeStatsUser = userNames.get(userName);

    getUserStats(codeStatsUser)
        .then((response) => {
            ctx.reply(`@${userName} your total XP is: ${response.data.total_xp}`);
        });
})

bot.launch();