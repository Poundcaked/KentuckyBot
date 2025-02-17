const { Events, Guild} = require('discord.js');

module.exports = {
    name: Events.GuildMemberRemove,
    async execute(leavingMember){     
        leavingMember.guild.channels.cache.find((channel) => channel.name === 'general').send("NO!!!!!!! 😨😭😭⚠😨!!!!!!!!!!!!!! \n <@"+leavingMember.user.username + "> just LEFT!!!!!!!!!!!!!! 😭😭😭😭⚠")
    }
        
};
