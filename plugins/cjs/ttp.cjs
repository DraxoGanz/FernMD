const { createCanvas } = require('canvas');
const { Sticker } = require('wa-sticker-formatter');

module.exports = {
    command: ['ttp'],
    description: 'Membuat stiker dari teks',
    owner: false,
    group: false,
    private: false,
    limit: false,
    
    execute: async (m, { Draxo, args, reply }) => {
        try {
            if (!args[0]) {
                return reply('🚨 Harap masukkan teks dan ukuran untuk diubah menjadi stiker.\nContoh: .ttp teks|50');
            }

            let [text, size] = args.join(' ').split('|');
            size = parseInt(size) || 100; // Default ukuran font 100 jika tidak diisi

            if (isNaN(size) || size < 1) {
                return reply('🚨 Ukuran teks harus berupa angka positif.');
            }

            const imgBuffer = await generateTextImage(text, size);
            const stickerBuffer = await createSticker(imgBuffer);

            await Draxo.sendMessage(m.chat, { sticker: stickerBuffer }, { quoted: m });
        } catch (e) {
            console.error(e);
            return reply('❌ Terjadi kesalahan saat membuat stiker.');
        }
    }
};

// =========================
// Function untuk membuat gambar teks
// =========================
async function generateTextImage(text, size) {
    const canvas = createCanvas(512, 512);
    const ctx = canvas.getContext('2d');

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.font = `bold ${size}px Arial`;
    ctx.fillStyle = '#ffffff';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    drawWrappedText(ctx, text, canvas.width / 2, canvas.height / 2, canvas.width - 20, size);

    return canvas.toBuffer();
}

// =========================
// Function untuk menulis teks dengan pembatasan lebar
// =========================
function drawWrappedText(ctx, text, x, y, maxWidth, fontSize) {
    let words = text.split(' ');
    let lineHeight = fontSize * 1.5;
    let lines = [];
    let currentLine = '';

    for (let word of words) {
        let testLine = currentLine + word + ' ';
        let metrics = ctx.measureText(testLine);
        if (metrics.width > maxWidth && currentLine !== '') {
            lines.push(currentLine.trim());
            currentLine = word + ' ';
        } else {
            currentLine = testLine;
        }
    }
    lines.push(currentLine.trim());

    let startY = y - (lines.length - 1) * lineHeight / 2;
    lines.forEach((line, index) => {
        ctx.fillText(line, x, startY + index * lineHeight);
    });
}

// =========================
// Function untuk membuat stiker dari gambar teks
// =========================
async function createSticker(imgBuffer) {
    return new Sticker(imgBuffer, {
        pack: 'TTP Sticker',
        author: 'Bot',
        type: 'default'
    }).toBuffer();
}