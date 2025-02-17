const { Events, Guild , PollAnswer} = require('discord.js');

module.exports = {
    name: Events.MessagePollVoteAdd,
    async execute(pollAnswer, userId){     
        const guild = pollAnswer.poll.message.guild;
        const channel = pollAnswer.poll.message.channel;
        const username = guild.members.cache.get(String(userId)).user.username;


        channel.send("ALERT! ⚠⚠ ALERT! 😨😨😨!!!!!!!!! <@" + userId + "> JUST VOTED for \"" + pollAnswer.text + "\" 😭😭😭😭!!! SHUN "+username+" IMMEDIATELY!!!!!!!! 😡☠☠😡😡😁😄");
    }
        
};
