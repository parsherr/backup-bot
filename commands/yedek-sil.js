const db = require("croxydb")
const dc = require("discord.js")
const backup = require("discord-backup")
//parsher youtube <3
exports.run = async (client, message, args) => {
  let backupID = args[0]
  let a = db.get(`yedek_${backupID}`)
  if(a === message.author.id) {
  let embed = new dc.MessageEmbed()
  .setTitle("<:tik_prex:796104548104011827> Başarılı")
  .setColor("GREEN")
  .setDescription("Yedek **Başarıyla Silindi**.")
  .setTimestamp()
  .setThumbnail(message.author.avatarURL())
  message.channel.send(embed)
  backup.remove(backupID)
  db.delete(`yedek_${backupID}`)
  db.delete(`toplam_${message.author.id}`, 1)
  db.set(`y_${message.author.id}`, db.get(`y_${message.author.id}`).filter(z => z.id !== backupID))
  } else {
    message.channel.send(":x: Böyle Bir Yedeğin Yok!")
    }
  }