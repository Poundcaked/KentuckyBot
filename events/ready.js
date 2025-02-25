const { Events } = require('discord.js');
const { ActivityType } = require('discord.js');

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
var list_of_messages, message, last_message;

const people = [
  '298091522', //tortuga
  '153818940', //pisrat
  '1565763106', //me
  '118113463', //hygiea
  '3979537975', //joandre
  '534882522' //hayley
];
  
  
async function getAFriend() {
  try {
    let chosenPerson = people[mathRandomInt(0, people.length - 1)];

    let friendsResponse = await fetch(`https://friends.roblox.com/v1/users/${chosenPerson}/friends?userSort=0`);
    if (!friendsResponse.ok) throw new Error("Failed to fetch friends");
    let friendsData = await friendsResponse.json();

    let friends = friendsData.data;
    if (friends.length === 0) throw new Error("This user has no friends");

    let randomIndex = mathRandomInt(0, friends.length - 1);
    let randomFriend = friends[randomIndex];

    let userResponse = await fetch(`https://users.roblox.com/v1/users/${chosenPerson}`);
    if (!userResponse.ok) throw new Error("Failed to fetch user details");
    let userData = await userResponse.json();

    let personName = userData.name;
    let personDisplayName = userData.displayName;

    let suffix = "th";
    if (randomIndex === 0) suffix = "st";
    else if (randomIndex === 2) suffix = "rd";

    console.log(`${personDisplayName} (${personName})'s ${randomIndex + 1}${suffix} friend is ${randomFriend.displayName} (${randomFriend.name}, ${randomFriend.id})`);
  } catch (error) {
    console.error("Error:", error.message);
  }
}


// old_list_of_messages = [
//     'I pledge 🤚 allegiance ❤️ to the rags 👕  Near the nasty 🤮 place 🌆 of Joandre’s 👨🏻 Bum 🟡🟡'+'\n'+'  And to the Blackpink 🇰🇷 for which it stands 🧍‍♂️'+'\n'+'  One 1️⃣ phone 📱 '+'\n'+' Inside a toilet 🚽  '+'\n'+' With piles of poo 💩'+'\n'+'  and Joandre 👨🏻 on top 🔝', 
//     'DEAD CHAT ☠☠☠☠☠☠☠☠ 💀💀💀💀💀💀', 
//     'ALIVE CHAT 😁😁😁✅✅✅✅🧪🦚', 
//     'Hola guys.... I am Kentucky Chibbleson', 
//     'Whats up gang! 👐👐👐⚠‼‼‼ Have the opps been defeated yet?', 
//     'Me: Errrr.... Siri.... play Lil Plob Ultimate Mashup! '+'\n'+' Siri: Aw yeah, blud! That\'s my favorite song! https://www.youtube.com/watch?v=fmee3VdfXlo', 
//     '<@708776187899543583>!!!!!!!!!!!!!!!!!!!!!! STEVE JUST NUKED YOUR HOUSE 😭😭😭😭😭😭😭😭😭', 
//     'Hey guys 😁', 
//     'Psstt..... Pisrat.... guess what', 
//     'My face when Suleiman the magnificent breaks into my home and steals my Hagia Sophia: 😭😭😭😭😭😭😭😭😭🤔☠🤣🤣🤣🤙', 
//     '😨', 
//     'I think someone here has 5 protons, cause they are Boron! (Hint: it is Pisrat) 😲😲😲', 
//     'AAAAAAAAHHHHHHH!!!!!!! . . . . My bad gang! I saw a spider 🕷🕸🕸🕷🕷🕷🕸', 
//     'The square root of ' + String(String(String((new Date().getMinutes())) + ' is ') + String(Math.sqrt((new Date().getMinutes())))),
//     'Guys ... who cut the cabbage? 🥬🥬 ohhh... P.U.!!!!!!! IT WAS STEVE 😭😭😭😭😭😭😭😭😭😭', 
//     'DAD CAT 💀💀💀🦨🦨💨💨💨💨💨😭💀', '🤤', 
//     '⚔ WARNING! THIS SERVER IS BEING INVADED BY A GANG OF FOUL BEASTS! 🐗🐗🐗🐗🐗 RUN!!! 🔔🔔🔔⏰⏰⏰', 
//     '🤣🤣🤣🤣 i JUST heard the most funniest joke of all time! Want to hear it? It goes a little something like 🐗🚽 What did the Troglodyte say to the Gorgon??? Good morning good evening and good night! 😭😭😭', 
//     'Guys, Hansel gaming just announced that he will quit youtube in ' + String(String(mathRandomInt(1, 44)) + 'days! Subscribe to him now!!!'), 
//     '<@605130610922618882>whoa re you', 
//     '💀 Those who know: 🐂💨🚽', 
//     '<@&1145876166759157850>... Alright plebians,... wake up! Wake up and smell👃👃👃 the ashes!', 
//     'Sweetness 👽',
//     'PISRAT!!!!!!!!!!!!! 😂😂👆😂👆👆 (like Mustard!!!!!!!!!!!! kendrick lamar) 😭😭💔',
//     'My favorite number is '+mathRandomInt(1,Date.now()) + ', anyone else? 🤔🤔',
//     'Pisrat is from ohio 😂😂'
// ];

