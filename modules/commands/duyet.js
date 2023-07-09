const apii = 'https://apikanekiflop.tk/gaisexy'
module.exports.config = {
	name: "duyệt",
	version: "1.0.2",
	hasPermssion: 2,
	credits: "DungUwU",
	description: "duyệt box dùng bot xD",
	commandCategory: "quản trị viên",
    cooldowns: 5
};


const dataPath = __dirname + "/cache/approvedThreads.json";
const fs = require("fs");

module.exports.onLoad = () => {
	if (!fs.existsSync(dataPath)) fs.writeFileSync(dataPath, JSON.stringify([]));
}

module.exports.run = async ({ event,Threads, api, args }) => {
	const threadSetting = (await Threads.getData(String(event.threadID))).data || {};
      const prefix = (threadSetting.hasOwnProperty("PREFIX")) ? threadSetting.PREFIX : global.config.PREFIX;
	const { threadID, messageID, senderID } = event;
	let data = JSON.parse(fs.readFileSync(dataPath));
	let msg = "";
    let idBox = (args[0]) ? args[0] : threadID;
    if (args[0] == "list") {
    	msg = "[ 𝗠𝗢𝗗𝗘 ] 𝗗𝗮𝗻𝗵 𝗦á𝗰𝗵 Đã Đượ𝗰 𝗔𝗱𝗺𝗶𝗻 𝗗𝘂𝘆ệ𝘁!";
    	let count = 0;
    	for (e of data) {
    		msg += `\n${count+=1}. ${e}`;
    	}
    	api.sendMessage(msg, threadID, messageID);
    }
    else if (args[0] == "del") {
    	idBox = (args[1]) ? args[1] : event.threadID;
    	if (isNaN(parseInt(idBox))) return api.sendMessage("Không phải một con số", threadID, messageID);
    	if (!data.includes(idBox)) return api.sendMessage("[ 𝗠𝗢𝗗𝗘 ] 𝗕𝗼𝘅 𝗸𝗵ô𝗻𝗴 đượ𝗰 𝗱𝘂𝘆ệ𝘁 𝘁ừ 𝘁𝗿ướ𝗰!", threadID, messageID);
    	api.sendMessage("[ 𝗠𝗢𝗗𝗘 ] 𝗕𝗼𝘅 đã 𝗯ị 𝗴ỡ 𝗸𝗵ỏ𝗶 𝗱𝗮𝗻𝗵 𝘀á𝗰𝗵 đượ𝗰 𝗽𝗵é𝗽 𝗱ù𝗻𝗴 𝗯𝗼𝘁", threadID, () => {
    		data.splice(data.indexOf(idBox), 1);
    		fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
    	}, messageID)
    }
    else if (isNaN(parseInt(idBox))) api.sendMessage("[ 𝗠𝗢𝗗𝗘 ] 𝗜𝗗 𝗕ạ𝗻 𝗡𝗵ậ𝗽 𝗞𝗵ô𝗻𝗴 𝗛ợ𝗽 𝗟ệ", threadID, messageID);
    else if (data.includes(idBox)) api.sendMessage(`[ 𝗠𝗢𝗗𝗘 ] 𝗜𝗗 ${idBox} đã đượ𝗰 𝗽𝗵ê 𝗱𝘂𝘆ệ𝘁 𝘁ừ 𝘁𝗿ướ𝗰!`, threadID, messageID);
   	else api.sendMessage("» [ 𝗠𝗢𝗗𝗘 ] 𝗡𝗵ó𝗺 Đã Đượ𝗰 𝗔𝗱𝗺𝗶𝗻 𝗣𝗵ê 𝗗𝘂𝘆ệ𝘁/n𝗦ử 𝗗ụ𝗻𝗴 𝗕𝗼𝘁 𝗩𝘂𝗶 𝗩ẻ", idBox, (error, info) => {
   		api.changeNickname(` [ ${global.config.PREFIX} ] • ${(!global.config.BOTNAME) ? "" : global.config.BOTNAME}`, idBox, global.data.botID);
      api.sendMessage(`» Kết nối thành công\n ${prefix}help để xem các lệnh hiện có`, idBox);
   		if (error) return api.sendMessage("Đã có lỗi xảy ra, đảm bảo rằng id bạn nhập hợp lệ và bot đang ở trong box!", threadID, messageID);
   		else {
   			data.push(idBox);
   			fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
   			api.sendMessage(`» Phê duyệt thành công box:\n${idBox}`, threadID, messageID);
   		}
   	});
}