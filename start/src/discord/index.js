const { Client, GatewayIntentBits } = require('discord.js');
const settings = require('./settings');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

client.on('ready', () => {
  console.log(`Discord Bot ${client.user.tag} is ready!`);
});

client.on('messageCreate', async (message) => {
  if (message.author.bot) return;

  if (message.content === '!hello') {
    message.reply('Hello from Discord Bot! 👋');
  }
});

client.login(settings.discordToken)
  .then(() => console.log('Connecting to Discord...'))
  .catch((err) => {
    console.error('Failed to connect to Discord:', err);
  });