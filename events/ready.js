module.exports = (client) => {
    client.user.setActivity("!yardım | Parsher")
    console.log(`Giriş Yapıldı ${client.user.tag} : ${client.channels.cache.size} Kanala ${client.guilds.cache.size} sunucuya ve toplam ${client.users.cache.size} üyeye hizmet ediyor ❤️.`);
};