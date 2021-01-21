const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '!';


client.once('ready', () => {
    console.log('Faraways bot is online');
});


client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.lenght).split(/ + /);
    const command = args.shift().toLowerCase();

    if(command === 'ping'){
        message.channel.send('pong!');
    }
});




client.login('Nzk4NjI1MDI0MjUyMDUxNDU2.X_3vgw.S6BhYfk5HQtWvO-ZqIi3MPGMdVA\n');
