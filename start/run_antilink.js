//================= { MODULE } =================\\
require('./tmp/helpers/commandMenu');
require('../settings/config');
const {
    smsg,
    getGroupAdmins,
    formatp,
    tanggal,
    formatDate,
    getTime,
    isUrl,
    await,
    sleep,
    clockString,
    msToDate,
    sort,
    toNumber,
    enumGetKey,
    runtime,
    fetchJson,
    getBuffer,
    jsonformat,
    delay,
    format,
    logic,
    generateProfilePicture,
    parseMention,
    getRandom,
    pickRandom,
    reSize
} = require('./lib/myfunction');

//================= { PREMIUM MODULE } =================\\
const {
    addPremiumUser,
    getPremiumExpired,
    getPremiumPosition,
    expiredCheck,
    checkPremiumUser,
    getAllPremiumUser
} = require('./lib/premium');

//================= { BAILEYS MODULE } =================\\
const {
    makeWASocket,
    downloadContentFromMessage,
    emitGroupParticipantsUpdate,
    emitGroupUpdate,
    generateWAMessageContent,
    generateWAMessage,
    makeInMemoryStore,
    prepareWAMessageMedia,
    generateWAMessageFromContent,
    MediaType,
    areJidsSameUser,
    WAMessageStatus,
    downloadAndSaveMediaMessage,
    AuthenticationState,
    GroupMetadata,
    initInMemoryKeyStore,
    getContentType,
    MiscMessageGenerationOptions,
    useSingleFileAuthState,
    BufferJSON,
    WAMessageProto,
    MessageOptions,
    WAFlag,
    WANode,
    WAMetric,
    ChatModification,
    MessageTypeProto,
    WALocationMessage,
    ReDraxoectMode,
    WAContextInfo,
    proto,
    WAGroupMetadata,
    ProxyAgent,
    waChatKey,
    MimetypeMap,
    MediaPathMap,
    WAContactMessage,
    WAContactsArrayMessage,
    WAGroupInviteMessage,
    WATextMessage,
    WAMessageContent,
    WAMessage,
    BaileysError,
    WA_MESSAGE_STATUS_TYPE,
    MediaConnInfo,
    URL_REGEX,
    WAUrlInfo,
    WA_DEFAULT_EPHEMERAL,
    WAMediaUpload,
    mentionedJid,
    processTime,
    Browser,
    MessageType,
    Presence,
    WA_MESSAGE_STUB_TYPES,
    Mimetype,
    relayWAMessage,
    Browsers,
    GroupSettingChange,
    DisDraxoectReason,
    WASocket,
    getStream,
    WAProto,
    isBaileys,
    AnyMessageContent,
    fetchLatestBaileysVersion,
    useMultiFileAuthState,
    templateMessage
} = require('@whiskeysockets/baileys');
//================= { MODULE } =================\\
const axios = require('axios')
const os = require('os')
const fs = require('fs')
const util = require('util')
const fetch = require('node-fetch')
const {
    randomBytes
} = require('crypto')
const speed = require('performance-now')
const moment = require('moment-timezone')
const {
    spawn: spawn,
    exec
} = require('child_process')
const {
    Primbon
} = require('scrape-primbon')
const primbon = new Primbon()
const {
    performance
} = require('perf_hooks')
const path = require('path')
const ytdl = require("ytdl-core")
const colors = require('@colors/colors/safe')
const chalk = require('chalk')
const {
    getFileFromGithub,
    updateFileOnGithub
} = require("./lib/github")
const {
    toPTT,
    toAudio
} = require("./lib/converter")
const from = m.key.remoteJid;
const isGroup = from.endsWith("@g.us");

//================= { GITHUB } =================\\
const githubOwner = '';
const githubRepo = '';
const githubFilePath = '';
const githubAccessToken = '';

//================= { CUSTOM LIBRARY } =================\\
const _cmd = JSON.parse(fs.readFileSync('./start/lib/database/command.json'));
const _cmdUser = JSON.parse(fs.readFileSync('./start/lib/database/commandUser.json'));
const {
    addCountCmd,
    getPosiCmdUser,
    addCountCmdUser
} = require('./tmp/helpers/command')
const pendaftar = JSON.parse(fs.readFileSync('./start/lib/database/userNumber.json'));
const userPrem = JSON.parse(fs.readFileSync('./start/lib/database/userPremium.json'))

