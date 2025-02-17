const { Events} = require('discord.js');

module.exports = {
    name: Events.GuildMemberAdd,
    async execute(joiningMember){     
        joiningMember.guild.channels.cache.find((channel) => channel.name === 'general').send(String((String('Hola ' + String(joiningMember.user.username)) + ', Me llamo Kentucky... Kentucky Chibbleson!')));
    }
        
};
