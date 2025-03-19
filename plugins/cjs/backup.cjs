const fs = require("fs");
const cp = require("child_process");
const { promisify } = require("util");

const exec = promisify(cp.exec).bind(cp);

module.exports = {
    command: ["backupscript", "backupsc"],
    description: "Auto Backup Script",
    owner: true,
    group: false,
    private: false,
    admin: false,
    botAdmin: false,
    limit: false,

    execute: async (m, { Draxo, reply }) => {
        try {
            let namaFileZip = "BackupScript.zip";
            const daftarPengecualian = ["node_modules/*", ".cache/*", ".npm/*", "sessions/*", "package-lock.json"];
            const argumenPengecualian = daftarPengecualian.map(item => `-x "${item}"`).join(' ');

            let waktuSekarang = new Date();
            let options = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
            let tanggal = waktuSekarang.toLocaleDateString("id-ID", options);
            let jam = waktuSekarang.toLocaleTimeString("id-ID", { hour: "2-digit", minute: "2-digit", second: "2-digit" });

            let groupId = m.chat; 
            reply(`🔄 Auto Backup Aktif\n📅 Tanggal: ${tanggal}\n⏰ Waktu: ${jam}\n\n⏳ File Backup Akan Dikirim...`);

            const perintahZip = `zip -r ${namaFileZip} . ${argumenPengecualian}`;
            await exec(perintahZip);

            if (!fs.existsSync(namaFileZip)) throw new Error("❌ Gagal membuat file backup!");

            const statFile = fs.statSync(namaFileZip);
            if (statFile.size === 0) throw new Error("❌ File backup kosong!");

            const file = fs.readFileSync(namaFileZip);

            await Draxo.sendMessage(groupId, {
                document: file,
                mimetype: "application/zip",
                fileName: namaFileZip,
                caption: `📂 *Backup Sukses!*\n\n📄 *Nama File:* ${namaFileZip}\n📆 *Tanggal:* ${tanggal} ${jam}\n📦 *Ukuran:* ${(statFile.size / 1024 / 1024).toFixed(2)} MB`,
            });

            console.log(`✅ Backup berhasil dikirim ke grup ${groupId}`);

            setTimeout(() => {
                try {
                    fs.unlinkSync(namaFileZip);
                    console.log("🗑️ File backup telah dihapus.");
                } catch (errorHapus) {
                    console.error("❌ Gagal menghapus file backup:", errorHapus);
                }
            }, 5000);

        } catch (error) {
            console.error("❌ Kesalahan backup:", error);
            reply(`❌ Error saat backup: ${error.message}`);
        }
    }
};