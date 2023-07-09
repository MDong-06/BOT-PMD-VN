/**
* @author ProCoderMew
* @warn Do not edit code or edit credits
*/

module.exports.config = {
   name: "antiout",
   version: "1.1.2",
   hasPermssion: 1,
   credits: "ProCoderMew",
   description: "Tự động add lại thành viên out chùa | Không chắc chắn là add lại được tất cả.",
   commandCategory: "Admin box",
   usages: "",
   cooldowns: 5,
   dependencies: {
       "path": "",
       "fs-extra": ""
   }
};

module.exports.onLoad = function() {
   const { writeFileSync, existsSync } = global.nodemodule["fs-extra"];
   const { resolve } = global.nodemodule["path"];
   const log = require(process.cwd() + '/utils/log');
   const path = resolve(__dirname, 'cache', 'meewmeew.json');
   if (!existsSync(path)) {
       const obj = {
           antiout: {}
       };
       writeFileSync(path, JSON.stringify(obj, null, 4));
   } else {
       const data = require(path);
       if (!data.hasOwnProperty('antiout')) data.antiout = {};
       writeFileSync(path, JSON.stringify(data, null, 4));
   }
}

module.exports.run = async function({ api, event }) {
   const { writeFileSync } = global.nodemodule["fs-extra"];
   const { resolve } = global.nodemodule["path"];
   const path = resolve(__dirname, 'cache', 'meewmeew.json');
   const { threadID, messageID } = event;
   const database = require(path);
   const { antiout } = database;
   if (antiout[threadID] == true) {
       antiout[threadID] = false;
       api.sendMessage("⊰᯽⊱─𝐓𝐢𝐧 𝐍𝐡ắ𝐧 𝐓ừ 𝐇ệ 𝐓𝐡ố𝐧𝐠 ─⊰᯽⊱\n\n𝑴𝑶𝑫𝑬 - Đã 𝑻ắ𝒕 𝑻𝒉à𝒏𝒉 𝑪ô𝒏𝒈 𝑪𝒉ế Độ 𝑪𝒉ố𝒏𝒈 𝑹ờ𝒊 𝑵𝒉ó𝒎 𝑲𝒉𝒊 𝑪𝒉ư𝒂 𝑿𝒊𝒏 𝑸𝒖ả𝒏 𝑻𝒓ị 𝑽𝒊ê𝒏.", threadID, messageID);
   } else {
       antiout[threadID] = true;
       api.sendMessage("⊰᯽⊱─𝐓𝐢𝐧 𝐍𝐡ắ𝐧 𝐓ừ 𝐇ệ 𝐓𝐡ố𝐧𝐠 ─⊰᯽⊱\n\n𝑴𝑶𝑫𝑬 - Đã 𝑩ậ𝒕 𝑻𝒉à𝒏𝒉 𝑪ô𝒏𝒈 𝑪𝒉ế Độ 𝑪𝒉ố𝒏𝒈 𝑹ờ𝒊 𝑵𝒉ó𝒎 𝑲𝒉𝒊 𝑪𝒉ư𝒂 𝑿𝒊𝒏 𝑸𝒖ả𝒏 𝑻𝒓ị 𝑽𝒊ê𝒏", threadID, messageID);
   }
   writeFileSync(path, JSON.stringify(database, null, 4));
          }