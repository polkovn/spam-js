module.exports = {
name:"ping",
  async run(client, message, args){
     message.channel.send("Pong! `" +parseInt(client.ws.ping) +"ms`")
  }
}
