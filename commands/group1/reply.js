//The following allows our command to exist.
const { Command } = require('discord.js-commando');

/* Now, commands are classes exported with module.exports.
Let's create the class and set module.exports to it. */

module.exports = class ReplyCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'reply',
            group: 'group1',
            memberName: 'reply',
            description: 'replies with a message',
            examples: ['reply']
        });
    }

    run(msg) {
        return msg.say('Hi, I\'m awake!');
    }
};