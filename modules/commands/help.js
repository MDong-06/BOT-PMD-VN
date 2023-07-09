module.exports.config = {
  name: "help",
  version: "1.0.2",
  hasPermssion: 0,
  credits: "Mirai Team",//Mod by H.Thanh
  description: "Hướng dẫn cho người mới",
  commandCategory: "Hệ thống",
  usages: "help",
  cooldowns: 5,
  envConfig: {
    autoUnsend: true,
    delayUnsend: 60
  }
};

module.exports.languages = {
	"vi": {
    "helpList": '◆━━━━━━ 𝘽𝘽𝙊𝙏-𝙏𝙏𝙏-𝘾𝘼𝙍𝙆 ━━━━━━◆\n\n🤖 𝐇𝐢ệ𝐧 𝐭ạ𝐢 đ𝐚𝐧𝐠 𝐜ó %1 𝐥ệ𝐧𝐡 𝐜ó 𝐭𝐡ể 𝐬ử 𝐝ụ𝐧𝐠 𝐭𝐫ê𝐧 𝐛𝐨𝐭 𝗦𝗮𝗻𝗴\n➣「 𝐂á𝐜𝐡 𝐬ử 𝐝ụ𝐧𝐠 」\n𝐇ã𝐲 𝐧𝐡ấ𝐧 "%2help + tên lệnh" để 𝐛𝐭 𝐭𝐡ê𝐦 𝐜𝐡𝐢 𝐭𝐢ế𝐭!\n➣「 𝐋𝐢ê𝐧 𝐇ệ 𝗙𝗕 𝗔𝗱𝗺𝗶𝗻 」https://www.facebook.com/trieutaitanprofile 𝐍ế𝐮 𝐜ầ𝐧 𝐡ỗ 𝐭𝐫ợ\n➣ Đọ𝐜 đ𝐢ề𝐮 𝐤𝐡𝐨ả𝐧 𝐜ủ𝐚 𝐁𝐎𝐓 để 𝐭𝐫á𝐧𝐡 𝐛ị 𝐛𝐚𝐧!\n➣ 𝙃𝙀𝙇𝙋 𝐭ự độ𝐧𝐠 𝐠ỡ 𝐬𝐚𝐮 𝟲𝟬𝘀\n\n◆━𝗧𝗵𝗮𝗻𝗸𝘀 𝗔𝗹𝗹 𝗨𝘄𝗨━◆\n',
		"moduleInfo": "🤖 𝗟ệ𝐧𝐡「 %1 」\n• 𝐌ô 𝐭ả: %2\n\n➣ 𝐂á𝐜𝐡 𝐬ử 𝐝ụ𝐧𝐠: %3\n➣ 𝐓𝐡𝐮ộ𝐜 𝐍𝐡ó𝐦: %4\n➣ 𝐓𝐡ờ𝐢 𝐠𝐢𝐚𝐧 𝐜𝐡ờ: %5 𝗴𝗶𝗮̂𝘆 \n➣ 𝐐𝐮𝐲ề𝐧 𝐡ạ𝐧: %6\n\n◆━━━━━━ 𝑱𝒂𝒚-𝑩𝒐𝒕 ━━━━━━◆\n",
		"user": "𝗡𝗴𝘂̛𝗼̛̀𝗶 𝗱𝘂̀𝗻𝗴",
        "adminGroup": "𝗤𝘂𝗮̉𝗻 𝘁𝗿𝗶̣ 𝘃𝗶𝗲̂𝗻 𝗻𝗵𝗼́𝗺",
    "supportAdmin": "𝗡𝗴𝘂̛𝗼̛̀𝗶 𝗵𝗼̂̃ 𝘁𝗿𝗼̛̣",
        "adminBot": "𝗤𝘂𝗮̉𝗻 𝘁𝗿𝗶̣ 𝘃𝗶𝗲̂𝗻 𝗕𝗼𝘁"
	},
	"en": {
		"moduleInfo": "「 %1 」\n%2\n\n❯ Usage: %3\n❯ Category: %4\n❯ Waiting time: %5 seconds(s)\n❯ Permission: %6\n\n» Module code by %7 «",
		"helpList": '[ There are %1 commands on this bot, Use: "%2help nameCommand" to know how to use! ]',
		"user": "User",
        "adminGroup": "Admin group",
        "adminBot": "Admin bot"
	}
};

module.exports.handleEvent = function ({ api, event, getText }) {
  const fs = require("fs-extra");
	const { commands } = global.client;
	const { threadID, messageID, body } = event;
	const folderimg = __dirname + "/cache/randomimg";
	if (!fs.existsSync(folderimg)) fs.mkdir(folderimg);
	const listImg = fs.readdirSync(folderimg);
	
	if (!body || typeof body == "undefined" || body.indexOf("help") != 0) return;
	const splitBody = body.slice(body.indexOf("help")).trim().split(/\s+/);
	if (splitBody.length == 1 || !commands.has(splitBody[1].toLowerCase())) return;
	const threadSetting = global.data.threadData.get(parseInt(threadID)) || {};
	const prefix = (threadSetting.hasOwnProperty("PREFIX")) ? threadSetting.PREFIX : global.config.PREFIX;
  return api.sendMessage(getText("moduleInfo", command.config.name, command.config.description, `${prefix}${command.config.name} ${(command.config.usages) ? command.config.usages : ""}`, command.config.commandCategory, command.config.cooldowns, ((command.config.hasPermssion == 0) ? getText("user") : (command.config.hasPermssion == 1) ? getText("adminGroup") : getText("adminBot")), command.config.credits), threadID, messageID);
}

