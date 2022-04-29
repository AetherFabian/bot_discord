const serverSchema = require(`${process.cwd()}/models/server.js`);
const {secure} = require('../../handlers/functions.js');
const prefix = "-";

module.exports = async (client,message) => {
    if (!message.guild || !message.channel || message.author.bot)return;
    let data = await secure(serverSchema, "guildID", message.guild.id, 
    {guildID: message.guild.id, 
    prefix: prefix,
    guildName: message.guild.name,
    });
    if (!message.content.startsWith(data.prefix)) return;
    const args = message.content.slice(data.prefix.length).trim().split(/ +/g);
    const cmd = args.shift()?.toLowerCase();
    const command = client.commands.get(cmd) || client.commands.find(c => c.aliases && c.aliases.includes(cmd));

    if (command){
        command.run(client, message, args, data.prefix)
    } else{
        return message.reply(`Command not found.`);
    }
}