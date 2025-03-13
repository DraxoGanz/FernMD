const axios = require('axios');

module.exports = {
    command: ['ttstalk', 'tiktokstalk'],
    description: 'Cek informasi akun TikTok berdasarkan username',
    owner: false,
    group: false,
    private: false,
    limit: false,

    execute: async (m, { args, reply, Draxo }) => {
        if (!args[0]) {
            return reply('Masukkan username TikTok!\nContoh: .tiktokstalk draxo09');
        }

        const username = args[0];
        const apiUrl = `https://api.ryzendesu.vip/api/stalk/tiktok?username=${encodeURIComponent(username)}`;

        try {
            const response = await axios.get(apiUrl);
            const json = response.data;

            if (!json.userInfo || !json.userInfo.username) {
                return reply('🚫 Gagal mengambil data akun TikTok.');
            }

            const {
                id,
                username,
                nickname,
                avatar,
                bio,
                verified,
                totalFollowers,
                totalFollowing,
                totalLikes,
                totalVideos,
                totalFriends
            } = json.userInfo;

            let caption = `🎵 *TikTok Stalker*\n\n`;
            caption += `🆔 *User ID*: ${id}\n`;
            caption += `👤 *Username*: @${username}\n`;
            caption += `📛 *Nama*: ${nickname}\n`;
            caption += `📜 *Bio*: ${bio || 'Tidak ada'}\n`;
            caption += `✅ *Terverifikasi*: ${verified ? 'Ya' : 'Tidak'}\n`;
            caption += `👥 *Followers*: ${totalFollowers}\n`;
            caption += `👤 *Following*: ${totalFollowing}\n`;
            caption += `❤️ *Total Likes*: ${totalLikes}\n`;
            caption += `🎬 *Total Video*: ${totalVideos}\n`;
            caption += `🤝 *Total Teman*: ${totalFriends}\n`;

            // Kirim gambar profil dengan caption informasi akun
            await Draxo.sendMessage(m.chat, {
                image: { url: avatar },
                caption: caption
            }, { quoted: m });

        } catch (error) {
            console.error("Error fetching TikTok data:", error);
            reply('❌ Terjadi kesalahan saat mengambil data.');
        }
    }
};