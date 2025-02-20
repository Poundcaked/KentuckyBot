const { Events } = require('discord.js');

module.exports = {
    name: Events.PresenceUpdate,
    async execute(oldPresence, newPresence){     
        const user = newPresence.member;

        if(newPresence.activities > 0){
            for(var i = 0; i<activities.length;i++ ){
                if(user.presence.activities.find(activity => activity.type === 'PLAYING').applicationId == '700136079562375258'){
                    client.channels.cache.find((channel) => channel.name === 'general').send("P.U.!!!!! Someone in here just started playing Valorant! 🍗🍗🍗");
                }
            }
        }
    }
        
};
