const {MessageEmbed, Client, Collection } = require("discord.js")
const {readdirSync} = require("fs")
const client = new Client()
client.commands = new Collection()

const {token, prefix} = require("./botconfig.json")

readdirSync("./cmds").forEach(module => {
  const commandFiles = readdirSync(`./cmds/`).filter(file =>
  file.endsWith(".js"))
  for(const file of commandFiles){
    const command = require(`./cmds/${file}`);
    
    command.category = module
    client.commands.set(command.name, command)
  }
})

client.on("ready", ()=>{
  console.log(`Спам бот ${client.user.username} готов спамить!`)
  client.generateInvite(["ADMINISTRATOR"]).then(link => {
    console.log(link)
  }) 
  client.user.setStatus("dnd")
})


client.on("message", message => {
 
  if (!message.content.startsWith(prefix)) return;
      const args = message.content
        .slice(prefix.length)
        .trim()
        .split(/ +/g);
      const cmdName = args.shift().toLowerCase();
      try {
        const command =
          client.commands.get(cmdName) ||
          client.commands.find(
            cmd => cmd.aliases && cmd.aliases.includes(cmdName)
          );
       
        command.run(client, message, args);
      } catch {
        () => {};
      }
    
  });

client.login(token)
