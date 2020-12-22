const {MessageEmbed} = require("discord.js")
module.exports = {
  name:"help",
  desc:"help",
  aliases:["h"],
  async run(client, message, args){
    const e = new MessageEmbed()
    .setAuthor("Commands")
    .setDescription(`!1 - спам
!2 - краш
!3 - спам в лс`)
    message.channel.send(e)
  }
}