module.exports.run = function({ api, event, args, getText }) {
  const fs = require("fs-extra");
	const { commands } = global.client;
	const { threadID, messageID } = event;
	const command = commands.get((args[0] || "").toLowerCase());
	const folderimg = __dirname + "/cache/randomimg";
	if (!fs.existsSync(folderimg)) fs.mkdir(folderimg);
	const listImg = fs.readdirSync(folderimg);
	const threadSetting = global.data.threadData.get(parseInt(threadID)) || {};
	const { autoUnsend, delayUnsend } = global.configModule[this.config.name];
	const prefix = (threadSetting.hasOwnProperty("PREFIX")) ? threadSetting.PREFIX : global.config.PREFIX;
  if (!command) {
		const command = commands.values();
		var group = [], msg = "◆━━ 𝙃𝙀𝙇𝙋 𝘽𝙊𝙏 ━━◆\n\n";
		for (const commandConfig of command) {
			if (!group.some(item => item.group.toLowerCase() == commandConfig.config.commandCategory.toLowerCase())) group.push({ group: commandConfig.config.commandCategory.toLowerCase(), cmds: [commandConfig.config.name] });
			else group.find(item => item.group.toLowerCase() == commandConfig.config.commandCategory.toLowerCase()).cmds.push(commandConfig.config.name);
		}
    
		group.forEach(commandGroup => msg += `➣ 𝐓𝐡𝐮ộ𝐜 𝐍𝐡ó𝐦: ${commandGroup.group.charAt(0).toUpperCase() + commandGroup.group.slice(1)}\n𝙇ệ𝙣𝙝 𝙗𝙖𝙤 𝙜ồ𝙢 : ${commandGroup.cmds.join(' • ')}\n\n`);

    const gai = ["Em có thể đi theo anh được không? Bởi vì em luôn được cha mẹ bảo là phải theo giấc mơ của mình.",
        "Em có biết rằng anh nhớ em nhiều lắm không? Anh ăn không ngon nhưng ngủ như điên, anh đi giầy quên đi tất, ăn sáng quên đánh răng, anh dùng xăng vo gạo, anh khờ khạo cũng chỉ vì yêu em đó.",

        "Em ơi! Em là nghề gì đấy….? Sao đêm nào em cũng hiện lên trong giấc mơ của anh vậy? Anh chẳng biết làm thế nào nữa cả. Làm người yêu anh em nhé!.",

        "Em ơi ! Khi em đọc tin nhắn này, em nợ anh cuộc hẹn. Xóa tin nhắn này, em nợ anh cuộc tình. Lưu tin là em nợ anh 1 nụ hôn. Trả lời anh, em nợ anh tất cả. Còn nếu em không trả lời thì em đã yêu anh !!! hihi.",

        "Ðiều duy nhất đôi mắt em chưa nói cho anh biết là tên của em.",
                  
        "Anh thà được một lần ngửi được mùi tóc thơm của em. Anh thà được mộ lần xiết chặt bàn tay của em, anh thà được một lần nếm hương vị ngọt từ nụ hôn của em còn hơn là sống bất tử mà không được điều ấy.",
                  
        "Chứng nghiện thức đêm cùng nỗi nhớ em, anh đã cố nhưng sửa không được.",
                  
        "Anh muốn gửi tin nhắn này đến em hôm nay vì hôm nay anh cảm thấy yêu em nhiều đến bất thường.",
        
        " Anh ghét em lắm em biết không? Vì suốt ngày em cứ bay lượn trong đầu anh, làm anh khôn nghĩ được việc gì cả…huhu."
];
  const text = `「 𝐓𝐡í𝐧𝐡 」: ${gai[Math.floor(Math.random()*gai.length)]}`;
		return api.sendMessage({body: msg + getText("helpList", commands.size, prefix) + text, attachment: fs.createReadStream(folderimg+"/"+listImg[Math.floor(Math.random() * listImg.length)])}, threadID, async (error, info) =>{
			if (autoUnsend) {
				await new Promise(resolve => setTimeout(resolve, delayUnsend * 1000));
				return api.unsendMessage(info.messageID);
			} else return;
		});

	}

  return api.sendMessage({ body: getText("moduleInfo", command.config.name, command.config.description, `${prefix}${command.config.name} ${(command.config.usages) ? command.config.usages : ""}`, command.config.commandCategory, command.config.cooldowns, ((command.config.hasPermssion == 0) ? getText("user") : (command.config.hasPermssion == 1) ? getText("adminGroup") :
(command.config.hasPermssion == 2) ? getText("supportAdmin") :            getText("adminBot")), command.config.credits), attachment: fs.createReadStream(folderimg+"/"+listImg[Math.floor(Math.random() * listImg.length)])}, threadID, messageID);
};