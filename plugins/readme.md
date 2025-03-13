# 📂 **Struktur Folder plugins untuk Plugin CJS**  
**Tujuan:** Mengelola plugins berbasis **CommonJS (CJS)** dalam folder `plugins` untuk modularitas dan skalabilitas kode.

---

## **Konsep**  
- **Plugins CJS** adalah modul Node.js yang diekspor menggunakan sintaks `module.exports`.  
- Folder `plugins` berfungsi sebagai tempat penyimpanan semua plugin yang dapat di-load secara dinamis.  
- Setiap plugin memiliki fungsi atau logika spesifik yang bisa diakses melalui sistem command.

---

## **Langkah-langkah**  
### 1. **Buat Folder `plugins`**  
```bash
mkdir plugins
```

### 2. **Buat File Plugin CJS**  
Contoh: `plugins/cjs/hello.cjs`  
```javascript
// hello.cjs
module.exports = {
  name: "hello",
  execute: () => {
    console.log("Hello, World! 🌍");
  },
};
```

### 3. **Load Plugin Secara Dinamis**  
Di file utama (misal: `app.cjs`):  
```javascript
const fs = require("fs");
const path = require("path");

// Baca semua file di folder plugins
const pluginsDir = path.join(__dirname, "plugins");
const commandFiles = fs.readdirSync(pluginsDir).filter(file => file.endsWith(".cjs"));

// Load semua plugin
const plugins = {};
for (const file of commandFiles) {
  const command = require(path.join(pluginsDir, file));
  plugins[command.name] = command;
}

// Contoh penggunaan plugin
plugins.hello.execute(); // Output: Hello, World! 🌍
```


### File `bye.cjs`  
```javascript
module.exports = {
  name: "bye",
  execute: () => {
    console.log("Goodbye! 🚀");
  },
};
```

### Eksekusi Plugin  
```javascript
// Di file app.cjs
plugins.bye.execute(); // Output: Goodbye! 🚀
```

---

## **Keuntungan**  
✅ **Modularitas:** Setiap plugin terpisah dalam file sendiri.  
✅ **Mudah Dikelola:** Tambah/hapus plugin tanpa mengubah kode utama.  
✅ **Skalabilitas:** Cocok untuk aplikasi CLI, bot Discord, atau tools kompleks.

---

## **Catatan**  
- Pastikan nama plugin unik untuk menghindari konflik.  
- Gunakan `try-catch` untuk menangani error saat load plugin.  
- Untuk performa, preload semua plugin saat aplikasi start.

---

✨ **Dengan struktur ini, pengembangan fitur menjadi lebih terorganisir dan profesional!** 🚀
