const {MessageEmbed} = require("discord.js")
module.exports = {
name: "invite",
async run(client,message,args){
const embed = new MessageEmbed()
.addField("Invites bot", `[invite](https://discord.com/api/oauth2/authorize?client_id=790933126289424414&permissions=8&scope=bot)`)
.setColor("ff0000")
message.channel.send(embed)
}
}
