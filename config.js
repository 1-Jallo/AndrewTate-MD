const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/68ab85fe183de156be48a.jpg" || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "Suhail²²¹-X-Whatsapp bot Beta!" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "2349075777999";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349157332004;




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/9dcef2b49909742db8dbd.jpg" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "composing" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_13_39_08_29_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDM4LFxuICAgICAgICAxMDcsXG4gICAgICAgIDgwLFxuICAgICAgICA0MyxcbiAgICAgICAgMTMsXG4gICAgICAgIDIwLFxuICAgICAgICA0MyxcbiAgICAgICAgMjgsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMjQsXG4gICAgICAgIDMyLFxuICAgICAgICAyMTAsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTA5LFxuICAgICAgICA3LFxuICAgICAgICAyMzgsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTI1LFxuICAgICAgICA3NyxcbiAgICAgICAgMjEzLFxuICAgICAgICAxOTUsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTYxLFxuICAgICAgICA2NyxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNzIsXG4gICAgICAgIDM0LFxuICAgICAgICA0LFxuICAgICAgICA1MixcbiAgICAgICAgMTI2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ1LFxuICAgICAgICAxNzIsXG4gICAgICAgIDUsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTEzLFxuICAgICAgICA0MixcbiAgICAgICAgMjMxLFxuICAgICAgICAyMzUsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTA2LFxuICAgICAgICA4OSxcbiAgICAgICAgODUsXG4gICAgICAgIDIyMCxcbiAgICAgICAgODMsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTY4LFxuICAgICAgICAyMjEsXG4gICAgICAgIDcyLFxuICAgICAgICAxOTIsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNzgsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTg2LFxuICAgICAgICAzLFxuICAgICAgICA3OCxcbiAgICAgICAgMzUsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjksXG4gICAgICAgIDExOCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxLFxuICAgICAgICA4M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE0MixcbiAgICAgICAgNTQsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjAzLFxuICAgICAgICAxMTUsXG4gICAgICAgIDIxNSxcbiAgICAgICAgODMsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTIyLFxuICAgICAgICAyMDMsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjIwLFxuICAgICAgICAyMjksXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTUzLFxuICAgICAgICAyNDksXG4gICAgICAgIDE0MCxcbiAgICAgICAgNTEsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMTksXG4gICAgICAgIDk5LFxuICAgICAgICAxODIsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjUsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMyxcbiAgICAgICAgMTcxLFxuICAgICAgICAxNDgsXG4gICAgICAgIDkzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDM4LFxuICAgICAgICAzOCxcbiAgICAgICAgNSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxOTUsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMTgsXG4gICAgICAgIDgyLFxuICAgICAgICAxNyxcbiAgICAgICAgMTM0LFxuICAgICAgICAyNDYsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMDgsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTk4LFxuICAgICAgICAyNyxcbiAgICAgICAgNjAsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTU5LFxuICAgICAgICA1NyxcbiAgICAgICAgMTIxLFxuICAgICAgICA0LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE5MixcbiAgICAgICAgOTUsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTk5LFxuICAgICAgICA2NixcbiAgICAgICAgMjUwLFxuICAgICAgICA4NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMixcbiAgICAgICAgMTA2LFxuICAgICAgICAxODgsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTEwLFxuICAgICAgICA2MixcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMzcsXG4gICAgICAgIDExNixcbiAgICAgICAgMTA0LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTQ5LFxuICAgICAgICA2NSxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMjYsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjM2LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE5LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxOTAsXG4gICAgICAgIDQyLFxuICAgICAgICAxMDgsXG4gICAgICAgIDM5LFxuICAgICAgICAxMzgsXG4gICAgICAgIDkwLFxuICAgICAgICAxNDQsXG4gICAgICAgIDcxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTU0LFxuICAgICAgICAyNixcbiAgICAgICAgODksXG4gICAgICAgIDcwLFxuICAgICAgICAxOSxcbiAgICAgICAgNTgsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjUzLFxuICAgICAgICAyNTAsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTczLFxuICAgICAgICAxMDIsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTUxLFxuICAgICAgICA3MCxcbiAgICAgICAgOTYsXG4gICAgICAgIDIyNixcbiAgICAgICAgODYsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTQwLFxuICAgICAgICAzNCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNSxcbiAgICAgICAgOTgsXG4gICAgICAgIDU4LFxuICAgICAgICA2NSxcbiAgICAgICAgMTU3LFxuICAgICAgICAyNyxcbiAgICAgICAgMjA5LFxuICAgICAgICAyNTQsXG4gICAgICAgIDk3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDY0LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAyNixcbiAgICAgICAgICA4MixcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMCxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICA5MlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NSxcbiAgICAgICAgMjQwLFxuICAgICAgICA5MyxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNyxcbiAgICAgICAgNyxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMTMsXG4gICAgICAgIDUzLFxuICAgICAgICAxNixcbiAgICAgICAgMTYwLFxuICAgICAgICAxNTgsXG4gICAgICAgIDI0NCxcbiAgICAgICAgODgsXG4gICAgICAgIDk5LFxuICAgICAgICAyNTMsXG4gICAgICAgIDExNSxcbiAgICAgICAgOTEsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNjcsXG4gICAgICAgIDQ0LFxuICAgICAgICA1MyxcbiAgICAgICAgMTE1LFxuICAgICAgICA1OCxcbiAgICAgICAgNzgsXG4gICAgICAgIDg3LFxuICAgICAgICAxNjMsXG4gICAgICAgIDEsXG4gICAgICAgIDE4OSxcbiAgICAgICAgODYsXG4gICAgICAgIDUzLFxuICAgICAgICA5NSxcbiAgICAgICAgMTA1LFxuICAgICAgICA0NyxcbiAgICAgICAgMjUzLFxuICAgICAgICAxOTksXG4gICAgICAgIDE4MixcbiAgICAgICAgMjIsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTI4LFxuICAgICAgICAyNSxcbiAgICAgICAgMjQzLFxuICAgICAgICA3NyxcbiAgICAgICAgMjIyLFxuICAgICAgICAxODIsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjMyLFxuICAgICAgICA3OCxcbiAgICAgICAgOTMsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjYsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTY3LFxuICAgICAgICA2OSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxOTQsXG4gICAgICAgIDYzLFxuICAgICAgICAxMjgsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNjcsXG4gICAgICAgIDM5LFxuICAgICAgICAxNzAsXG4gICAgICAgIDZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEwNCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJTditVSGhIUlBrbHFic0FoeElUK3hUcE5OMkVPbzFOcnRvZjdXanEzbjRJPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJuc0N4MGhhOVNrZS1pRGJNZlNyZFFnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjIxMjQyMjIwLTEzMjAtNDE1NS04MzNiLTMyMmNkYmNiOWExNlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxOTUsXG4gICAgICAxNDcsXG4gICAgICA2MixcbiAgICAgIDIzLFxuICAgICAgNTIsXG4gICAgICAxNyxcbiAgICAgIDc4LFxuICAgICAgMTA2LFxuICAgICAgMjUwLFxuICAgICAgNjksXG4gICAgICAxNDgsXG4gICAgICAxMTYsXG4gICAgICAxOTIsXG4gICAgICA3OSxcbiAgICAgIDU3LFxuICAgICAgMzEsXG4gICAgICAxMzIsXG4gICAgICAxODgsXG4gICAgICAyMixcbiAgICAgIDIyM1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMzksXG4gICAgICAzMyxcbiAgICAgIDMxLFxuICAgICAgNDUsXG4gICAgICAxNDQsXG4gICAgICAxMTgsXG4gICAgICAxMjEsXG4gICAgICAxNDUsXG4gICAgICAxMTAsXG4gICAgICAxNTQsXG4gICAgICAwLFxuICAgICAgMTExLFxuICAgICAgNjIsXG4gICAgICAxMzQsXG4gICAgICAxNDQsXG4gICAgICAxMjMsXG4gICAgICAxMjcsXG4gICAgICA1OSxcbiAgICAgIDE0NixcbiAgICAgIDE1NFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI1UDMyQ0xWTlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTE1NzMzMjAwNDo2NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIkpBTExPJ1MgTUVESUFcIixcbiAgICBcImxpZFwiOiBcIjExODYzNjAyMjg3ODQxODo2NkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNJWFJzY3NGRUpYMHdiWUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkt5S2ZjOXc1bSs0YlNsOFdQVlllTWtJTTBSdm1pem1ueGd1VkNVYlhJVWM9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiNUNCbEEzM3E2ay9iZGlpb1Eram1SZG5VQUNPTWQ0S3piNW0vRjlxMTc2b3ordlo0TW1aclFkek5kNlpndnViZVgwcFFnWm13aGg0eVdYb3h6YWJDQ2c9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiVG8vT3NJZ2xJUEk1SnExYWFsSWJxYzdxUm55QTd6ZE14Z0diUHdGYWVJWCtYbkpIbzh2dGpRVnB0b1cvYTNZSDJ2MVFNaXBNTi91NlZjQnFIQlpYQ0E9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTE1NzMzMjAwNDo2NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgOSxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgNzFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyNDkzODc3N1xufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Jallo🍃",
  packname: process.env.PACK_NAME || "Jallo🌹",
  botname : process.env.BOT_NAME  || "Suhail-X-Md",
  ownername:process.env.OWNER_NAME|| "JALLO'S- MEDIA",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
