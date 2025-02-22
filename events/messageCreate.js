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

        //disable bot responses
        if(!message.member.user.bot){
            //insult steve 10%
        if ((message.author.id) == '1057803700636242021' || (message.author.id) == '792138304484802561' || (message.author.id) == '1208522228459905077' || (message.author.id) == '1025851835489194065') { 
            if(mathRandomInt(1,10) == 1){
              message.channel.send("Dawg really said \"" + message.content + "\" 😭😭😭😭😭😭");
            }
         }
 
         //send luke (4%chance) each message dm
         if((message.author.id) == '824780208383983687'){
             if(mathRandomInt(1,25)==1){
                 message.author.send("STOP IT 😡😡😡😡😡😡😡😡😡😡 Your message \""+message.content+"\" is very BAD (And made by AI)")
                 .then(message => console.log(`Sent message: ${message.content}`))
                 .catch(console.error);
             }  
         }
         
         //ping joandre 5 times if he is @'ed once
         if((message.content.includes(String('<@1140125716709654548>')) || message.content.includes(String('<@1214801319806640141>'))) ){
             for(var i=0; i < 5; i++){
                 message.channel.send(String('JOANDRE,'+message.author.globalName+' wants you! 🤤<@1140125716709654548> <@1214801319806640141>'));
                 await delay(Number(0.1)*1000);
             }
         }
         
         //check if user sent an image
         if(message.content.length == 0 && !message.system && !message.poll && message.attachments.size > 0){
             if(message.embeds){
                 message.react('🐌');
                 message.react('💨');
                 message.reply("Dawg sent an image, video, or other piece of media that can be embedded! 😭👍🙋‍♂️!");
                 
             }
         }
         
         //1% chance to say this to pisrat
         if((message.author.id) == '708776187899543583'){
             if(mathRandomInt(1,100)==1){
                 message.channel.send(String('STOP IT PISRAT 😭😭😭😭😭😭 I CAN\'T TAKE YOUR FOUL MESSAGES ANY LONGER 💀🚽☠☠!!! QUIT IT 😡😡😡😡😡'));
             }
         }
 
         //if one says "kentucky" respond
         if((message.content.includes('Kentucky') || message.content.includes('kentucky') || message.content.includes('<@1167280848127655947>')) ){
             message.reply('Did I hear my name? 🤔🤔??');
         }
         
         //interject greetings
         if(message.content.includes('hi ') || (message.content.includes('hi') && message.content.length == 2 )){
             message.reply('Sup brah! Yo soy Kentucky Chibbleson 🐌');
         }
         //interject denial
         if(message.content.includes('no ') || (message.content.includes('no') && message.content.length == 2)){
              message.reply('Why not, dawg? 👎👎💀');
         }
         //insult gulchers
         if(message.channel.name.includes('gulch')){
             if(!message.member.user.bot){
                 const expr = mathRandomInt(1,14);
                 switch (expr) {
                 case 1:
                     message.reply('Dawg is gulched ☠☠☠');
                     break;
                 case 2:
                     message.reply('Blud spoke in the gulch channel');
                     break;
                 case 3:
                     message.reply('Matthew Blackford despises you');
                     break;
                 case 4:
                     message.reply('Ariston Regala loves you ❤❤❤');
                     break;
                case 5:
                    message.reply('Los que gulch 💥😈☠');
                    break;
                case 6:
                    message.reply('Ewww 🤮🤮🤮!!! There\'s gulch all over you! You better clean it up, buddy! 😡😡😡');
                    break;
                case 7:
                    message.reply('Luke Bolstad thinks you\'re from ohio 🤣🤣🤣');
                    break;
                case 8:
                    message.reply('Blaw is a gulcher 😭😭😭😭');
                    break;
                 default:
                     break;
                 }
             }
             
         }
        }

        
    }
        
};
