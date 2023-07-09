module.exports.config = {
	name: "dcm",
		version: "9.9.9.9.9.9",
		hasPermssion: 0,
		credits: "Ttoan",
		description: "dcm",
		commandCategory: "game",
		usages: "noprefix",
		cooldowns: 5,
	};
	module.exports.handleEvent = function({ api, event }) {
		const fs = global.nodemodule["fs-extra"];
		var { threadID, messageID } = event;
		if (event.body.indexOf("đcm")==0 || (event.body.indexOf("dcm")==0)) {
			var msg = {
					body: "địt chết mẹ mày giờ",
				}
        api.sendMessage(msg, threadID, messageID);
				return api.changeNickname(`Địt Con Đĩ Mẹ Mày 💩`, event.threadID, event.senderID);
			}
		}
		module.exports.run = function({ api, event, client, global }) {
	
	}