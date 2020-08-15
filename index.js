const tokens = require('./tokens');
const Discord = require('discord.js');
const tables = require('./quest-tables');

const client = new Discord.Client();

client.once('ready', () => {
	console.log('Ready!');
});

client.login(tokens.discord);

client.on('message', message => {
	if (message.content === '/qroll') {
		const roll = Math.floor(Math.random() * 20) + 1;
		message.channel.send(
			`You rolled ${roll}: ${tables.rollLookup(roll)}`
		);
	}
});
