/*
_  ______   _____ _____ _____ _   _
| |/ / ___| |_   _| ____/___ | | | |
| ' / |  _    | | |  _|| |   | |_| |
| . \ |_| |   | | | |__| |___|  _  |
|_|\_\____|   |_| |_____\____|_| |_|

ANYWAY, YOU MUST GIVE CREDIT TO MY CODE WHEN COPY IT
CONTACT ME HERE +237656520674
YT: KermHackTools
Github: Kgtech-cmr
*/

const config = require('../config')
const {cmd , commands} = require('../command')
const os = require("os")
const {runtime} = require('../lib/functions')
const axios = require('axios')

cmd({

    pattern: "menu",

    react: "📑",

    desc: "Get bot command list.",

    category: "main",

    use: '.menu',

    filename: __filename

},

async(conn, mek, m,{from, l, quoted, body, isCmd, umarmd, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {

try{
let madeMenu = `*╭══〘〘 ${config.BOT_NAME} 〙〙*
*┃♻️* *ʀᴜɴᴛɪᴍᴇ* : ${runtime(process.uptime())}
*┃♻️* *ᴍᴏᴅᴇ* : *${config.MODE}*
*┃♻️* *ᴘʀᴇғɪx* : *${config.PREFIX}*
*┃♻️* *ʀᴀᴍ ᴜsᴇ* : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
*┃♻️* *ɴᴀᴍᴇ ʙᴏᴛ* : *❖『𝗙𝗜𝗫𝗢-𝗫𝗠𝗗 𝗩1』❖*
*┃♻️* *ᴄʀᴇᴀᴛᴏʀ* : *REAL FIXO*
*┃♻️* *ᴀʟᴡᴀʏs ᴏɴʟɪɴᴇ* : *${config.ALWAYS_ONLINE}*
*┃♻️* *ᴠᴇʀsɪᴏɴs* : *4.2.1*
*╰═════════════════⊷*
  ⚙FIXO-XMD⚙
 *♡︎•━━━━━━☻︎━━━━━━•♡︎*
*╭────❒⁠⁠⁠⁠* *📥 𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗𝗘𝗥-𝗙𝗜𝗫𝗢 📥* *❒⁠⁠⁠⁠* 
*├♻️* *.ғʙ*
*├♻️* *.ɪɴꜱᴛᴀ*
*├♻️* *.ᴠɪᴅᴇᴏ*
*├♻️* *.ɢᴅʀɪᴠᴇ*
*├♻️* *.ᴛᴡɪᴛᴛᴇʀ*
*├♻️* *.ᴛᴛ*
*├♻️* *.ᴍᴇᴅɪᴀғɪʀᴇ*
*├♻️* *.ᴘʟᴀʏ*
*├♻️* *.sᴏɴɢ*
*├♻️* *.ᴠɪᴅᴇᴏ*
*├♻️* *.sᴘᴏᴛɪꜰʏ*
*├♻️* *.ᴠɪᴅᴇᴏ4*
*├♻️* *.ɪᴍɢ*
*├♻️* *.Lʏʀɪᴄs*
*├♻️* *.ᴀᴘᴋ*
*├♻️* *.ʙᴀɪsᴄᴏᴘᴇ*
*├♻️* *.ɢɪɴɪsɪsɪʟᴀ*
*┕──────────────❒*
*╭────❒⁠⁠⁠⁠* *🏮𝗘𝗠𝗣𝗜𝗥𝗘 𝗙𝗜𝗫𝗢🏮* *❒⁠⁠⁠⁠* 
*├♻️* *.Fᴀᴍɪʟʏ*
*├♻️* *.Vᴀᴡᴜʟᴇɴᴄᴇ*
*├♻️* *.ᴄʜᴀɴɴᴇʟ*
*├♻️* *.sᴜᴘᴘᴏʀᴛ*
*├♻️* *.ᴇxᴏʀ*
*┕──────────────❒*
*╭────❒⁠⁠⁠⁠* *🔎 𝗦𝗘𝗔𝗥𝗖𝗛-𝗙𝗜𝗫𝗢 🔍* *❒⁠⁠⁠⁠* 
*├♻️* *.ʏᴛꜱ*
*├♻️* *.ʏᴛᴀ*
*├♻️* *.ᴍᴏᴠɪᴇɪɴғᴏ*
*├♻️* *.ᴍᴏᴠɪᴇ*
*├♻️* *.Gᴏᴏɢʟᴇ*
*├♻️* *.ᴡᴇᴀᴛʜᴇʀ*
*├♻️* *.sᴛɪᴄᴋsᴇᴀʀᴄʜ*
*┕──────────────❒*
*╭────❒⁠⁠⁠⁠* *🎮 𝗚𝗔𝗠𝗘-𝗙𝗜𝗫𝗢 🎮* *❒⁠⁠⁠⁠* 
*├♻️* *.ɴᴜᴍʙᴇʀɢᴀᴍᴇ*
*├♻️* *.ʀᴏʟʟ🎲*
*├♻️* *.ᴄᴏɪɴꜰʟɪᴘ🪙*
*├♻️* *.pick*
*├♻️* *.ᴋᴏɴᴀᴍɪ*
*┕──────────────❒*
*╭────❒⁠⁠⁠⁠* *🔞 𝗡𝗦𝗙𝗪-𝗙𝗜𝗫𝗢 🔞* *❒⁠⁠⁠⁠* 
*├♻️* *.ɴsꜰᴡ*
*├♻️* *.Eᴊᴀᴄᴜʟᴀᴛɪᴏɴ*
*├♻️* *.ᴘᴇɴɪs*
*├♻️* *.ᴇʀᴇᴄ*
*├♻️* *.ɴᴜᴅᴇ*
*├♻️* *.sᴇx*
*├♻️* *.ᴄᴜᴛᴇ*
*├♻️* *.ᴏʀɢᴀsᴍ*
*├♻️* *.ᴀɴᴀʟ*
*├♻️* *.sᴜsᴘᴇɴsɪᴏɴ*
*├♻️* *.ᴋɪss*
*┕──────────────❒*
*╭────❒⁠⁠⁠⁠* *🧠 𝗔𝗜-𝗥𝗘𝗔𝗟 𝗙𝗜𝗫𝗢 🧠* *❒⁠⁠⁠⁠* 
*├♻️* *.ɢᴘᴛ*
*├♻️* *.ᴀɪ*
*├♻️* *.ᴀɴᴀʟʏsᴇ*
*├♻️* *.ʟʟᴀᴍᴀ3*
*┕──────────────❒*
*╭────❒⁠⁠⁠⁠* *👨‍💻 𝗢𝗪𝗡𝗘𝗥-𝗙𝗜𝗫𝗢 👨‍💻* *❒⁠⁠⁠⁠* 
*├♻️* *.ᴜᴘᴅᴀᴛᴇᴄᴍᴅ*
*├♻️* *.sᴇᴛᴛɪɴɢs*
*├♻️* *.ᴏᴡɴᴇʀ*
*├♻️* *.ʀᴇᴘᴏ*
*├♻️* *.ꜱʏꜱᴛᴇᴍ*
*├♻️* *.ꜱᴛᴀᴛᴜꜱ*
*├♻️* *.Aʙᴏᴜᴛ*
*├♻️* *.ʙʟᴏᴄᴋ*
*├♻️* *.ᴇᴠᴀʟ*
*├♻️* *.ᴜɴʙʟᴏᴄᴋ*
*├♻️* *.sʜᴜᴛᴅᴏᴡɴ*
*├♻️* *.ᴄʟᴇᴀʀᴄʜᴀᴛs*
*├♻️* *.sᴇᴛᴘᴘ*
*├♻️* *.ʙʀᴏᴀᴅᴄᴀsᴛ*
*├♻️* *.ᴊɪᴅ*
*├♻️* *.ɢᴊɪᴅ*
*├♻️* *.ᴘᴀɪʀ*
*├♻️* *.sᴀᴠᴇ*
*├♻️* *.ᴄᴀʟᴄ*
*├♻️* *.ʀᴇꜱᴛᴀʀᴛ*
*├♻️* *.𝘀𝗲𝘁𝘀𝘂𝗱𝗼*
*┕───────────────❒*
*╭────❒⁠⁠⁠⁠* *👥 𝗚𝗥𝗢𝗨𝗣-𝗙𝗜𝗫𝗢 👥* *❒⁠⁠⁠⁠* 
*├♻️* *.ʀᴇᴍᴏᴠᴇ*
*├♻️* *.ᴅᴇʟ*
*├♻️* *.ᴀᴅᴅ*
*├♻️* *.ᴋɪᴄᴋ*
*├♻️* *.ᴋɪᴄᴋᴀʟʟ*
*├♻️* *.sᴇᴛɢᴏᴏᴅʙʏᴇ*
*├♻️* *.sᴇᴛᴡᴇʟᴄᴏᴍᴇ*
*├♻️* *.ᴘʀᴏᴍᴏᴛᴇ*
*├♻️* *.ᴅᴇᴍᴏᴛᴇ*
*├♻️* *.ᴛᴀɢᴀʟʟ*
*├♻️* *.ɢᴇᴛᴘɪᴄ*
*├♻️* *.ɪɴᴠɪᴛᴇ*
*├♻️* *.ʀᴇᴠᴏᴋᴇ*
*├♻️* *.ᴘᴏʟʟ*
*├♻️* *.ʀᴀɴᴅᴏᴍsʜɪᴘ*
*├♻️* *.ɴᴇᴡɢᴄ*
*├♻️* *.ᴊᴏɪɴʀᴇǫᴜᴇsᴛs*
*├♻️* *.ᴀʟʟʀᴇǫ*
*├♻️* *.ᴍᴜᴛᴇ*
*├♻️* *.ᴜɴᴍᴜᴛᴇ*
*├♻️* *.ʟᴏᴄᴋɢᴄ*
*├♻️* *.ᴜɴʟᴏᴄᴋɢᴄ*
*├♻️* *.ʟᴇᴀᴠᴇ*
*├♻️* *.ɢɴᴀᴍᴇ*
*├♻️* *.ɢᴅᴇsᴄ*
*├♻️* *.ᴊᴏɪɴ*
*├♻️* *.ʜɪᴅᴇᴛᴀɢ*
*├♻️* *.ɢɪɴғᴏ*
*├♻️* *.ᴇᴘʜᴇᴍᴇʀᴀʟ ᴏɴ*
*├♻️* *.ᴇᴘʜᴇᴍᴇʀᴀʟ ᴏғғ*
*├♻️* *.ᴇᴘʜᴇᴍᴇʀᴀʟ 7ᴅ 24ʜ 90ᴅ*
*├♻️* *.sᴇɴᴅᴅᴍ*
*┕──────────────❒*
*╭────❒⁠⁠⁠⁠* *📃 𝗜𝗡𝗙𝗢-𝗙𝗜𝗫𝗢 📃* *❒⁠⁠⁠⁠* 
*├♻️* *.ᴀʙᴏᴜᴛ*
*├♻️* *.Dᴇᴠ*
*├♻️* *.ᴋɢᴛᴇᴄʜ*
*├♻️* *.ᴀʟɪᴠᴇ*
*├♻️* *.ʀᴇǫᴜᴇsᴛ*
*├♻️* *.ʙᴏᴛɪɴꜰᴏ*
*├♻️* *.ꜱᴛᴀᴛᴜꜱ*
*├♻️* *.ᴘɪɴɢ*
*├♻️* *.ᴘɪɴɢ2*
*├♻️* *.ꜱʏꜱᴛᴇᴍ*
*┕──────────────❒*
*╭────❒⁠⁠⁠⁠* *✝️ 𝗚𝗢𝗗-𝗙𝗜𝗫𝗢 ✝️* *❒⁠⁠⁠⁠* 
*├♻️* *.ʙɪʙʟᴇ*
*├♻️* *.ʙɪʙʟᴇʟɪsᴛ*
*┕──────────────❒*
*╭────❒⁠⁠⁠⁠* *🤖 𝗕𝗢𝗧-𝗙𝗜𝗫𝗢 🤖* *❒⁠⁠⁠⁠* 
*├♻️* *.ᴠᴇʀsɪᴏɴ*
*├♻️* *.ʀᴇᴘᴏ*
*├♻️* *.ᴍᴇɴᴜ*
*├♻️* *.ᴄʜᴇᴄᴋᴜᴘᴅᴀᴛᴇ*
*├♻️* *.ᴜᴘᴅᴀᴛᴇ*
*├♻️* *.ᴍᴇɴᴜ2*
*├♻️* *.ᴍᴇɴᴜ3*
*├♻️* *.ᴍᴏᴅᴇ*
*├♻️* *.ᴀᴜᴛᴏᴛʏᴘɪɴɢ*
*├♻️* *.ᴀʟᴡᴀʏsᴏɴʟɪɴᴇ*
*├♻️* *.ᴀᴜᴛᴏʀᴇᴄᴏʀᴅɪɴɢ*
*├♻️* *.ᴀᴜᴛᴏʀᴇᴀᴅsᴛᴀᴛᴜs*
*├♻️* *.ᴀɴᴛɪʙᴀᴅ*
*├♻️* *.ᴀᴜᴛᴏsᴛɪᴄᴋᴇʀ*
*├♻️* *.ᴀᴜᴛᴏʀᴇᴘʟʏ*
*├♻️* *.ᴀᴜᴛᴏʀᴇᴀᴄᴛ*
*├♻️* *.ᴀɴᴛɪʟɪɴᴋ*
*┕──────────────❒*
*╭────❒⁠⁠⁠⁠* *🎡 𝗖𝗢𝗡𝗩𝗘𝗥𝗧𝗘𝗥-𝗙𝗜𝗫𝗢 🎡* *❒⁠⁠⁠⁠* 
*├♻️* *.sᴛɪᴄᴋᴇʀ*
*├♻️* *.ᴛᴀᴋᴇ*
*├♻️* *.ᴛʀᴛ*
*├♻️* *.ᴛᴛs*
*├♻️* *.ꜰᴀɴᴄʏ*
*├♻️* *.ᴜʀʟ*
*├♻️* *.sᴇɴᴅɪᴍᴀɢᴇ*
*├♻️* *.Aɢᴇ*
*├♻️* *.Cᴏɴᴠᴇʀᴛ*
*├♻️* *.ᴛɪɴʏ*
*├♻️* *.ᴛɢs*
*┕─────────────❒*
*╭────❒⁠⁠⁠⁠* *⛱️ 𝗥𝗔𝗡𝗗𝗢𝗢𝗠-𝗙𝗜𝗫𝗢 ⛱️* *❒⁠⁠⁠⁠* 
*├♻️* *.ᴋᴇʀᴍ*
*├♻️* *.ᴅᴏɢ*
*├♻️* *.ᴄᴀᴛ*
*├♻️* *.ᴅɪᴀʀʏ*
*├♻️* *.ᴀɴɪᴍᴇ*
*├♻️* *.ᴄᴏᴜᴘʟᴇᴘᴘ*
*├♻️* *.ꜰɪɴᴅɴᴀᴍᴇ*
*├♻️* *.ʟᴏʟɪ*
*├♻️* *.ᴡᴀɪꜰᴜ*
*├♻️* *.ᴄᴏsᴘʟᴀʏ*
*├♻️* *.ɴᴇᴋᴏ*
*├♻️* *.ʀᴀɴᴅᴏᴍᴀɴɪᴍᴇ*
*├♻️* *.Sᴇɴᴅɪᴍᴀɢᴇ*
*├♻️* *.ᴀɴɪᴍᴇɢɪʀʟ*
*├♻️* *.ᴀɴɪᴍᴇɢɪʀʟ1*
*├♻️* *.ᴀɴɪᴍᴇɢɪʀʟ2*
*├♻️* *.ᴀɴɪᴍᴇɢɪʀʟ3*
*├♻️* *.ᴀɴɪᴍᴇɢɪʀʟ4*
*├♻️* *.ᴀɴɪᴍᴇɢɪʀʟ5*
*├♻️* *.ᴘɪᴄᴋᴜᴘʟɪɴᴇ*
*┕──────────────❒*
*╭────❒⁠⁠⁠⁠* *🏜️ 𝗪𝗔𝗟𝗟𝗣𝗔𝗣𝗘𝗥𝗦-𝗙𝗜𝗫𝗢 🏜️* *❒⁠⁠⁠⁠* 
*├♻️* *.ɪᴍɢ*
*├♻️* *.ʟᴏɢᴏ*
*├♻️* *.ss*
*┕──────────────❒*
*╭────❒⁠⁠⁠⁠* *🌐 𝗢𝗧𝗛𝗘𝗥-𝗙𝗜𝗫𝗢 🌐* *❒⁠⁠⁠⁠* 
*├♻️* *.ᴛʀᴛ*
*├♻️* *.ᴊᴏᴋᴇ*
*├♻️* *.ꜰᴀᴄᴛ*
*├♻️* *.ɢɪᴛʜᴜʙ*
*├♻️* *.ɢᴘᴀꜱꜱ*
*├♻️* *.ʜᴀᴄᴋ*
*├♻️* *.ǫᴜᴏᴛᴇ*
*├♻️* *.ǫʀ*
*├♻️* *.vv*
*├♻️* *.sᴘᴀᴍ*
*├♻️* *.ᴠᴄᴀʀᴅ*
*├♻️* *.ꜱʀᴇᴘᴏ*
*├♻️* *.sʏsᴛᴇᴍ*
*├♻️* *.ʀᴀɴᴋ*
*├♻️* *.Tɪᴍᴇᴢᴏɴᴇ*
*├♻️* *.ᴅᴇꜰɪɴᴇ*
*├♻️* *.Dᴀɪʟʏꜰᴀᴄᴛ*
*├♻️* *.Mɪɴᴜᴛᴏʀ*
*┕─────────────❒*
`

await conn.sendMessage(from,{image:{url:config.ALIVE_IMG},caption:madeMenu,
                          contextInfo: {
    mentionedJid: [m.sender],
    forwardingScore: 999,
    isForwarded: true,
    forwardedNewsletterMessageInfo: {
      newsletterJid: '120363414256474114@newsletter',
      newsletterName: '𝗙𝗜𝗫𝗢-𝗫𝗠𝗗 1𝗩',
      serverMessageId: 999
    }
  }
}, { quoted: mek });
}catch(e){
console.log(e)
reply(`${e}`)
}
})
