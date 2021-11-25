require('dotenv').config();
const { Client, Intents } = require('discord.js');
const logger = require('pino')({
  transport: {
    target: 'pino-pretty',
  }
});
const PerfectCactbot = require('./lib/perfect_cactbot');

const bot = new Client({
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES,
  ]
});

bot.login(process.env.DISCORD_BOT_TOKEN);
bot.on('ready', () => logger.info('Connected.'));

bot.on('message', async(message) => {
  if(!message.content.startsWith('cactbot')) return false;

  /* @TODO 
   * 1. Session lock by username/id
   * 2. Invalidate session lock by time
   *
  /***************************
   * > cactbot begin
   * "initial value?"
   * > cactbot 0,0 9
   *
   * #   #   #
   *
   * @   #   #
   *
   * 9   @   #
   *
   * > cactbot 0,1 3
   *
   * etc., until
   *
   * Solution: 0,0 -> 2,2 
   */
});

bot.on('disconnected', () => logger.fatal('Disconnected.'));
