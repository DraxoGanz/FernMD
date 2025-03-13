const axios = require('axios');

module.exports = {
    command: ['ffstalk'],
    description: 'Cek informasi akun Free Fire berdasarkan User ID',
    owner: false,
    group: false,
    private: false,
    limit: false,

    execute: async (m, { args, reply, Draxo }) => {
        if (!args[0]) {
            return reply('Masukkan User ID Free Fire!\nContoh: .ffstalk 251948311');
        }

        const userId = args[0];
        const apiUrl = `https://api.ryzendesu.vip/api/stalk/ff?userId=${encodeURIComponent(userId)}`;

        try {
            const response = await axios.get(apiUrl);
            const json = response.data;

            if (!json.name) {
                return reply('🚫 Gagal mengambil data akun Free Fire.');
            }

            const {
                name,
                bio,
                level,
                region,
                brRank,
                brRankPoint,
                csRankPoint,
                accountCreated,
                lastLogin,
                preferMode,
                language,
                equippedItems
            } = json;

            let message = `🔥 *Free Fire Stalker*\n\n`;
            message += `🆔 *User ID*: ${userId}\n`;
            message += `👤 *Nickname*: ${name}\n`;
            message += `📜 *Bio*: ${bio || 'Tidak ada'}\n`;
            message += `🎮 *Level*: ${level}\n`;
            message += `🌍 *Region*: ${region}\n`;
            message += `🏆 *Battle Royale Rank*: ${brRank} (${brRankPoint} RP)\n`;
            message += `🥇 *Clash Squad Rank Point*: ${csRankPoint}\n`;
            message += `📆 *Akun Dibuat*: ${accountCreated}\n`;
            message += `🕒 *Terakhir Login*: ${lastLogin}\n`;
            message += `🎯 *Mode Favorit*: ${preferMode}\n`;
            message += `🗣️ *Bahasa*: ${language}\n`;

            if (equippedItems && equippedItems.length > 0) {
                message += `\n🎭 *Peralatan yang Dipakai:*\n`;
                equippedItems.forEach(item => {
                    message += `- ${item.name}\n`;
                });
            }

            // Kirim pesan dengan informasi utama
            await reply(message);

        } catch (error) {
            console.error("Error fetching Free Fire data:", error);
            reply('❌ Terjadi kesalahan saat mengambil data.');
        }
    }
};