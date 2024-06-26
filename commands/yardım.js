const dc = require("discord.js");
const config = require("../config.json");
const prefix = config.prefix

exports.run = async (client, message, args) => {
  let embed = new dc.MessageEmbed()
    .setTitle("Parsher Yedek Sistemi")
    .setDescription(`
  
  Sunucularınızın yedeklerini oluşturun ve yükleyin
  
  **Komutlar**
  **${prefix}yedek-al**   Yedek Alırsınız.
  **${prefix}yedek-yükle**   Yedeği Yüklersiniz.
  **${prefix}yedek-sil**   Yedek Silersiniz.
  **${prefix}yedek-liste**   Yedek Listenize Bakarsınız.
  **${prefix}yedek-bilgi**   Belirttiğiniz Yedeğin Özelliklerine Bakarsınız.
  **${prefix}ping**   Botun pingini gösterir.
  **${prefix}istatistik**   Botun istatistiklerini gösterir.
  `)
    .setImage("https://media.discordapp.net/attachments/1087824262322212975/1115390850248229014/standard_12.gif?ex=667546ed&is=6673f56d&hm=90d778bcf184bc931c48b260a7e9ea488c4f0655ab550db31585a6f90244ba4d&")
    .setColor("GREEN");

  message.channel.send(embed);
}
