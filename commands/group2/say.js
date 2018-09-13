const { Command } = require('discord.js-commando');

/* A note about aliases from the tutorial:
Auto-Aliases are also created for aliases and command names containing a hyphen
(-). For example, server-info will automatically have serverinfo as an alias
without needing to list it in the aliases. */

module.exports = class SayCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'say', //aliases and command names are case insensitive
            aliases:['copy', 'repeat', 'echo', 'parrot'], // e.g Copy = CoPy
            group: 'group2',
            memberName: 'say',
            description: 'replies with the text you provide (<200 chars)',
            examples: ['say RMC4IFE'],
            guildOnly: true,
            args:[
                {
                    key: 'text',
                    prompt: 'What text would you like the bot to say?',
                    type: 'string', //other types include user, member, integer
                    validate: text => {
                        if (text.length < 201) return true;
                        return 'Message Content is above 200 characters';
                    }
                }
            ]
        });
    }

    run(msg, {text}) {
        msg.delete()
        return msg.say(text)
    }
};