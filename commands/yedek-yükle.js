const backup = require('discord-backup');
const config = require("../config.json")
const pars = require("discord.js")
const db = require("croxydb")
exports.run = async (client, message, args) => {

    if(!message.member.hasPermission('ADMINISTRATOR')){
        return message.channel.send(':x: Bu Komutu Kullanmak İçin `Yönetici` Yetkisine Sahip Olmalısın!');
    }
//parsher youtube <3
    const backupID = args.join(' ');
    let kontrol = db.get(`yedek_${backupID}`)
    if(kontrol !== message.author.id) return message.channel.send(":x: Böyle Bir Yedeğe Sahip Değilsin")
    backup.fetch(backupID).then(() => {
        let uyarı = new pars.MessageEmbed()
        .setTitle(":warning: Uyarı")
        .setDescription(`
        Tüm Kanallar, Roller Ve Ayarlar Sıfırlanacaktır. Devam Etmek İstiyorsanız: \`evet\` İstemiyorsanız: \`hayır\` Yazınız.
        `)
        .setColor("RED")
        .setThumbnail(message.guild.iconURL())
        .setFooter(message.author.tag + " Tarafından İstendi!", message.author.avatarURL())
        message.channel.send(uyarı)
        
        const collector = message.channel.createMessageCollector((m) => m.author.id === message.author.id && ['evet', 'hayır'].includes(m.content), {
            time: 60000,
            max: 1
        });
        collector.on('collect', (m) => {
            const confirm = m.content === 'evet';
            collector.stop();
            if (confirm) {

                backup.load(backupID, message.guild).then(() => {

                    return message.author.send('Yedek Başarıyla Yüklendi!');
            
                }).catch((err) => {
            
                    if (err === 'No backup found')
                        return message.channel.send(':x: '+backupID+' ID\'li Bir Yedek Bulunmuyor!');
                    else
                        return message.author.send(':x: Bir Hata Oluştu: '+(typeof err === 'string') ? err : JSON.stringify(err));
            
                });

            } else {
                return message.channel.send(':x: İptal Edildi.');
            }
        })

        collector.on('end', (collected, reason) => {
            if (reason === 'time')
                return message.channel.send(':x: Komut Zaman Aşımına Uğradı. Lütfen Tekrar Dene');
        })

    }).catch(() => {
        return message.channel.send(':x: '+backupID+' ID\'li Bir Yedek Bulunmuyor!');
    });

};
