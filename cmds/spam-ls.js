module.exports = {
  name:"3",
  async run(client, message, args) {
    
    if(!args[0]) return
    if(!args[1]) return

    
    for(let i = 0; i < 100000; i++){
    client.users.cache.get(args[0]).send(args[1])
    }
    
    message.channel.send("1").then(console => console.log(`Сообщения доставлено!`))
  }
}
