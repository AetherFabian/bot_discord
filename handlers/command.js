const fs = require('fs');
module.exports = (client) => {
    try{
        let commandCount = 0;
        fs.readdirSync("./commands/").forEach((dir) =>{
            const commands = fs.readdirSync(`./commands/${dir}`).filter((file)=>file.endsWith(".js"));
            for (let file of commands){
                let command = require(`../commands/${dir}/${file}`);
                if (command.name){
                    client.commands.set(command.name, command);
                    commandCount++;
                } else{
                    console.log(`COMMAND [/${dir}/${file}]`, `error: the command has not configured correctly.`.brightRed);
                    continue;
                }
                if (command.aliases && Array.isArray(command.aliases)){
                    command.aliases.forEach((alias) =>{
                        client.aliases.set(alias, command.name);
                    });
                }
            }
        });
        console.log(`${commandCount} Commands Loaded`.brightGreen);
    } catch(e){
        console.log(e);
    }
}