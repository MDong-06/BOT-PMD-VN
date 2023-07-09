module.exports.config = {
  name: "info",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "TuanDz",
  description: "info admin nè",
  commandCategory: "info",
  usages: "ad",
  cooldowns: 5,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
  var link = [
"https://i.imgur.com/NdgDXhR.jpg",
"https://i.imgur.com/BiYJUht.jpg",
"https://i.imgur.com/BjZjRXi.jpg",
"",
"",
"",
"",
  ];
	  var callback = () => api.sendMessage({body:`ㅤㅤ🌸 𝐀𝐃𝐌𝐈𝐍 𝐁𝐎𝐓 🌸\n
👀 𝐓𝐞̂𝐧: 𝗡𝗴𝘂𝘆𝗲𝗻 𝗧𝗿𝗼𝗻𝗴 𝗧𝗶𝗻
❎ 𝐓𝐮𝐨̂̉𝐢: 13+
👤 𝐆𝐢𝐨̛́𝐢 𝐓𝐢́𝐧𝐡: 𝗡𝗮𝗺
💫 𝐂𝐡𝐢𝐞̂̀𝐮 𝐜𝐚𝐨 𝐜𝐚̂𝐧 𝐧𝐚̣̆𝐧𝐠:𝟭𝗺𝟲 𝘅 𝟰𝟮𝗸𝗴
💘 𝐌𝐨̂́𝐢 𝐪𝐮𝐚𝐧 𝐡𝐞̣̂: 𝗬𝗲̂𝘂 𝟭 𝗲𝗺
🌎 𝐐𝐮𝐞̂ 𝐪𝐮𝐚́𝐧: 𝗟𝗼𝗻𝗴 𝗔𝗻
👫 𝐆𝐮: 𝗟𝘂̀𝗻
🌸 𝐓𝐢́𝐧𝐡 𝐜𝐚́𝐜𝐡: 𝗖𝗵𝗼́ 𝗱𝗮̣𝗶
🌀 𝐒𝐨̛̉ 𝐭𝐡𝐢́𝐜𝐡: 𝗖𝗵𝗼̛𝗶 𝗴𝗮𝗺𝗲, 𝘅𝗲𝗺 𝗽𝗵𝗶𝗺 𝟭𝟴+ 𝗯𝗹𝗮𝗯𝗹𝗮, 𝗮̆𝗻, 𝗻𝗴𝘂̉
💻𝐂𝐨𝐧𝐭𝐚𝐜𝐭💻
☎ 𝗦𝗗𝗧 & 𝗭𝗮𝗹𝗼: 𝟬𝟯𝟮𝟵.𝟬𝟯𝟲.𝟰𝟬𝟭
🌐 𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤: https://www.facebook.com/profile.php?id=100075015857958 🌺`,attachment: fs.createReadStream(__dirname + "/cache/5.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/5.jpg")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/5.jpg")).on("close",() => callback());
   };