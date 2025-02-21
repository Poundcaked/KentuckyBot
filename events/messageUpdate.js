const { Events} = require('discord.js');

module.exports = {
    name: Events.MessageUpdate,
    async execute(oldMessage, newMessage){     
        const user = newMessage.author;
        const channel = newMessage.channel;

        if(!user.bot){
            channel.send("BRAH!! <@" + author.id+"> just EDITED their message! Get ready to be leaked, dawg! The previous message was " + oldMessage.content);
        }
        
    }
        
};
