const { SlashCommandBuilder } = require('discord.js');
const { joinVoiceChannel } = require('@discordjs/voice');
const { getVoiceConnection } = require('@discordjs/voice');
const { createAudioPlayer } = require('@discordjs/voice');
const { VoiceConnectionStatus } = require('@discordjs/voice');
const { createReadStream } = require('node:fs');
const { join } = require('node:path');
const { createAudioResource, StreamType } = require('@discordjs/voice');
const { AudioPlayerStatus } = require('@discordjs/voice');


function mathRandomInt(a, b) {
    if (a > b) {
      // Swap a and b to ensure a is smaller.
      var c = a;
      a = b;
      b = c;
    }
    return Math.floor(Math.random() * (b - a + 1) + a);
}

module.exports = {
	data: new SlashCommandBuilder()
	.setName('brap-in-vc')
	.setDescription('Give Kentucky permission to release gas in the vc'),
	async execute(interaction) {
		const client = interaction.client;
		const channel = client.channels.cache.find((channel) => channel.name === 'call-pretty-please-with-cherries-on-top');
		const audioPlayer = createAudioPlayer();

		audioPlayer.on('error', error => {
			console.error('Error:', error.message, 'with track', error.resource.metadata.title);
		});

		audioPlayer.on(AudioPlayerStatus.Playing, () => {
			console.log('The audio player has started playing!');
		});
		
		const connection = joinVoiceChannel({
			channelId: channel.id,
			guildId: channel.guild.id,
			adapterCreator: channel.guild.voiceAdapterCreator,
			selfDeaf: false,
		});

		const subscription = connection.subscribe(audioPlayer);

		connection.on(VoiceConnectionStatus.Ready, () => {
			const id = mathRandomInt(1,7);
			const resource = createAudioResource('assets/sound/Brap' + id + '.mp3', {
					metadata: {
						title: 'A good brap!',
					},
			});
			
			audioPlayer.play(resource);

			console.log('Audio File: '+ id);

			if (subscription) {
				setTimeout(() => subscription.unsubscribe(), 2000);
				setTimeout(() => audioPlayer.stop(), 2000);;
				setTimeout(() => connection.destroy(), 2000);
			}

		});
		
		await interaction.reply('You got it, dawg!');
	},
};

