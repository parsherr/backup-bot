const dc = require("discord.js");
const config = require("../config.json");
const prefix = config.prefix

exports.run = async (client, message, args) => {
  let embed = new dc.MessageEmbed()
    .setTitle("Parsher Yedek Sistemi")
    .setDescription(`
      **Bot Istatistikleri**

      ${client.channels.cache.size} Kanal
      ${client.guilds.cache.size} sunucu
      toplam ${client.users.cache.size} üye`)
    .setImage("https://media.discordapp.net/attachments/1087824262322212975/1115390850248229014/standard_12.gif?ex=667546ed&is=6673f56d&hm=90d778bcf184bc931c48b260a7e9ea488c4f0655ab550db31585a6f90244ba4d&")
    .setColor("GREEN");

  message.channel.send(embed);
}
