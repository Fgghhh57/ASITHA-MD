const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "𝙰𝚂𝙸𝚃𝙷𝙰-𝙼𝙳=7ngilBwQ#OTPYsmSwFoULQ4ISFSRdrfjsxh_hlPymr3EFNp2k5W8",
MONGODB: process.env.MONGODB || "https://downloads.mongodb.com/compass/mongodb-compass-1.44.5-win32-x64.exe",//enter mongo db url හදන විදිය පල්ලෙහාබටන් එකක් ඇති
};
