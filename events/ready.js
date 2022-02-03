const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

module.exports = client => {
  console.log(`[TAMAMLANDI] - Bütün komutlar başarıyla yüklendi !`);
  console.log(`════════════════════════════════════════`);
  client.user.setStatus("online");
  client.user.setActivity("Sadece Jigsaw ❤️", { type: "WATCHING"}); //// TYPE - WATCHING , PLAYING , LISTENING gibi değiştirilebilir.
  console.log(`• Botunuz Suanda Aktif •`);

};
