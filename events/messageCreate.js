const { Events } = require('discord.js');

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function mathRandomInt(a, b) {
    if (a > b) {
      // Swap a and b to ensure a is smaller.
      var c = a;
      a = b;
      b = c;
    }
    return Math.floor(Math.random() * (b - a + 1) + a);
}
        
function attachIsImage(msgAttach) {
    var url = msgAttach.url;
    //True if this url is a png image.
    return url.indexOf("png", url.length - "png".length /*or 3*/) !== -1;
}

module.exports = {
    name: Events.MessageCreate,
    async execute(message){
        if ((message.author.id) == '1057803700636242021' || (message.author.id) == '792138304484802561' || (message.author.id) == '1208522228459905077' || (message.author.id) == '1025851835489194065') { 
            message.channel.send("Dawg really said \"" + message.content + "\" 😭😭😭😭😭😭");
        }

        if((message.author.id) == '824780208383983687'){
            if(mathRandomInt(1,4)==1){
                message.channel.send(String(('I agree with the following message: \"' + String(String(message.content) + '\" ✅✅✅✅✅'))));
            }  
        }

        if((message.content.includes(String('<@1140125716709654548>')) || message.content.includes(String('<@1214801319806640141>'))) && !message.member.user.bot){
            for(var i=0; i < 5; i++){
                message.channel.send(String('JOANDRE 🤤<@1140125716709654548> <@1214801319806640141>'));
                await delay(Number(0.1)*1000);
            }
        }

        if(message.content.length == 0 && !message.system && !message.poll && message.attachments.size > 0){
            if(message.embeds){
                if (message.attachments.size > 0) {
                    if (message.attachments.every(attachIsImage)){
                        message.react('🐌');
                        message.react('💨');
                        message.reply("Dawg sent an image 😭👍🙋‍♂️!");
                    }
                }
                
            }
        }

        if((message.author.id) == '708776187899543583'){
            if(mathRandomInt(1,100)==1){
                message.channel.send(String('STOP IT PISRAT 😭😭😭😭😭😭 I CAN\'T TAKE YOUR FOUL MESSAGES ANY LONGER 💀🚽☠☠!!! QUIT IT 😡😡😡😡😡'));
            }
        }

        if((message.content.includes('Kentucky') || message.content.includes('kentucky')) && !message.member.user.bot){
            message.reply('Did I hear my name? 🤔🤔??');
        }

        if((message.content.includes('hi')  && !message.member.user.bot)){
            message.reply('Sup brah! Yo soy Kentucky Chibbleson 🐌');
        }

        
          
    }
        
};
