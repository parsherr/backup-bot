const dc = require("discord.js");
const config = require("../config.json");
const prefix = config.prefix

exports.run = async (client, message, args) => {
  let embed = new dc.MessageEmbed()
    .setTitle("Parsher Yedek Sistemi")
    .setDescription(`
  
  Sunucularınızın yedeklerini oluşturun ve yükleyin
  
  **Komutlar**
  **[${prefix}yedek-al](https://www.youtube.com/channel/UCKpRtKCWoZMNeiIRviOtd1w)**   Yedek Alırsınız.
  **[${prefix}yedek-yükle](https://www.youtube.com/channel/UCKpRtKCWoZMNeiIRviOtd1w)**   Yedeği Yüklersiniz.
  **[${prefix}yedek-sil](https://www.youtube.com/channel/UCKpRtKCWoZMNeiIRviOtd1w)**   Yedek Silersiniz.
  **[${prefix}yedek-liste](https://www.youtube.com/channel/UCKpRtKCWoZMNeiIRviOtd1w)**   Yedek Listenize Bakarsınız.
  **[${prefix}yedek-bilgi](https://www.youtube.com/channel/UCKpRtKCWoZMNeiIRviOtd1w)**   Belirttiğiniz Yedeğin Özelliklerine Bakarsınız.
  `)
    .setImage("https://media.discordapp.net/attachments/1108819464524415097/1109034877774483466/standard_7.gif")
    .setColor("GREEN");

  message.channel.send(embed);
}
