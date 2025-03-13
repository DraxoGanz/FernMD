const axios = require('axios');

module.exports = {
    command: ['yttranscript'],
    description: 'Ambil transkrip dari video YouTube',
    owner: false,
    group: false,
    private: false,
    limit: false,
    execute: async (m, { args, reply }) => {
        if (!args[0]) {
            return reply('Masukkan URL video YouTube!\nContoh: .yttranscript https://youtu.be/opW1DbwaUXU');
        }
        const videoUrl = args[0];
        const apiUrl = `https://api.ryzendesu.vip/api/tool/yt-transcript?url=${encodeURIComponent(videoUrl)}`;
        try {
            const response = await axios.get(apiUrl);
            const json = response.data;
            if (!json.status || !json.transcript) {
                return reply('🚫 Gagal mengambil transkrip video.');
            }
            const transcript = json.transcript;
            let message = `🎥 *Transkrip Video YouTube*\n\n`;
            message += transcript;
            reply(message);
        } catch (error) {
            console.error("Error fetching YouTube transcript:", error);
            reply('❌ Terjadi kesalahan saat mengambil transkrip.');
        }
    }
};
