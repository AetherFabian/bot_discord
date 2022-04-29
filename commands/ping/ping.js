module.exports = {
    name: "ping",
    aliases: ["latencia", "ms"],
    desc: "Check the bot's latency",
    run: async (client, message, args, prefix) => {
        message.reply(`Pong! The bot ping is ${client.ws.ping}ms`)
    }
}