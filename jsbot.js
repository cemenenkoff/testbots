/* jsbot is my first attempt at coding a Discord bot using Javascript.
To ensure everything is set up properly (node, visualstudio, etc.), see
if the following line will compile by itself without errors. */
//console.log('hello world!');

/* Next, we can get into the real coding. */

/* Now we need to make the bot, and we have some options. We can have a
const variable which is a new discord client, but we could also make a
more advanced Commando client. The Commando Client has extra features
which make setting up commands easier. See:
https://dragonfire535.gitbooks.io/discord-js-commando-beginners-guide/content/getting-started.html */
 //Require the commando extension package for discord.js and a path.
const { CommandoClient } = require('discord.js-commando');
const path = require('path');

//Create a new Commando Client.
const client = new CommandoClient({
    commandPrefix: 'js',
    owner: '289523626770825226', //ID for yaegermenjensen
    disableEveryone: true, //Prevent the bot from mentioning @everyone.
    unknownCommandResponse: false
})

/* Now we can register a group of commands. This requires making a
commands folder within the main bot directory as well as appropriately
named subdirectories for each group of commands. __dirname is the name
of the current directory, within which we ensure there is new folder
called commands. We'll put all of our commands in the commands folder. */

client.registry
    .registerDefaultTypes()
    .registerGroups([
        ['group1', 'the first command group'],
        ['group2', 'the 2nd command group']
    ])
    .registerDefaultGroups()
    .registerDefaultCommands()
    .registerCommandsIn(path.join(__dirname, 'commands'));

client.on('ready', () => {
    console.log('Logged in!');
    client.user.setActivity('with humans');
});

/* The most important final step is to tell the bot to login to the server
with its secret bot token. Also, if a change is made to the bot, it must
be closed and run again for those changed to take effect. On Windows terminals,
ctrl+c kills the current process. */
client.login('NDg5ODQ0NzQ4NDk3MDU5ODUy.Dnwrhw.dGws20S4hPtIDvZB2_9ylN7hykk');