//================= { BASE } =================\\
module.exports = Draxo = async (Draxo, m, chatUpdate, store) => {
    try {
        var body = (
            (m.mtype === 'conversation') ? m.message?.conversation :
            (m.mtype === 'imageMessage') ? m.message?.imageMessage?.caption :
            (m.mtype === 'videoMessage') ? m.message?.videoMessage?.caption :
            (m.mtype === 'extendedTextMessage') ? m.message?.extendedTextMessage?.text :
            (m.mtype === 'buttonsResponseMessage') ? m.message?.buttonsResponseMessage?.selectedButtonId :
            (m.mtype === 'listResponseMessage') ? m.message?.listResponseMessage?.singleSelectReply?.selectedRowId :
            (m.mtype === 'templateButtonReplyMessage') ? m.message?.templateButtonReplyMessage?.selectedId :
            (m.mtype === 'interactiveResponseMessage') ? JSON.parse(m.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson).id :
            (m.mtype === 'messageContextInfo') ? (
                m.message?.buttonsResponseMessage?.selectedButtonId ||
                m.message?.listResponseMessage?.singleSelectReply?.selectedRowId ||
                m.text
            ) : ''
        ) || '';
        var budy = (typeof m.text === 'string' ? m.text : '');
        var prefix = prefa ? 
            (body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)?.[0] || "") 
            : prefa ?? global.prefix;
        const isUser = pendaftar.includes(m.sender);
        const isCmd = typeof body === 'string' && body.startsWith(prefix);
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase();
        const args = body.trim().split(/ +/).slice(1);
        const pushname = m.pushName || "No Name";
        const text = q = args.join(" ");
        const fatkuns = (m.quoted || m);
        const quoted = (fatkuns.mtype === 'buttonsMessage') ? fatkuns[Object.keys(fatkuns)[1]] : 
            (fatkuns.mtype === 'templateMessage') ? fatkuns.hydratedTemplate[Object.keys(fatkuns.hydratedTemplate)[1]] : 
            (fatkuns.mtype === 'product') ? fatkuns[Object.keys(fatkuns)[0]] : 
            m.quoted ? m.quoted : m;
        const mime = (quoted.msg || quoted).mimetype || '';
        const qmsg = (quoted.msg || quoted);
        const isMedia = /image|video|sticker|audio/.test(mime);

        //================= { USER } =================\\
        var isAuthor = global.ownNumb.replace(/[^0-9]/g, '').includes(m.sender.split("@")[0]);
        const botNumber = await Draxo.decodeJid(Draxo.user.id);
        const globalelit = `${global.ownNumb}@s.whatsapp.net`;
        const isOwner = globalelit.includes(m.sender);
        const itsMe = m.sender === botNumber ? true : false;
        const isCreator = [botNumber, ...global.ownNumb].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender);

        //================= { GROUP } =================\\
        const groupMetadata = m.isGroup ? await Draxo.groupMetadata(m.chat).catch(() => null) : null;
        const groupName = groupMetadata?.subject || '';
        const participants = m.isGroup ? (groupMetadata?.participants || []) : [];
        const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : '';
        const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false;
        const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false;
        const groupOwner = m.isGroup ? groupMetadata?.owner : '';
        const isGroupOwner = m.isGroup ? (groupOwner ? groupOwner : groupAdmins).includes(m.sender) : false;
        //================= { ACCESS } =================\\

        //================= { REACT } =================\\
        const moji = ['📚', '💭', '💫', '🌌', '🌏', '✨', '🌷', '🍁', '🪻', ]
        const randomemoji = moji[Math.floor(Math.random() * moji.length)]

        //================= { PREMIUM } =================\\
        const isPremium = isCreator || isCreator || checkPremiumUser(m.sender, userPrem);

        //================= { TIME } =================\\
        const moment = require('moment-timezone')
        const time2 = moment().tz("Asia/Jakarta").format("HH:mm:ss")
        let ucapanWaktu;

        if (time2 < "03:00:00") {
            ucapanWaktu = "Selamat Malam🌃"
        } else if (time2 < "06:00:00") {
            ucapanWaktu = "Selamat Subuh🌆"
        } else if (time2 < "11:00:00") {
            ucapanWaktu = "Selamat Pagi🏙️"
        } else if (time2 < "15:00:00") {
            ucapanWaktu = "Selamat Siang🏞️"
        } else if (time2 < "19:00:00") {
            ucapanWaktu = "Selamat Sore🌄"
        } else {
            ucapanWaktu = "Selamat Malam🌃"
        }
        const wib = moment(Date.now()).tz("Asia/Jakarta").locale("id").format("HH:mm:ss z")
        const wita = moment(Date.now()).tz("Asia/Makassar").locale("id").format("HH:mm:ss z")
        const wit = moment(Date.now()).tz("Asia/Jayapura").locale("id").format("HH:mm:ss z")
        const salam2 = moment(Date.now()).tz("Asia/Jakarta").locale("id").format("a")

        //================= { STATUS } =================\\

        if (!Draxo.public) {
            if (!m.key.fromMe) return
        }

        //================= {  } =================\\

        try {
            ppuser = await Draxo.profilePictureUrl(m.sender, 'image')
        } catch (err) {
            ppuser = 'https://raw.githubusercontent.com/latesturl/dbCDN/refs/heads/main/my-DB/profile.jpg'
        }
        ppnyauser = await getBuffer(ppuser)

        const reSize = async (buffer, ukur1, ukur2) => {
            return new Promise(async (resolve, reject) => {
                let jimp = require('jimp')
                var baper = await jimp.read(buffer);
                var ab = await baper.resize(ukur1, ukur2).getBufferAsync(jimp.MIME_JPEG)
                resolve(ab)
            })
        }
        const fkethmb = await reSize(ppuser, 300, 300)
        let jimp = require("jimp")
        const resize = async (image, width, height) => {
            const read = await jimp.read(image);
            const data = await read.resize(width, height).getBufferAsync(jimp.MIME_JPEG);
            return data;
        };

        const reaction = async (jidss, emoji) => {
            Draxo.sendMessage(jidss, {
                react: {
                    text: emoji,
                    key: m.key
                }
            })
        };


        //================= { LIMIT } =================\\

        try {
            const isNumber = x => typeof x === 'number' && !isNaN(x);

            let limitawal = 10;
            let limitUser = isCreator ? 1000 : limitawal;

            if (!global.db) global.db = {};
            if (!global.db.data) global.db.data = {
                users: {},
                chats: {},
                settings: {}
            };
            if (!global.db.data.users) global.db.data.users = {};
            if (!global.db.data.chats) global.db.data.chats = {};
            if (!global.db.data.settings) global.db.data.settings = {};

            let user = global.db.data.users[m.sender] || {};

            if (!global.db.data.users[m.sender]) {
                global.db.data.users[m.sender] = {
                    serialNumber: randomBytes(16).toString('hex'),
                    title: `${isPremium ? 'Premium' : 'User'}`,
                    afkTime: -1,
                    badword: 0,
                    afkReason: '',
                    snlast: 0,
                    warn: 0,
                    email: '',
                    lastgift: 86400000,
                    autolevelup: true,
                    nick: m.sender,
                    premium: isPremium ? true : false,
                    limit: limitUser,
                    level: 0,
                    totalLimit: 0
                };
            }

            user = global.db.data.users[m.sender]; // Pastikan user selalu ada

            if (!isNumber(user.afkTime)) user.afkTime = -1;
            if (!('badword' in user)) user.badword = 0;
            if (!('title' in user)) user.title = '';
            if (!('serialNumber' in user)) user.serialNumber = randomBytes(16).toString('hex');
            if (!('afkReason' in user)) user.afkReason = '';
            if (!('nick' in user)) user.nick = Draxo.getName(m.sender);
            if (!('autolevelup' in user)) user.autolevelup = true;
            if (!isPremium) user.premium = false;
            if (!('totalLimit' in user)) user.totalLimit = 0;
            if (!isNumber(user.limit)) user.limit = limitUser;
            if (!isNumber(user.level)) user.level = 0;
            if (!isNumber(user.lastgift)) user.lastgift = 86400000;
            if (!isNumber(user.snlast)) user.snlast = 0;
            if (!isNumber(user.warn)) user.warn = 0;
            if (!isNumber(user.unreglast)) user.unreglast = 0;
            if (!('registered' in user)) user.registered = false;
            if (!user.registered) {
                if (!('email' in user)) user.email = '';
                if (!isNumber(user.codeExpire)) user.codeExpire = 0;
            }

            // Perbaikan objek chats
            let chats = global.db.data.chats[m?.chat] || {};
            global.db.data.chats[m?.chat] = chats;

            let settings = global.db.data.settings || {};
            global.db.data.settings = settings;

            // Scheduler reset limit harian
            const cron = require('node-cron');
            cron.schedule('00 00 * * *', () => {
                let users = Object.keys(global.db.data.users);
                for (let jid of users) {
                    global.db.data.users[jid].claim = 1;
                    if (global.db.data.users[jid].limit < 1) {
                        global.db.data.users[jid].limit = limitawal;
                    }
                }
            }, {
                scheduled: true,
                timezone: "Asia/Makassar"
            });

        } catch (err) {
            console.error("There is an error:", err);
        }

        //======================\\

        const fkontak = {
            key: {
                participant: `0@s.whatsapp.net`,
                ...(m.chat ? {
                    remoteJid: `status@broadcast`
                } : {})
            },
            message: {
                'contactMessage': {
                    'displayName': global.namabot,
                    'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${pushname},;;;\nFN:${pushname}\nitem1.TEL;waid=6288242704508:6288242704508\nitem1.X-ABLabel:Mobile\nEND:VCARD`,
                    'jpegThumbnail': fkethmb,
                    thumbnail: fkethmb,
                    sendEphemeral: true
                }
            }
        }

        const ftroli = {
            key: {
                remoteJid: '6285736178354-1625305606@g.us',
                participant: '0@s.whatsapp.net'
            },
            message: {
                orderMessage: {
                    itemCount: 999,
                    status: 1,
                    thumbnail: fkethmb,
                    surface: 1,
                    message: "FernMD",
                    orderTitle: "Activated!",
                    sellerJid: '0@s.whatsapp.net'
                }
            }
        }

        const qevent = {
            key: {
                participant: `0@s.whatsapp.net`,
                ...(m.chat ? {
                    remoteJid: ""
                } : {})
            },
            'message': {
                "eventMessage": {
                    "isCanceled": false,
                    "name": `${ucapanWaktu}`,
                    "description": "FernMD",
                    "location": {
                        "degreesLatitude": 0,
                        "degreesLongitude": 0,
                        "name": "FernMD"
                    },
                    "joinLink": "https://call.whatsapp.com/video/hMwVijMQtUb0qBJL3lf0rv",
                    "startTime": "12345678"
                }
            }
        }

        //======================\\

        const example = (teks) => {
            return `\n *Usage Examples:*\n Type *${prefix+command}* ${teks}\n`
        }
        
        /*
        const reply = (teks) => {
            Draxo.sendMessage(m.chat, {
                text: teks
            }, {
                quoted: m
            })
        }
        */
        const draxoreply = (teks) => {
Drazo.sendMessage(m.chat, { 
  text: teks, 
  contextInfo:{
 "externalAdReply": {
    "title": `Fern - Multi Device`,
    "body": `${ucapanWaktu}`,
     "previewType": "PHOTO",
     "thumbnailUrl": 'https://cloudkuimages.com/uploads/images/67d69a62ba609.jpg',
     "sourceUrl": `https://whatsapp.com/channel/0029VaBOlsv002TEjlntTE2D`
 }}}, { quoted: ftroli })
}
        const reply = async (teks) => {
        const DraxoJob = {
        contextInfo: {
        forwardingScore: 999,
        isForwarded: true,
        forwardedNewsletterMessageInfo: {
        newsletterName: `Fern - Multi Device`,
        newsletterJid: `120363378800202820@newsletter`,
        },
        externalAdReply: {
        showAdAttribution: true,
        title: `Fern - Multi Device`, 
        body: `${ucapanWaktu}`, 
        thumbnailUrl: `https://cloudkuimages.com/uploads/images/67d69a62ba609.jpg`,
        thumbnail: '',
        sourceUrl: 'https://whatsapp.com/channel/0029VazeUE92Jl8KuVcHIC46', 
        },
        },
        text: teks, 
        };
        return Draxo.sendMessage(m.chat, DraxoJob, {
        quoted: ftroli, ephemeralExpiration: 999,
        });
        };
       

