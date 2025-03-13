const chalk = require('chalk')
const fs = require("fs");
const pendaftar = JSON.parse(fs.readFileSync('./start/lib/database/userNumber.json'))
global.menuu = (prefix, m, pendaftar, command, sender, isCreator, pushname) => {
return `Hii ${pushname}📮 I am a WhatsApp bot that you can use to search for information, download via WhatsApp`}

global.menuowner = (prefix, m, pendaftar, command, sender, isCreator, pushname) => {
return `Hii ${pushname}📮 I am a WhatsApp bot that you can use to search for information, download via WhatsApp.`}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})

