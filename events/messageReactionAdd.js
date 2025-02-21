const { Events } = require('discord.js');

function mathRandomInt(a, b) {
    if (a > b) {
      // Swap a and b to ensure a is smaller.
      var c = a;
      a = b;
      b = c;
    }
    return Math.floor(Math.random() * (b - a + 1) + a);
}

module.exports = {
    name: Events.MessageReactionAdd,
    async execute(reaction, user, details){  
        const message = reaction.message;
        const channel = reaction.message.channel;
        const id = user.id;
        const member = message.guild.members.cache.find(user => user.id === id);
        if(!user.bot){
            console.log(member);
            if (reaction.message.author.id == '1167280848127655947'){
                channel.send("Dawg really thought he could react to my message and get away with it.... "+user.username+".... shun! shun! shun! 😡😡");

                const expr = mathRandomInt(1,4);
                var msg = "";
                switch (expr) {
                case 1:
                    msg = "Don't get on my dark side, bud 😡😠😠";
                    break;
                case 2:
                    msg = "Get ready to suffer, brahskie! 😂😁😂";
                    break;
                case 3:
                    msg = "You are DONE for, dawg! 😑😐😑😐😐";
                    break;
                case 4:
                    msg = "Los que DieAr 🙄 (You)";
                    break;
                default:
                    break;
                }

                user.send(msg)
                    .then(message => console.log(`Sent message: ${message.content}`))
                    .catch(console.error);
                member.timeout(5_000);
            }else if(user != reaction.message.author && reaction.message.author.id != '1167280848127655947'){
                channel.send(user.username+" reacted with a "+reaction.emoji.name+", "+reaction.message.author.username+"... you finna take that!? 😒😒😒🤢🤢🥵🤬😡");
            }else if (user == reaction.message.author){
                channel.send(user.username+" reacted to themselves brah 😂😁😁😂😃🤣! Get your "+reaction.emoji.name+"s out of here 🙄😡");
            } 
            
        }
            
    }
        
};
