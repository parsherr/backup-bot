// discord.js kütüphanesini require ile dahil ediyoruz
const Discord = require('discord.js');

// exports.run veya module.exports ile bot komutunu tanımlıyoruz
exports.run = async (client, message, args) => {
    // Discord API gecikmesini hesaplıyoruz
    const ping = Date.now() - message.createdTimestamp;

    // Bir MessageEmbed objesi oluşturuyoruz
    const embed = new Discord.MessageEmbed()
        .setColor('BLUE') // Embed'in rengini ayarlıyoruz (mavi)
        .setTitle('Ping') // Embed'in başlığını ayarlıyoruz
        .setDescription(`Discord API gecikmesi: ${ping}ms`); // Embed'in açıklamasını ayarlıyoruz

    // message.channel.send ile mesaj gönderiyoruz, embed'i ekliyoruz
    message.channel.send(embed);
}
