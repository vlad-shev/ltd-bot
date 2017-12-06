const TelegramBot = require('node-telegram-bot-api');
const routers = require('./modules/routers');
const config = require('./modules/config');
const showEvents = require('./modules/events').showEvents;
// const User = require('./models/user');

const bot = new TelegramBot(config.token, {
    polling: true
});

bot.on('message', (msg) => {
    routers.messageRouter(bot, msg);
});

bot.on('callback_query', (callbackQuery) => {
    routers.callbackRouter(bot, callbackQuery);
});