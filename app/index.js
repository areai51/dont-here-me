var SlackBot = require('slackbots');

// create a bot 
var bot = new SlackBot({
    token: '<your api key>', // Add a bot https://my.slack.com/services/new/bot and put the token  
    name: 'Dont Here Me'
});

bot.on('message', function (data) {
    var messageText = data.text
    if (messageText.indexOf('@channel') > -1 === true || messageText.indexOf('@here') > -1 === true) {
        var params = {
            icon_emoji: ':rage3:'
        };
        bot.postMessageToChannel('general', "Hey ! Pls don't use 'HERE' or 'CHANNEL' unnecessarily, Remember you just pinged everybody in this group", params);
    }
});
