const Telegraf = require('telegraf');

module.exports.mainMenu = Telegraf.Extra
    .markdown()
    .markup((m) => m.keyboard([
        m.callbackButton('/codeStats'),
        m.callbackButton('/seila1'),
        m.callbackButton('/seila2'),
    ]).resize());

module.exports.statsMenu = Telegraf.Extra
    .markdown()
    .markup((m) => m.keyboard([
        m.callbackButton('/marceloarthur'),
        m.callbackButton('/arthursakemi')
    ]).resize());