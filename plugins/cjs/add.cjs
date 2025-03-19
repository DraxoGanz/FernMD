module.exports = {
    command: ["add"],
    description: 'Menambakan nomor kedalam grub',
    owner: false,
    group: true,
    admin: true,
    botAdmin: true,
    
    execute: async (m, { Draxo, args, participants, reply }) => {
        try {
            if (!args[0]) return reply("⚠️ Masukkan nomor atau tag pengguna!");

            let number;
            if (m.quoted) {
                number = m.quoted.sender;
            } else if (args[0].startsWith("@")) {
                number = args[0].replace("@", "") + "@s.whatsapp.net";
            } else {
                number = args[0].replace(/[^0-9]/g, "") + "@s.whatsapp.net";
            }

            let groupMetadata = await Draxo.groupMetadata(m.chat);
            let groupAdmins = groupMetadata.participants.filter(p => p.admin).map(p => p.id);

            if (!groupAdmins.includes(m.sender)) return reply("❌ Anda harus menjadi admin grup!");

            await Draxo.groupParticipantsUpdate(m.chat, [number], "add")
                .then(() => reply(`✅ Berhasil menambahkan ${args[0]}`))
                .catch((err) => reply(`❌ Gagal menambahkan ${args[0]}\n${err}`));

        } catch (err) {
            console.error(err);
            reply("⚠️ Terjadi kesalahan, coba lagi nanti!");
        }
    }
};