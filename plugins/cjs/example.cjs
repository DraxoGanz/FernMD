module.exports = {
    command: ['cjs'],
    description: 'Example plugin',
    owner: false,
    group: false,
    private: false,
    limit: false,
    execute: async (m, { Draxo, isOwner, command, isCmd, reply, addCountCmd, getPosiCmdUser, randomemoji, isCreator, example, quoted, reaction, text, fetchJson, args, botNumber, pushname, isGroup, isPrivate, pickRandom, prefix, ftroli, fkontak }) => {
        await reply('This is an example plugin cjs!');
    }
};