const { SlashCommandBuilder } = require('discord.js');
const plobs = [
	'Plob',
	'Plimp',
	'Plee'
]

const ids = [
	'<:plob:1153049955192279151>',
	'<:plimp:1153050189268013087>',
	'<:plee:1216911658241490944>'
]

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
	.setName('plob')
	.setDescription('Find out your inner Plob!')
	.addUserOption(option =>
		option
			.setName('user')
			.setDescription('The member to get the Gorgon from')
			.setRequired(false)),
	async execute(interaction) {
		var rand = mathRandomInt(1,plobs.length)-1;
		const target = interaction.options.getUser('user') ?? null;

		if(target){
			await interaction.reply(target.globalName+'\'s plob is: ' + plobs[rand] +" "+ ids[rand]);
		}else{
			await interaction.reply('Your plob is: ' + plobs[rand] +" "+ ids[rand]);
		}
		
	},
};

