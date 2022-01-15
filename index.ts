import DiscordJS, { Intents } from 'discord.js'
import dotenv from 'dotenv'
dotenv.config()

const client = new DiscordJS.Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES
    ]
})

client.on('ready', () => {
    console.log("The Bot is Ready")
})

client.on('messageCreate', (message) => {
    if (message.content === 'deez') {
        message.reply({
            content: 'nuts',
        })
    }
})

client.login(process.env.TOKEN)