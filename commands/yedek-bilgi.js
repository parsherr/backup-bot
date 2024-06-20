const Discord = require('discord.js');
const backup = require('discord-backup');
const db = require("croxydb")
exports.run = async (client, message, args) => {
    
    if(!message.member.hasPermission('ADMINISTRATOR')){
        return message.channel.send(':x: Bu Komutu Kullanabilmek İçin `Yönetici` Yetkisine Sahip Olmalısın!');
    }

    const backupID = args.join(' ');
    let kontrol = await db.get(`yedek_${backupID}`)
    if(message.author.id !== kontrol) return message.channel.send(":x: Böyle Bir Yedeğe Sahip Değilsin")
    if (!backupID)
        return message.channel.send(':x: Bir Yedek ID\'si Belirt!');
//parsher youtube <3
    backup.fetch(backupID).then((backup) => {
        let saa = db.get(`y_${message.author.id}`).map(x => `**${x.adı}**\n${x.id}\n`)
        const date = new Date(backup.data.createdTimestamp);
        const yyyy = date.getFullYear().toString(), mm = (date.getMonth()+1).toString(), dd = date.getDate().toString();
        const formattedDate = `${(dd[1]?dd:"0"+dd[0])}/${(mm[1]?mm:"0"+mm[0])}/${yyyy}`;
        let sj;
        sj = backup.data.roles.map(x => x.name).join("\n")
        let a;
        a = backup.data.channels.others.map(x => x.name).join("\n  ") || "\n"
        console.log(a)
        let b;
        b = backup.data.channels.categories.map(x => `• ${x.name}\n  ${x.children.map(x => x.name).join("\n  ")}`).join("\n\n")
        let b2;
        if(b.length > 1024) {
          b2 = `${b.slice(0, 300)} ...`
          } else {
            b2 = b
            }
      let a2;
      if(a.length > 1024) {
        a2 = `${a.slice(0, 300)} ...`
        } else {
          a2 = a
          }
        const embed = new Discord.MessageEmbed()
            .setAuthor('ℹ️ Yedek Bilgisi', backup.data.iconURL)
            .addField('Sunucu Adı', backup.data.name)
            .addField('Boyutu', backup.size + ' kb')
            .addField('Oluşturulma Tarihi', formattedDate)
            .addField("Kanallar",`\`\`\`${a2} \n\n${b2}\`\`\``, true)
            .addField("Roller","```"+sj+"```", true)
            .setColor("BLUE")
            .setImage("https://cdn.discordapp.com/attachments/1086678846692130848/1093576102636687430/image.png")
            return message.channel.send(embed);
    }).catch((err) => {
//parsher youtube <3
        if (err === 'No backup found')
            return message.channel.send(':x: '+backupID+' ID\'li Bir Yedeğin Yok!');
        else
            return message.channel.send(':x: Bir Hata Oluştu: '+(typeof err === 'string') ? err : JSON.stringify(err));

    });

};
