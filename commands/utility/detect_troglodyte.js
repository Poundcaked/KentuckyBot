const { SlashCommandBuilder } = require('discord.js');

function mathRandomInt(a, b) {
    if (a > b) {
      // Swap a and b to ensure a is smaller.
      var c = a;
      a = b;
      b = c;
    }
    return Math.floor(Math.random() * (b - a + 1) + a);
}
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

var randomNum = 0;

module.exports = {
	data: new SlashCommandBuilder()
	.setName('detect-troglodyte')
	.setDescription('Attempt to find any troglodytes in the server!'),
	async execute(interaction) {
		interaction.reply('Detecting ...');

		await delay(1000);

		await interaction.editReply('Found a troglodyte! It is <@'+ interaction.guild.members.cache.random().id +'>');


		
	},
};

