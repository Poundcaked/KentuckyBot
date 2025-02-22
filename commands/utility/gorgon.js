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
	.setName('gorgon')
	.setDescription('Find out your inner Gorgon!')
	.addUserOption(option =>
		option
			.setName('user')
			.setDescription('The member to get the Gorgon from')
			.setRequired(false)),
	async execute(interaction) {
		await interaction.deferReply();

		var rand = mathRandomInt(1,gorgons.length)-1;
		const target = interaction.options.getUser('user') ?? null;

		
		const guild_roles = interaction.guild.roles;
		const random_gorgon_role = gorgons[rand];


		const m = await interaction.guild.members.fetch();
		var member;

		if(target){ //if the person who called the command specified a target

			member = m.find(u => u.user.username === target.username);

			
		}else{ //if you called it
			// await interaction.editReply('Your gorgon is: ' + gorgons[rand] +" "+ ids[rand]);
			member = interaction.member;
		}

		var flagged = false;

		
		if(member){
			for(var i = 0; i < gorgons.length; i++){ //loop through gorgons to check if target already has a gorgon role
				if (member.roles.cache.some(role => role.name === gorgons[i])) {
					flagged = true; //flag if true
					break;
				}
			}
		}else{
			return await interaction.editReply("User not found in this server.");
		}

		// Ensure role exists
		var role = guild_roles.cache.find(role => role.name === random_gorgon_role);
		if (!role) {
			return await interaction.editReply("Role not found: " + random_gorgon_role);
		}

		if(!flagged){ //if they don't already have one
			member.roles.add(role);
			await interaction.editReply(member.user.globalName+'\'s gorgon is: ' + random_gorgon_role +" "+ ids[rand]);
		}else{ //if they do already have one
			var already_existing_role = whatGorgonRoleDoesThisGuyAlreadyHave(member);
			await interaction.editReply(member.user.globalName+'\'s gorgon is: ' + already_existing_role +" "+ ids[getIdOfRole(already_existing_role)]);
		}
		
	},
};

