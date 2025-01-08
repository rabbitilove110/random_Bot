const { Client, Collection } = require('discord.js');
const client = new Client({
    intents: [
        131071,
    ]
});
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v10');
const fs = require('fs');
require('dotenv').config();
const token = process.env.token;
const clientID = process.env.clientID;
client.commands = new Collection();
const Dokdo = require('dokdo')
const DokdoHandler = new Dokdo.Client(client, { prefix: '!', aliases: ['dokdo', 'dok'], owners: ['707781854773903398'], noPerm: (messageCreate) => messageCreate.reply({ embeds: [
    new EmbedBuilder()
        .setTitle("⛔ㅣ사용불가")
        .setDescription('해당 명령어는 봇 개발자만 사용가능합니다.')
        .setColor('Red')
] }) })

client.on('messageCreate', async (messageCreate) => {
    await DokdoHandler.run(messageCreate)
})

client.once('ready', async () => {
    client.user.setStatus('dnd');
    client.user.setPresence({ activities: [{ name: '진화 게임' }] });
    console.log("Bot Connected");
})

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.data.name, command);
}

client.on('interactionCreate', async (interaction) => {
    const command = client.commands.get(interaction.commandName);

	if (!interaction.isChatInputCommand()) return;

    try {
        await command.run(interaction)
    } catch (err) {
        console.error(err);
    }
});

const commandJsonData = [
    ...Array.from(client.commands.values()).map(c => c.data.toJSON())
]

const rest = new REST({ version: 10 }).setToken(token);

(async () => {
    try {
        console.log("slash command registrationning");
        await rest.put(
            Routes.applicationCommands(clientID),
            { body: commandJsonData }
        );
        console.log("slash command registration successful");
    } catch (err) {
        console.error(err);
    }
})();

client.login(token)