const express = require('express');
const app = express();

app.get('/', (req, res) => {
const Discord = require('discord.js');
require('dotenv').config();
require('colors')

const client = new Discord.Client({
    intents: [
        Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.GUILD_MESSAGES,
        Discord.Intents.FLAGS.GUILD_MEMBERS
    ],
});

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();

function requireHandlers(){
    ["command", "events"].forEach(handler =>{
        try{
            require(`./handlers/${handler}`)(client, Discord)
        } catch(e){
            console.warn(e)
        }
    })
}

requireHandlers();

client.login(process.env.DISCORD_API_TOKEN);
})

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`.green);
})