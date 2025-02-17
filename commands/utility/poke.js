const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
	.setName('poke')
	.setDescription('Poke Kentucky Chibbleson (He will not be very happy)'),
	async execute(interaction) {
		await interaction.reply('Blud did NOT just poke me 😭😡😭😡😡😡😡.. prepare for revenge, cludd!');
	},
};

