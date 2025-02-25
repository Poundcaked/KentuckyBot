const { Events, ActivityType } = require('discord.js');

module.exports = {
    name: Events.PresenceUpdate,
    async execute(oldPresence, newPresence) {
        if (!newPresence.member || !newPresence.guild) return; // Ensure valid presence update

        const channel = newPresence.guild.channels.cache.find(channel => channel.name === 'general');

        const user = newPresence.member;
        const playingActivity = newPresence.activities.find(activity => activity.type === ActivityType.Playing);

        if (playingActivity) {     
            if(playingActivity.applicationId === '700136079562375258'){
                channel.send("P.U.!!!!! Someone in here just started playing Valorant! 🍗🍗🍗");
            }
            if(playingActivity.applicationId === '432980957394370572'){
                channel.send("Fee fi fo fum.... I smell the blood of a Fortnite Player 👃👃👃");
            }
        }
    }
};