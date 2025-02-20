const { Events } = require('discord.js');
const { ActivityType } = require('discord.js');

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
var list_of_messages, message, last_message;

list_of_messages = [
    'I pledge 🤚 allegiance ❤️ to the rags 👕  Near the nasty 🤮 place 🌆 of Joandre’s 👨🏻 Bum 🟡🟡'+'\n'+'  And to the Blackpink 🇰🇷 for which it stands 🧍‍♂️'+'\n'+'  One 1️⃣ phone 📱 '+'\n'+' Inside a toilet 🚽  '+'\n'+' With piles of poo 💩'+'\n'+'  and Joandre 👨🏻 on top 🔝', 
    'DEAD CHAT ☠☠☠☠☠☠☠☠ 💀💀💀💀💀💀', 
    'ALIVE CHAT 😁😁😁✅✅✅✅🧪🦚', 
    'Hola guys.... I am Kentucky Chibbleson', 
    'Whats up gang! 👐👐👐⚠‼‼‼ Have the opps been defeated yet?', 
    'Me: Errrr.... Siri.... play Lil Plob Ultimate Mashup! '+'\n'+' Siri: Aw yeah, blud! That\'s my favorite song! https://www.youtube.com/watch?v=fmee3VdfXlo', 
    '<@708776187899543583>!!!!!!!!!!!!!!!!!!!!!! STEVE JUST NUKED YOUR HOUSE 😭😭😭😭😭😭😭😭😭', 
    'Hey guys 😁', 
    'Psstt..... Pisrat.... guess what', 
    'My face when Suleiman the magnificent breaks into my home and steals my Hagia Sophia: 😭😭😭😭😭😭😭😭😭🤔☠🤣🤣🤣🤙', 
    '😨', 
    'I think someone here has 5 protons, cause they are Boron! (Hint: it is Pisrat) 😲😲😲', 
    'AAAAAAAAHHHHHHH!!!!!!! . . . . My bad gang! I saw a spider 🕷🕸🕸🕷🕷🕷🕸', 
    'The square root of ' + String(String(String((new Date().getMinutes())) + ' is ') + String(Math.sqrt((new Date().getMinutes())))),
    'Guys ... who cut the cabbage? 🥬🥬 ohhh... P.U.!!!!!!! IT WAS STEVE 😭😭😭😭😭😭😭😭😭😭', 
    'DAD CAT 💀💀💀🦨🦨💨💨💨💨💨😭💀', '🤤', 
    '⚔ WARNING! THIS SERVER IS BEING INVADED BY A GANG OF FOUL BEASTS! 🐗🐗🐗🐗🐗 RUN!!! 🔔🔔🔔⏰⏰⏰', 
    '🤣🤣🤣🤣 i JUST heard the most funniest joke of all time! Want to hear it? It goes a little something like 🐗🚽 What did the Troglodyte say to the Gorgon??? Good morning good evening and good night! 😭😭😭', 
    'Guys, Hansel gaming just announced that he will quit youtube in ' + String(String(mathRandomInt(1, 44)) + 'days! Subscribe to him now!!!'), 
    '<@605130610922618882>whoa re you', 
    '💀 Those who know: 🐂💨🚽', 
    '<@&1145876166759157850>... Alright plebians,... wake up! Wake up and smell👃👃👃 the ashes!', 
    'Sweetness 👽',
    'PISRAT!!!!!!!!!!!!! 😂😂👆😂👆👆 (like Mustard!!!!!!!!!!!! kendrick lamar) 😭😭💔',
    'My favorite number is '+mathRandomInt(1,Date.now()) + ', anyone else? 🤔🤔',
    'Pisrat is from ohio 😂😂'
];

function makeMessage() {
    message = list_of_messages[(mathRandomInt(1, list_of_messages.length) - 1)];
    if (message == last_message) {
      while (!!(message == last_message)) {
        message = list_of_messages[(mathRandomInt(1, list_of_messages.length) - 1)];
      }
    }
    last_message = message;
    return message;
}

function colorRandom() {
    var num = Math.floor(Math.random() * Math.pow(2, 24));
    return '#' + ('00000' + num.toString(16)).substr(-6);
}

function mathRandomInt(a, b) {
    if (a > b) {
      // Swap a and b to ensure a is smaller.
      var c = a;
      a = b;
      b = c;
    }
    return Math.floor(Math.random() * (b - a + 1) + a);
}

var randomTime = 0;
var currentDate = Date.now();

module.exports = {
	name: Events.ClientReady,
	once: true,
	async execute(client) {
      //client.channels.cache.find((channel)=> channel.name === 'general').send("What is up my bluds 🙋‍♂️👋👋! Kentucky Chibbleson here! 👍👽. Took a quick nap! 💤💤😴");
      client.user.setActivity('Gorgonine Simulator X: 2002 Edition', { type: ActivityType.Playing });

        while(client && client.token){
            randomTime = Number((mathRandomInt(1, 7200)))*1000;
            var predictedTime = currentDate + randomTime;
            var date = new Date(predictedTime)
            console.log("Next message on "+date.toTimeString() + " or "+randomTime / 1000 + "s until message");
            await delay(randomTime);
            client.channels.cache.find((channel) => channel.name === 'general').send((makeMessage()));
        }
	},
};