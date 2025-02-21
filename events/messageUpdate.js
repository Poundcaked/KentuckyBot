const { Events, Guild , PollAnswer} = require('discord.js');

module.exports = {
    name: Events.MessageUpdate,
    async execute(oldMessage, newMessage){     
        const user = newMessage.author;
        const guild = newMessage.guild;
        const channel = newMessage.channel;
        const username = user.username;


        channel.send("BRAH!! <@" + userID+"> just EDITED their message! Get ready to be leaked, dawg! The previous message was " + oldMessage.content);
    }
        
};
