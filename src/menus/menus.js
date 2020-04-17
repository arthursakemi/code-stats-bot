const Telegraf = require('telegraf');

module.exports.mainMenu = Telegraf.Extra
    .markdown()
    .markup((m) => m.keyboard([
            m.callbackButton('/userLanguages'),
            m.callbackButton('/userTotalXP')
        ])
        .resize()
        .oneTime()
    );