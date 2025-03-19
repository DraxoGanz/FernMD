const axios = require('axios');

module.exports = {
    command: ["igdl", "igdownload"],
    description: "Download Video Dari Instagram",
    limit: true,

    execute: async (m, { args, reply, Draxo }) => {
        if (!args[0]) return reply("❌ Masukkan URL Instagram!\nContoh: .igdl https://www.instagram.com/reel/Drax");

        const url = args[0];

        try {
            // Kirim reaksi ⏱️ saat proses dimulai
            await Draxo.sendMessage(m.chat, {
                react: {
                    text: "⏱️",
                    key: m.key,
                }
            });

            const response = await axios.get(`https://www.ikyiizyy.my.id/api/download/igdl?url=${encodeURIComponent(url)}`);
            const json = response.data;

            if (!json.status || !json.result || !json.result.url) {
                return reply("🚫 Gagal mengambil video Instagram.");
            }

            const videoUrl = json.result.url;

            let message = `📸 *Instagram Downloader*\n\n`;
            message += `🔗 *Link*: ${url}\n`;
            
            // Kirim video dengan caption
            await Draxo.sendMessage(m.chat, { 
                video: { url: videoUrl }, 
                mimetype: 'video/mp4', 
                caption: message,
                fileName: `Instagram_Download.mp4`
            }, { quoted: m });

            // Ganti reaksi ke ✅ setelah video terkirim
            await Draxo.sendMessage(m.chat, {
                react: {
                    text: "✅",
                    key: m.key,
                }
            });

        } catch (error) {
            console.error("❌ Error fetching Instagram video:", error);
            reply("❌ Terjadi kesalahan saat mengunduh video.");
        }
    }
};