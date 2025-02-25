const { Events, PermissionsBitField } = require('discord.js');

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
            if (reaction.message.author.id == '1167280848127655947' && !member.permissions.has(PermissionsBitField.Flags.KickMembers)){
                channel.send("Dawg really thought he could react to my message and get away with it.... "+user.globalName+".... shun! shun! shun! 😡😡");

                const expr = mathRandomInt(1,5);
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
                case 5:
                    msg = "And stay out!";
                    break;
                default:
                    break;
                }

                user.send(msg)
                    .then(message => console.log(`Sent message: ${message.content}`))
                    .catch(console.error);
                member.timeout(5_000);
            }else if(user != reaction.message.author && reaction.message.author.id != '1167280848127655947'){
                switch(mathRandomInt(1,10)){
                    case 1:
                        channel.send(user.globalName+" reacted with a "+reaction.emoji.name+", "+reaction.message.author.globalName+"... you finna take that!? 😒😒😒🤢🤢🥵🤬😡");
                        break;
                    case 2:
                        channel.send("<@"+user.id +">... why did you react to that guy?");
                        break;
                    case 3:
                        channel.send("Yoo hoo!" + reaction.message.author.globalName+ ", some guy reacted to your message!");
                        break;
                    case 4:
                        channel.send(user.globalName+" thinks he\'s a jokester, brah! Quit your reacting!");
                        break;
                    case 5:
                        channel.send(user.globalName+".... someone likes "+reaction.emoji.name+"! Jee whiz bruddy! "+reaction.message.author.globalName+"..Get a load of this guy😒");
                        break;
                    case 6:
                        channel.send(user.globalName + ", remove that hateful reaction! The ghost of Christmas Bum beckons you!");
                        break;
                    case 7:
                        channel.send("ALERT!!!!!!!!!!! <@"+user.id+"> reacted with a "+reaction.emoji.name+" to "+reaction.message.author.globalName+"\'s message! GROSS!");
                        break;
                    case 8:
                        channel.send("What even are these emojis, dawg?? "+reaction.emoji.name+"s?? Hop on the emoji dictionary broskie");
                        break;
                    case 9:
                        channel.send(user.globalName+" brapped everywhere! Yucky! 😂");
                        break;
                    case 10:
                        channel.send(reaction.message.author.globalName+" is a victim of hatred! @plobmeisters, kill "+ user.globalName+"!");
                        break;
                }
                
            }else if (user == reaction.message.author){
                switch(mathRandomInt(1,3)){
                    case 1:
                        channel.send(user.globalName+" reacted to themselves brah 😂😁😁😂😃🤣! Get your "+reaction.emoji.name+"s out of here 🙄😡");
                        break;
                    case 2:
                        channel.send("Los que reactar to themselves 😂😂😂 it was " + user.globalName);
                        break;
                    case 3:
                        channel.send("Loser alert! Someone here just reacted to themselves😂! It....was.... <@"+user.id+">!")
                        break;
                }
            } 
            
        }
            
    }
        
};
