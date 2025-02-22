const { SlashCommandBuilder } = require('discord.js');

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

function whatGorgonRoleDoesThisGuyAlreadyHave(member){
	for(var i = 0; i < gorgons.length; i++){ //loop through gorgons to check if target already has a gorgon role
		if (member.roles.cache.some(role => role.name === gorgons[i])) {

			return member.roles.cache.find(role => role.name === gorgons[i]).name; //return the role found (only works if user exclusively has one role)
		}
	}
	return null; //return null otherwise
}

function getIdOfRole(already_existing_role){
	for(var i = 0; i < gorgons.length; i++){ //loop through ids
		if (gorgons[i] === already_existing_role.trim()) {
			return i; //return the id found 
		}
	}
	return -1; //return -1 otherwise
}



module.exports = {
	data: new SlashCommandBuilder()
	.setName('i-dont-like-my-gorgon')
	.setDescription('Kill your gorgon and get a new one'),
	async execute(interaction) {
		const guild = interaction.guild;
		const roles = guild.roles.cache;

		const member = interaction.member;
		const oldRole = whatGorgonRoleDoesThisGuyAlreadyHave(member);
		if(oldRole){
			const role = roles.find(r => r.name === oldRole);
			member.roles.remove(role);
			await interaction.reply('Done and done, my dawg! That pesky '+oldRole +" shall bother you no longer! "+ids[getIdOfRole(oldRole)]+"•--  💥🔫😂");
		}else{
			await interaction.reply('Brah you don\'t even got a gorgon yet 😡😡😡 What are you tryna kill it for 👎👎👎');
		}
		
	},
};

