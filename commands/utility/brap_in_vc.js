const { SlashCommandBuilder } = require('discord.js');
const { joinVoiceChannel } = require('@discordjs/voice');
const { getVoiceConnection } = require('@discordjs/voice');
const { createAudioPlayer } = require('@discordjs/voice');
const { VoiceConnectionStatus } = require('@discordjs/voice');
const { createAudioResource, StreamType } = require('@discordjs/voice');
const { AudioPlayerStatus } = require('@discordjs/voice');
const { MessageFlags } = require('discord.js');
const wait = require('node:timers/promises').setTimeout;


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
						title: 'A brap!',
					},
			});
			
			audioPlayer.play(resource);

			if (subscription) {
				setTimeout(() => subscription.unsubscribe(), 2000);
				setTimeout(() => audioPlayer.stop(), 2000);;
				setTimeout(() => connection.destroy(), 2000);
			}

		});
		
		await interaction.reply({ content: 'Alright, pal! Let\'s keep this between us though, got it dawg?', flags: MessageFlags.Ephemeral });
		await wait(3_000);
		await interaction.editReply('The job is done, cuh!');
	},
};