//================= { PLUGINS } =================\\
        const pluginsLoader = async (directory) => {
            let plugins = [];
            const folders = fs.readdirSync(directory);
            
            folders.forEach(file => {
                const filePath = path.join(directory, file);
                
                if (filePath.endsWith(".cjs")) {
                    try {
                        const resolvedPath = require.resolve(filePath);
                        
                        if (require.cache[resolvedPath]) {
                            delete require.cache[resolvedPath];
                        }
                        
                        const plugin = require(filePath);
                        plugins.push(plugin);
                    } catch (error) {
                        console.log(`Error loading plugin ${filePath}:`, error);
                    }
                }
            });
            
            return plugins;
        };

        const pluginsDisable = true;
        const plugins = await pluginsLoader(path.resolve(__dirname, "../plugins/cjs"));

        const plug = {
            Draxo,
            isOwner,
            command,
            isCmd,
            reply,
            addCountCmd,
            getPosiCmdUser,
            randomemoji,
            isCreator,
            example,
            quoted,
            reaction,
            text,
            fetchJson,
            args,
            botNumber,
            pushname,
            isGroup: m.isGroup,
            isPrivate: !m.isGroup,
            pickRandom,
            prefix,
            ftroli,
            fkontak
        };

        for (let plugin of plugins) {
            if (plugin.command.find(e => e == command.toLowerCase())) {
                if (plugin.owner && !isOwner) {
                    return m.reply(mess.owner);
                }
                if (plugin.group && !plug.isGroup) {
                    return m.reply(mess.ingroup);
                }
                if (plugin.private && !plug.isPrivate) {
                    return m.reply(mess.private);
                }
        
                if (plugin.limit) {
                    let user = global.db.data.users[m.sender];
                    if (!user || user.limit <= 0) {
                        return m.reply(mess.limit);
                    }
                    user.limit -= 1;
                }
        
                if (typeof plugin.execute !== "function") return;
                await plugin.execute(m, plug);
            }
        }


        //================= { CONSOLE LOGS } =================\\
        if (m.message) {
            let header = chalk.black(chalk.bgHex("#ff5e78").bold(`\n🌟 ${ucapanWaktu} 🌟`));
            let title = chalk.white(chalk.bgHex("#4a69bd").bold("🚀 There is a message 🚀"));
            let date = chalk.cyanBright(`📅 DATE        : ${new Date().toLocaleString()}`);
            let sender = chalk.yellowBright(`🗣️ SENDERNAME : ${pushname}`);
            let jid = chalk.magentaBright(`👤 JIDS       : ${m.sender}`);

            if (isCmd && !m.isGroup) {
                console.log(header);
                console.log(title);
                console.log(date);
                console.log(sender);
                console.log(jid);
                console.log(chalk.white("------------------------------------------"));
            } else if (m.isGroup) {
                let group = chalk.redBright(`🔍 MESS LOCATION : ${groupName}`);

                console.log(header);
                console.log(title);
                console.log(date);
                console.log(sender);
                console.log(jid);
                console.log(group);
                console.log(chalk.white("------------------------------------------"));
            }
        }


        if (isCmd && !isUser) {
            pendaftar.push(m.sender)
            fs.writeFileSync('./start/lib/database/userNumber.json', JSON.stringify(pendaftar, null, 2))
        }



