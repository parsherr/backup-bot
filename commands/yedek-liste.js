const db = require("croxydb")
const dc = require("discord.js")
//parsher youtube <3
exports.run = async (client, message, args) => {
  let yedekler = await db.get(`y_${message.author.id}`)
  let sj;
  if(!yedekler) {
    sj = "Yedeğin Bulunmamakta"
    } else {
      sj = yedekler.map(x => `**${x.id}**\n${x.adı} (\`${x.tarih}\`)\n`)
      }
  let embed = new dc.MessageEmbed()
  .setTitle("📄 Yedek Listesi")
  .setColor("GREEN")
  .setTimestamp()
  .setThumbnail(message.author.avatarURL())
  .setDescription(sj)
  .setImage("")
  message.channel.send(embed)
  }