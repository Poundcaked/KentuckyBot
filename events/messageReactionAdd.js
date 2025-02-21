const { Events } = require('discord.js');

module.exports = {
    name: Events.MessageReactionAdd,
    async execute(reaction, user, details){  
        const channel = reaction.message.channel;

        channel.send(user.username+" reacted with a "+reaction.emoji+", "+reaction.message.author.username+"... you finna take that!? 😒😒😒🤢🤢🥵🤬😡");

       
    }
        
};
