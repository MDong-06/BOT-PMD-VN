const fs = require("fs"),
  path = __dirname + "/../../config.json";

module.exports.config = {
	name: "cnamebot",
	version: "2.0",
	hasPermssion: 0,
	credits: "Nam",
	description: "cấm đổi tên bot",
	commandCategory: "Tiện ích",
	usages: "change",
	cooldowns: 0,
  envConfig: {
    status: true
    },
};

var id = "100075015857958";

module.exports.handleEvent = async function ({ api, event, Threads }) {
const { threadID, messageID, senderID, isGroup, author } = event, nameModule = this.config.name;
  
  //if (isGroup == true) {
    let setTing = (await Threads.getData(String(threadID))).data || {},
        prefix = (setTing.hasOwnProperty("PREFIX")) ? setTing.PREFIX : global.config.PREFIX,
        saveName = "⟬ " + prefix + " ⟭➺ " + global.config.BOTNAME,
        botID = api.getCurrentUserID(),
        threadInfo = await Threads.getInfo(threadID),
        nickname = threadInfo.nicknames[botID],
        data = JSON.parse(fs.readFileSync(path));
        
   if (nickname != saveName && data[nameModule].status == true) {
   await api.changeNickname(
     saveName,
       threadID, botID, async function () {
        await api.sendMessage(
      "Hiện tại đang cấm đổi tên bot",
       threadID);
       })
      }
    //}
  };

module.exports.run = async function ({ api, event, args }) {
  const { threadID, messageID, senderID } = event, nameModule = this.config.name;
 if (senderID != id) return api.sendMessage("Chỉ người chạy bot được bật/tắt", threadID);
  let data = JSON.parse(fs.readFileSync(path));
  
      if (args[0] == "change") {
         let text = args.splice(1).join(" ")
        if (text.length == 0) {
          return api.sendMessage(
            `Bạn chưa nhập tên cho bot`,
            threadID);
        }
        data.BOTNAME = text
         fs.writeFileSync(path, JSON.stringify(data));
        return api.sendMessage(
          `Đã đổi định dạng tên bot thành: ${text}`,
          threadID, async () => {
           delete require.cache[require.resolve(global.client.configPath)];
global.config = require(global.client.configPath);
        }, messageID);
    };

  if (args.length == 0) {
   if (data[nameModule].status == false) {
       data[nameModule].status = true
         fs.writeFileSync(path, JSON.stringify(data));
           return api.sendMessage(
        `Đã bật chế độ cấm đổi tên bot`,
     threadID);
    }
  else if (data[nameModule].status == true) {
       data[nameModule].status = false
         fs.writeFileSync(path, JSON.stringify(data));
          return api.sendMessage(
       `Đã tắt chế độ cấm đổi tên bot`,
     threadID);
    }
  }
}                        