var Discord = require("discord.js");
var client = new Discord.Client();
var prefix = "!";
var request = require('request');
var cheerio = require('cheerio');
client.on("ready", () => {
  console.log("I am ready!");
  client.user.setActivity("");
});

client.on("message", (message) => {
  var args = message.content.slice(prefix.length).trim().split(/ +/g);
  var command = args.shift().toLowerCase();
  var argu = args.join(" ");
  if (!message.content.startsWith(prefix)) return;
    if (command === "sstatus") {
    request('https://kigen.co/scpsl/getinfo.php?ip=98.157.71.215&port=7777', function(err, resp, html) {
        if (!err){
          var $ = cheerio.load(html); 
          
            if (html === '{"error":"Server not found"}') {
          request('https://kigen.co/scpsl/getinfo.php?ip=98.157.71.215&port=7778', function(err, resp, html) {
        if (!err){
          var $ = cheerio.load(html); 
          
            if (html === '{"error":"Server not found"}') {
          request('https://kigen.co/scpsl/getinfo.php?ip=98.157.71.215&port=7779', function(err, resp, html) {
        if (!err){
          var $ = cheerio.load(html); 
          
            if (html === '{"error":"Server not found"}') {
          request('https://kigen.co/scpsl/getinfo.php?ip=98.157.71.215&port=7780', function(err, resp, html) {
        if (!err){
          var $ = cheerio.load(html); 
          
            if (html === '{"error":"Server not found"}') {
          request('https://kigen.co/scpsl/getinfo.php?ip=98.157.71.215&port=7781', function(err, resp, html) {
        if (!err){
          var $ = cheerio.load(html); 
          
            if (html === '{"error":"Server not found"}') {
          request('https://kigen.co/scpsl/getinfo.php?ip=98.157.71.215&port=7782', function(err, resp, html) {
        if (!err){
          var $ = cheerio.load(html); 
          
            if (html === '{"error":"Server not found"}') {
          request('https://kigen.co/scpsl/getinfo.php?ip=98.157.71.215&port=7783', function(err, resp, html) {
        if (!err){
          var $ = cheerio.load(html); 
          
            if (html === '{"error":"Server not found"}') {
          request('https://kigen.co/scpsl/getinfo.php?ip=98.157.71.215&port=7784', function(err, resp, html) {
        if (!err){
          var $ = cheerio.load(html); 
          
            if (html === '{"error":"Server not found"}') {
          message.channel.send({"embed": {
    "color": 9245716,
    timestamp: new Date(),
    "title": "The Havoc Heresy",
     "author": {
      "name": "SCP Secret Laboratory [OFFLINE]",
      "icon_url": "http://scp-sl.wdfiles.com/local--files/nav:side/scp-sl-logo.png"
     },
        fields: [{
          name: "IP:",
          value: "98.157.71.215",
          inline: true
        },
        {
          name: "PORT:",
          value: "N/A",
          inline: true
        },
        {
          name: "PLAYERS:",
          value: 'N/A',
          inline: true
        }
          ],
      }
     }); 
            }
            else {
            var json = JSON.parse(html);
     
     if ("error" in json) {
     console.log("wtf0");
     } else {
          var playerCount = json.players;
          
     }
            message.channel.send({"embed": {
    "color": 3498293,
    timestamp: new Date(),
    "title": "The Havoc Heresy",
     "author": {
      "name": "SCP Secret Laboratory",
      "icon_url": "http://scp-sl.wdfiles.com/local--files/nav:side/scp-sl-logo.png"
     },
        fields: [{
          name: "IP:",
          value: "98.157.71.215",
          inline: true
        },
        {
          name: "PORT:",
          value: "7784",
          inline: true
        },
        {
          name: "PLAYERS:",
          value: `${playerCount}`,
          inline: true
        }
          ],
      }
     });  
            }
      }    
});
            }
            else {
            var json = JSON.parse(html);
     
     if ("error" in json) {
     console.log("wtf0");
     } else {
          var playerCount = json.players;
          
     }
            message.channel.send({"embed": {
    "color": 3498293,
    timestamp: new Date(),
    "title": "The Havoc Heresy",
     "author": {
      "name": "SCP Secret Laboratory",
      "icon_url": "http://scp-sl.wdfiles.com/local--files/nav:side/scp-sl-logo.png"
     },
        fields: [{
          name: "IP:",
          value: "98.157.71.215",
          inline: true
        },
        {
          name: "PORT:",
          value: "7783",
          inline: true
        },
        {
          name: "PLAYERS:",
          value: `${playerCount}`,
          inline: true
        }
          ],
      }
     });  
            }
      }    
});
            }
            else {
            var json = JSON.parse(html);
     
     if ("error" in json) {
     console.log("wtf0");
     } else {
          var playerCount = json.players;
          
     }
            message.channel.send({"embed": {
    "color": 3498293,
    timestamp: new Date(),
    "title": "The Havoc Heresy",
     "author": {
      "name": "SCP Secret Laboratory",
      "icon_url": "http://scp-sl.wdfiles.com/local--files/nav:side/scp-sl-logo.png"
     },
        fields: [{
          name: "IP:",
          value: "98.157.71.215",
          inline: true
        },
        {
          name: "PORT:",
          value: "7782",
          inline: true
        },
        {
          name: "PLAYERS:",
          value: `${playerCount}`,
          inline: true
        }
          ],
      }
     });  
            }
      }    
});
            }
            else {
            var json = JSON.parse(html);
     
     if ("error" in json) {
     console.log("wtf0");
     } else {
          var playerCount = json.players;
          
     }
            message.channel.send({"embed": {
    "color": 3498293,
    timestamp: new Date(),
    "title": "The Havoc Heresy",
     "author": {
      "name": "SCP Secret Laboratory",
      "icon_url": "http://scp-sl.wdfiles.com/local--files/nav:side/scp-sl-logo.png"
     },
        fields: [{
          name: "IP:",
          value: "98.157.71.215",
          inline: true
        },
        {
          name: "PORT:",
          value: "7781",
          inline: true
        },
        {
          name: "PLAYERS:",
          value: `${playerCount}`,
          inline: true
        }
          ],
      }
     });  
            }
      }    
});
            }
            else {
            var json = JSON.parse(html);
     
     if ("error" in json) {
     console.log("wtf0");
     } else {
          var playerCount = json.players;
          
     }
            message.channel.send({"embed": {
    "color": 3498293,
    timestamp: new Date(),
    "title": "The Havoc Heresy",
     "author": {
      "name": "SCP Secret Laboratory",
      "icon_url": "http://scp-sl.wdfiles.com/local--files/nav:side/scp-sl-logo.png"
     },
        fields: [{
          name: "IP:",
          value: "98.157.71.215",
          inline: true
        },
        {
          name: "PORT:",
          value: "7780",
          inline: true
        },
        {
          name: "PLAYERS:",
          value: `${playerCount}`,
          inline: true
        }
          ],
      }
     });  
            }
      }    
});
            }
            else {
            var json = JSON.parse(html);
     
     if ("error" in json) {
     console.log("wtf0");
     } else {
          var playerCount = json.players;
          
     }
            message.channel.send({"embed": {
    "color": 3498293,
    timestamp: new Date(),
    "title": "The Havoc Heresy",
     "author": {
      "name": "SCP Secret Laboratory",
      "icon_url": "http://scp-sl.wdfiles.com/local--files/nav:side/scp-sl-logo.png"
     },
        fields: [{
          name: "IP:",
          value: "98.157.71.215",
          inline: true
        },
        {
          name: "PORT:",
          value: "7779",
          inline: true
        },
        {
          name: "PLAYERS:",
          value: `${playerCount}`,
          inline: true
        }
          ],
      }
     });  
            }
      }    
});
            }
            else {
            var json = JSON.parse(html);
     
     if ("error" in json) {
     console.log("wtf0");
     } else {
          var playerCount = json.players;
          
     }
            message.channel.send({"embed": {
    "color": 3498293,
    timestamp: new Date(),
    "title": "The Havoc Heresy",
     "author": {
      "name": "SCP Secret Laboratory",
      "icon_url": "http://scp-sl.wdfiles.com/local--files/nav:side/scp-sl-logo.png"
     },
        fields: [{
          name: "IP:",
          value: "98.157.71.215",
          inline: true
        },
        {
          name: "PORT:",
          value: "7778",
          inline: true
        },
        {
          name: "PLAYERS:",
          value: `${playerCount}`,
          inline: true
        }
          ],
      }
     });  
            }
      }    
});
            }
            else {
            var json = JSON.parse(html);
     
     if ("error" in json) {
     console.log("wtf0");
     } else {
          var playerCount = json.players;
          
     }
            message.channel.send({"embed": {
    "color": 3498293,
    timestamp: new Date(),
    "title": "The Havoc Heresy",
     "author": {
      "name": "SCP Secret Laboratory",
      "icon_url": "http://scp-sl.wdfiles.com/local--files/nav:side/scp-sl-logo.png"
     },
        fields: [{
          name: "IP:",
          value: "98.157.71.215",
          inline: true
        },
        {
          name: "PORT:",
          value: "7777",
          inline: true
        },
        {
          name: "PLAYERS:",
          value: `${playerCount}`,
          inline: true
        }
          ],
      }
     });  
            }
      }    
});
  }
});
client.login(process.env.BOT_TOKEN);
