const Discord = require("discord.js");
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Artık Başlayabiliriz`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

client.login('NDAyMTI4NTY2MTk3ODEzMjY4.DT_iyw.YwQV286hTox0Z8STExyG-ytmVLY');
