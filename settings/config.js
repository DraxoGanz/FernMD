const fs = require('fs');

global.d = new Date();
global.calender = d.toLocaleDateString('id');

//================= { SETTINGS } =================\\
global.prefa = ['', '!', '.', ',', '🐤', '🗿'];
global.owner = 'Draxo';
global.email = 'botdraxo@gmail.com';
global.ownNumb = '6288242704508';
global.NamaOwner = 'Draxo';
global.sessionName = 'session';
global.namabot = 'FernMD';
global.author = 'Draxo';
global.packname = 'FernMD';
global.yt = '';

//================= { MASSAGE } =================\\
global.mess = {
    ingroup: 'Fitur ini khusus untuk group',
    owner: 'Fitur ini khusus untuk owner',
    premium: 'You are not a premium user',
    seller: 'Hanya bisa digunakan untuk reseller',
    usingsetpp: 'Hanya bisa digunakan untuk owner',
    wait: 'Tunggu sedang diproses🕙',
    limit: 'Limit kamu telah habis, silahkan tunggu riset 24 jam⏱️'
};

//==================================\\

global.autOwn = 'req(62-8S57547ms11).287p';

//==================================\\

let file = require.resolve(__filename);
fs.watchFile(file, () => {
    fs.unwatchFile(file);
    console.log('\x1b[0;32m' + __filename + ' \x1b[1;32mupdated!\x1b[0m');
    delete require.cache[file];
    require(file);
});

//==================================\\