import TelegramBot from 'node-telegram-bot-api';

const token = '';

const bot = new TelegramBot(token, { polling: true });
const chatIdReceberVip = '';
const chatIdEnviarVip = '';

const chatIdReceberFree = '';
const chatIdEnviarFree = '';

bot.on('message', (msg) => {
  //console.log(msg)
  const picture = msg.photo[0].file_id;
  const texto = msg.caption;
  // bot.sendPhoto(chatId, picture, { caption: texto })

  if (msg.chat.id == chatIdReceberVip) {
    bot.sendPhoto(chatIdEnviarVip, picture, { caption: texto })
    console.log('enviado vip')

  }

  if (msg.chat.id == chatIdReceberFree) {
    bot.sendPhoto(chatIdEnviarFree, picture, { caption: texto })
    console.log('enviado free')
  }
});