//================= { ANTILINK FEATURE } =================\
const antilinkDB = './start/lib/database/antilink.json';

// Cek apakah file database sudah ada, jika tidak buat baru
if (!fs.existsSync(antilinkDB)) {
    fs.writeFileSync(antilinkDB, JSON.stringify({}), 'utf-8');
}
// =========================
// Deteksi Link dalam Pesan Masuk
// =========================
if (m.isGroup) {
    let db = JSON.parse(fs.readFileSync(antilinkDB, 'utf-8'));

    if (db[m.chat]) {
        const linkRegex = /(https?:\/\/[^\s]+)/gi;
        if (linkRegex.test(m.text)) {
            try {
                let groupMetadata = await conn.groupMetadata(m.chat);
                let groupAdmins = groupMetadata.participants.filter(p => p.admin).map(p => p.id);

                // Jika pengirim adalah admin atau owner bot, jangan hapus pesan
                if (groupAdmins.includes(m.sender) || m.sender === Draxo.user.id.split(":")[0] + "@s.whatsapp.net") {
                    return;
                }

                await Draxo.sendMessage(m.chat, { delete: m.key }); // Hapus pesan

                // Jika bukan admin, keluarkan dari grup
                await Draxo.groupParticipantsUpdate(m.chat, [m.sender], 'remove');

            } catch (e) {
                console.error("❌ Gagal menghapus pesan atau mengeluarkan pengguna:", e);
            }
        }
    }
}
//================= { SWITCH CASE } =================\\
switch (command) {
//================= { MAIN COURSE } =================\\
case "menu":
case "help": {
    Draxo.sendMessage(m.chat, { react: { text: `${randomemoji}`, key: m.key } });
    const owned = global.ownNumb + "@s.whatsapp.net";

    const nodeVersion = process.version;
    const packageJson = require('../package.json');
    const baileysVersion = packageJson.dependencies['@whiskeysockets/baileys'] || packageJson.devDependencies['@whiskeysockets/baileys'];
    const botStatus = Draxo.public ? 'Public' : 'Self';
    const MessageText = `Hello *${pushname}*, this is the bot menu!\n\n` +
                 `─ Time: *${ucapanWaktu}*\n` +
                 `─ Runtime: *${runtime(process.uptime())}*\n` +
                 `─ Node.js: *${nodeVersion}*\n` +
                 `─ Baileys: *${baileysVersion}*\n` +
                 `─ Status: *${botStatus}*`;
    draxoreply(MessageText)
}
break;


case "antilink": {
    if (!m.isGroup) return reply("🚨 Fitur ini hanya bisa digunakan di dalam grup.");
    if (!isAdmins) return reply("🚨 Hanya admin yang dapat mengaktifkan atau menonaktifkan fitur ini.");

    let db = JSON.parse(fs.readFileSync(antilinkDB, 'utf-8'));

    if (args[0] === "on") {
        db[m.chat] = true;
        reply("✅ Antilink telah diaktifkan dalam grup ini.");
    } else if (args[0] === "off") {
        delete db[m.chat];
        reply("❌ Antilink telah dinonaktifkan dalam grup ini.");
    } else {
        return reply("⚠️ Gunakan `.antilink on` untuk mengaktifkan dan `.antilink off` untuk menonaktifkan.");
    }

    fs.writeFileSync(antilinkDB, JSON.stringify(db), 'utf-8');
}
break;

//================= { MENU } =================\\
case "runtime": {
reply(`BOT TELAH BERJALAN SELAMA :\n*${runtime(process.uptime())}*`)
}
break
case "brat": {
 if (!text) return m.reply(`Contoh : ${prefix + command} Hai kak`);
 const safeText = typeof text === 'string' ? text : String(text || '');
 if (safeText.length > 100) return m.reply(`Karakter terbatas, max 100!`);
 try {
 const messageText = `Yuk pilih tipe *brat* yang Kamu suka, ada beberapa tipe nih! Klik *tombol* di bawah ini ya, kak! 😋👇`;
 const buttons = [
 {
 buttonId: `${prefix}bratgambar ${safeText}`,
 buttonText: { displayText: `Gambar` },
 type: 1,
 },
 {
 buttonId: `${prefix}bratvid ${safeText}`,
 buttonText: { displayText: `Video` },
 type: 1,
 }
 ];
 await Draxo.sendMessage(m.chat, {
 buttons: buttons,
 text: messageText,
 footer: `© Fern - Multi Device`,
 headerType: 1,
 viewOnce: true,
 contextInfo: {
 isForwarded: true,
 mentionedJid: [m.sender]
 }
 }, { quoted: m });
 } catch (error) {
 console.error('Error in bratt command:', error);
 m.reply('Terjadi kesalahan saat memproses perintah. Silakan coba lagi.');
 }
}
break

case "bratgambar": {
if (!text) return m.reply(example('teksnya'))
const axios = require('axios');
let brat = `https://api-ghostx.biz.id/api/imagecreator/bratgenerator?text=${encodeURIComponent(text)}`
let response = await axios.get(brat, { responseType: "arraybuffer" })
let videoBuffer = response.data;
try {
await Draxo.sendImageAsSticker(m.chat, videoBuffer, m, {packname: global.packname})
} catch {}
}
bbrea

case "bratvid":  case "bratvideo": {
if (!text) return m.reply(example('teksnya'))
try {
const axios = require('axios');
let brat = `https://api.siputzx.my.id/api/m/brat?text=${encodeURIComponent(text)}&isVideo=true&delay=1000`;
let response = await axios.get(brat, { responseType: "arraybuffer" });
let videoBuffer = response.data;
let stickerBuffer = await Draxo.sendVideoAsSticker(m.chat, videoBuffer, m, {
packname: global.packname,
})
} catch (err) {
console.error("Error:", err);
}
}
break

case 'anime': {
if (!text) return reply(`Anime Apa Yang Anda Cari?`)
const malScraper = require('mal-scraper')
reply(mess.wait)
        const anime = await malScraper.getInfoFromName(text).catch(() => null)
        if (!anime) return reply(`Could not find`)
let animetxt = `
🎀 *Title: ${anime.title}*
🎋 *Type: ${anime.type}*
🎐 *Premiered on: ${anime.premiered}*
💠 *Total Episodes: ${anime.episodes}*
📈 *Status: ${anime.status}*
💮 *Genres: ${anime.genres}
📍 *Studio: ${anime.studios}*
🌟 *Score: ${anime.score}*
💎 *Rating: ${anime.rating}*
🏅 *Rank: ${anime.ranked}*
💫 *Popularity: ${anime.popularity}*
♦️ *Trailer: ${anime.trailer}*
🌐 *URL: ${anime.url}*
❄ *Description:* ${anime.synopsis}*`
await Draxo.sendMessage(m.chat,{image:{url:anime.picture}, caption:animetxt},{quoted:ftroli})
}
break

case 'tourl': {
 if (!m.quoted) return reply("🚨 Reply media atau teks yang ingin diunggah!");
 
 try {
 const { uploadFile } = require('cloudku-uploader');
 const { Buffer } = require('buffer');

 let q = m.quoted;
 let mime = (q.msg || q).mimetype || '';
 let fileBuffer, fileName;

 if (mime) {
 fileBuffer = await q.download();
 let ext = mime.split('/')[1] || 'bin';
 fileName = `upload.${ext}`;
 } else if (q.text) {
 fileBuffer = Buffer.from(q.text, 'utf-8');
 fileName = 'upload.txt';
 } else {
 return reply("🚨 Tidak ada media atau teks yang ditemukan!");
 }

 reply(mess.wait)
 console.log(`🚀 Mengupload file ${fileName}...`);
 const result = await uploadFile(fileBuffer, fileName);

 if (result.status === "success") {
 return reply(`✅ *File berhasil diunggah!*\n\n📮 *L I N K :* ${result.url}\n📂 *File Name :* ${result.fileName}\n📊 *S I Z E :* ${result.Size} Byte\n📛 *T Y P E :* ${result.type}`);
 } else {
 return reply(`🚨 Gagal mengupload file! Server response: ${JSON.stringify(result)}`);
 }
 } catch (e) {
 console.error(e);
 return reply("🚨 Terjadi kesalahan saat mengupload file!");
 }
}
break

case "hdr": {
    if (!m.quoted) return reply("🚨 Reply Media Yang Ingin Di Upscale");
    try {
        const { uploadFile } = require("cloudku-uploader");
        const { Buffer } = require("buffer");
        
        let q = m.quoted;
        let mime = (q.msg || q).mimetype || "";
        let fileBuffer, fileName;

        if (mime) {
            fileBuffer = await Draxo.downloadMediaMessage(q);
            let ext = mime.split("/")[1] || "bin";
            fileName = `upload.${ext}`;
        } else if (q.text) {
            fileBuffer = Buffer.from(q.text, "utf-8");
            fileName = "upload.txt";
        } else {
            return reply("🚨 Tidak ada media atau teks yang ditemukan!");
        }

        reaction("⏳");

        // Upload file
        const uploadResult = await uploadFile(fileBuffer, fileName);
        const urlNya = uploadResult.url;
        // Fetch API HDR Upscale
        const apiResponse = await fetch(
            `https://api.vreden.my.id/api/artificial/hdr?url=${encodeURIComponent(urlNya)}`
        );
        const data = await apiResponse.json();
        if (!data.result || !data.result.data || !data.result.data.downloadUrls) {
            return reply("🚨 Gagal mendapatkan hasil HDR!");
        }
        const gambarurl = data.result.data.downloadUrls;
        await Draxo.sendMessage(m.chat, {
            image: { url: gambarurl },
            caption: "✅ Sukses Upscale Foto!",
        });
    } catch (e) {
        console.error(e);
        return reply("🚨 Terjadi kesalahan saat mengupload file!");
    }
}
break;

case 'setname': {
if (!text) return reply(`Contoh : ${prefix + command} 62XXXXXXX`);
if (!m.isGroup) return reply(`Fitur ini hanya bisa digunakan didalam grub`);
if (!isAdmins) return reply(`Fitur ini hanya bisa digunakan oleh admin grub`);
if (!isBotAdmins) return reply(`Bot Harus Menjadi Admin Untuk Menjalankan Fitur`);

const safeText = typeof text === 'string' ? text : String(text || '');
 if (safeText.length > 100) return m.reply(`Karakter terbatas, max 100!`);
try {
const Message = `Ingin Mengganti Nama Grub Atau Deskripsi Grub? Silahkan Dipilih`;
const buttons = [
 {
 buttonId: `${prefix}changename ${safeText}`,
 buttonText: { displayText: `Nama Grub` },
 type: 1,
 },
 {
 buttonId: `${prefix}changedesk ${safeText}`,
 buttonText: { displayText: `Deskripsi Grub` },
 type: 1,
 }
 ];
 await Draxo.sendMessage(m.chat, {
 buttons: buttons,
 text: Message,
 footer: `© Fern - Multi Device`,
 headerType: 1,
 viewOnce: true,
 contextInfo: {
 isForwarded: true,
 mentionedJid: [m.sender]
 }
 }, { quoted: m });
 } catch (error) {
 console.error('Error command:', error);
 m.reply('Terjadi kesalahan saat memproses perintah. Silakan coba lagi.');
 }
}
break

case 'changename': {
if(!text) return reply(`Contoh : ${prefix + command} DraxoGanz`)
Draxo.groupUpdateSubject(m.chat, text);
reply(`✅ Nama grup berhasil diubah menjadi: *${text}*`);
}
break
case 'changedesk': {
if (!text) return reply(`Contoh : ${prefix + command} DraxoGanz`)
Draxo.groupUpdateDescription(m.chat, text);
reply(`✅ Deskripsi grub berhasil diubah menjadi: *${text}*`);
}
break

case "tiktok": {
    if (!text) return reply("Silakan berikan link TikTok.");

    if (!(text.includes('http://') || text.includes('https://'))) return reply(`URL tidak valid, silakan masukkan URL yang valid.`);
    if (!text.includes('tiktok.com')) return reply(`URL TikTok tidak valid.`);

    try {
        await reaction(m.chat, "😆");
        await reply(mess.wait);

        const response = await fetch(`https://api.riicode.my.id/api/download/tiktokdl?url=${encodeURIComponent(text)}`);
        const data = await response.json();

        if (!data.status) {
            return reply("Gagal mengambil data dari TikTok.");
        }

        const result = data.result;
        const videoUrl = result.video_nowm; 
        const audioUrl = result.audio_url;
        const description = result.description; 

        await Draxo.sendMessage(m.chat, {
            video: await fetch(videoUrl),
            caption: `📹 *${description}*`
        }, {
            quoted: m
        });

        await Draxo.sendMessage(m.chat, {
            audio: await fetch(audioUrl),
            mimetype: 'audio/mpeg'
        }, {
            quoted: m
        });

    } catch (e) {
        console.error(e);
        await m.reply("Terjadi kesalahan saat mengambil video dari TikTok.");
    }
}
break;

//================= { MENU } =================\\

//================= { MENU } =================\\

//================= { MENU } =================\\
case 'public': {
    if (!isOwner) return;
    Draxo.sendMessage(m.chat, {
        react: {
            text: `${randomemoji}`,
            key: m.key
        }
    });
    Draxo.public = true;
    m.reply('succes');
    break;
}

case 'self': {
    if (!isOwner) return;
    Draxo.sendMessage(m.chat, {
        react: {
            text: `${randomemoji}`,
            key: m.key
        }
    });
    Draxo.public = false;
    m.reply('succes');
    break;
}

//================= { WARNING } =================\\
    default:
        if (budy.startsWith('=>')) {
            if (!isOwner) return;
            function Return(sul) {
                sat = JSON.stringify(sul, null, 2);
                bang = util.format(sat);
                if (sat == undefined) {
                    bang = util.format(sul);
                }
                return m.reply(bang);
            }
            try {
                m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)));
            } catch (e) {
                m.reply(String(e));
            }
        }

        if (budy.startsWith('>')) {
            if (!isOwner) return;
            try {
                let evaled = await eval(budy.slice(2));
                if (typeof evaled !== 'string') evaled = require('util').inspect(evaled);
                await m.reply(evaled);
            } catch (err) {
                await m.reply(String(err));
            }
        }

        if (budy.startsWith('$')) {
            if (!isOwner) return;
            require("child_process").exec(budy.slice(2), (err, stdout) => {
                if (err) return m.reply(`${err}`);
                if (stdout) return m.reply(stdout);
            });
        }
}
    } catch (err) {
        const errId = `${global.ownNumb}@s.whatsapp.net`
        Draxo.sendMessage(errId, {
            text: require('util').format(err)
        }, {
            quoted: m
        })
        console.log('\x1b[1;31m' + err + '\x1b[0m')
    }
}

//================= { FILE WATCHER } =================\\
let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
    require('fs').unwatchFile(file)
    console.log('\x1b[0;32m' + __filename + ' \x1b[1;32mupdated!\x1b[0m')
    delete require.cache[file]
    require(file)
})