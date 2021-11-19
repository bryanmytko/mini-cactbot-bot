# Mini Cactbot Bot

Discord bot to solve mini cactbot game.

Solving algorithm: https://github.com/yuryu/ff14-cactpot/blob/master/js/perfect_cactpot.js

## Environment

Create a `.env` or add to your environment:

```
DISCORD_BOT_TOKEN=xxxx                      
```

Follow next steps for obtaining these values.

## Discord

Create a new Discord application [https://discord.com/developers/applications](https://discord.com/developers/applications)

- Make note of your `client_id`.
- Turn the application into a bot and add your `token` to `DISCORD_BOT_TOKEN` in your env.
- Set permissions your bot needs and make note of the `permissions` integer.

You can now invite your bot to your server (assuming you have permission) with this link, filling in your `client_id` and `permissions` integer.

*https://discord.com/oauth2/authorize?client_id=xxxxx&scope=bot&permissions=xxxxx*

## Deploy and Run

Host the bot somewhere (Heroku, Digital Ocean) and start it with:

`yarn start`

Or locally with:

`yarn start:dev`
