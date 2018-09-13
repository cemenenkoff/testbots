const { Command } = require('discord.js-commando');

module.exports = class DMCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'dm',
            group: 'group2',
            memberName: 'dm',
            description: 'sends a message to the user you mention',
            examples: ['dm @User whaddup'],
            args: [
                {
                    key: 'user',
                    prompt: 'which user do you want to send the DM to?',
                    type: 'user'
                },
                {
                    key: 'content',
                    prompt: 'what is the message?',
                    type: 'string'
                }
            ]
        });    
    }

    run(msg, { user, content }) {
        return user.send(content)
    }
};