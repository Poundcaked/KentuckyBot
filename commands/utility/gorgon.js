const { SlashCommandBuilder, InteractionContextType,  ApplicationCommandOptionType} = require('discord.js');
const gorgons = [
	'The True Gorgon',
	'Assimilating Smile',
	'Barfing Bog',
	'Chuckling Gorgon',
	'Freezing Phillip',
	'Giggling Demon',
	'Lard Lloyd',
	'Mogging Gorgon',
	'Sobbing Simon'
]

const ids = [
	'<:TheTrueGorgon:1279468889717211249> ',
	'<:assimilatingsmile:1176772841346179103> ',
	'<:barfingbog:1176772838074617976> ',
	'<:chucklinggorgon:1176772840217911376>',
	'<:freezingphillip:1255275965035319447> ',
	'<:gigglingdemon:1189023070409732106> ',
	'<:lardlloyd:1195871664236413059> ',
	'<:mogginggorgon:1223448555134652496>', 
	'<:sobbingsimon:1254977292464160858>',
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
	.setName('gorgon')
	.setDescription('Find out your inner Gorgon!')
	.addUserOption(option =>
		option
			.setName('user')
			.setDescription('The member to get the Gorgon from')
			.setRequired(false)),
	async execute(interaction) {
		var rand = mathRandomInt(1,gorgons.length)-1;
		const target = interaction.options.getUser('user') ?? null;
		

		if(target){
			await interaction.reply(target.globalName+'\'s gorgon is: ' + gorgons[rand] +" "+ ids[rand]);
		}else{
			await interaction.reply('Your gorgon is: ' + gorgons[rand] +" "+ ids[rand]);
		}
		
	},
};