list_of_messages = [
  'Yikes! Joandre just fecal brapped everywhere! 🤮🤮',
  'Sorry for the spam, guys! T\'wasnt my fault! 😭',
  'Squid game but all the contestants are Pisrat! Anyone else want this?😅😅',
  'So do I look..... like... Pisrat????!??!?!?? 🤣🤣',
  'Ewwww!!!! Steve!!!!!!! gross, man!',
  'If it don\'t make the boom boom💥💥💥💥, I don\'t got the room room! Who\'s with me??😁😁😁',
  'Who wants to play Valorant with me??? Say me! 🤣☠🤣☠',
  'Cierto o falso: Pisrat le gustan plobs 😂',
  'Me encantan los bums de Bulgaria, sus paises son muy invaluables 👑',
  '"There is no instance of a Gorgon benefitting from prolonged gulching.”\n― Sun Tzu, The Art of War',
  'Tyler el Creador vs Pisrat... who is winning? 😬',
  '“Let your plans be dark and impenetrable as gulch, and when you move, fall like a plimp or plob.”\n― Sun Tzu, The Art of War',
  'friend',
  "Joandre dropped his phone in the toilet... AGAIN! EW! 🤢 Blud is a butterfinger",


  'Gulch detection levels are off the charts when Pisrat walks in. 💀',
  '“One must never trust a gulch, lest they wish to plob in despair.”\n― Ancient Wisdom',
  'Steve just said he drinks mayo straight from the jar… 😨🚨',
  'Yo, Joandre just tripped over a plimp and blamed the wind 💀💀💀',
  'Salty Turtle Boy said he could beat a Gorgon in a race. Brah, you built like a gulch. 💀',
  'Steve said he\'d drink Gorgon milk if it gave him superpowers. 🤢🚨',
  'Gorgon spotting at Walmart… Steve, explain yourself. 😬',


  'BREAKING NEWS: John Plob dead at 51, more coming up soon 😭😭😭',
  'BREAKING NEWS: Latin America in shambles after Joandre Olmeda is spotted stealing all the BLACKPINK merchandise off the shelves 😲',
  'Yikes, Pisrat 😬😬😬'
]

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

function rerollTime(){
  currentDate = Date.now();
  randomTime = Number(mathRandomInt(14400, 72000)) * 1000;
  var predictedTime = currentDate + randomTime;

  return new Date(predictedTime);
}

module.exports = {
	name: Events.ClientReady,
	once: true,
	async execute(client) {
      //client.channels.cache.find((channel)=> channel.name === 'general').send("What is up my bluds 🙋‍♂️👋👋! Kentucky Chibbleson here! 👍👽. Took a quick nap! 💤💤😴");
      client.user.setActivity('Gorgonine Simulator X: 2002 Edition', { type: ActivityType.Playing });
        while(client && client.token){
          var date = rerollTime();
            
          while (!(date.getHours() >= 7 && date.getHours() <= 22)) {
            console.log("Had to reroll time, hour was " + date.getHours());
            date = rerollTime();  // Store the new rerolled time
          }

          console.log("-------------------------------");
          console.log("Next message at "+date.toLocaleDateString() + " - " +date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true })+ " or "+randomTime / 1000 + "s until message");
          console.log("-------------------------------");

          await delay(randomTime);

          if(makeMessage() == "friend"){
            client.channels.cache.find((channel) => channel.name === 'general').send(getAFriend());
          }else{
            client.channels.cache.find((channel) => channel.name === 'general').send((makeMessage()));
          }
            
            
        }
	},
};