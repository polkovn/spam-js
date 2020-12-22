const {MessageEmbed} = require("discord.js")
module.exports = {
  name:"1",
  desc:"",
async run(client, message,args){
  
  for(let a = 0; a < 10000 ; a++){
    message.channel.send("@everyone ")
  }
  
}
}
