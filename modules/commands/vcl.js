module.exports.config = {
	name: "vcl",
		version: "9.9.9",
		hasPermssion: 0,
		credits: "Drasew",
		description: "vcl",
		commandCategory: "game",
		usages: "noprefix",
		cooldowns: 5,
	};
	module.exports.handleEvent = function({ api, event }) {
		const fs = global.nodemodule["fs-extra"];
		var { threadID, messageID } = event;
		if (event.body.indexOf("vcl")==0 || (event.body.indexOf("vcl")==0)) {
			var msg = {
					body: "sủa cc gì đấy",
				}
        api.sendMessage(msg, threadID, messageID);
				return api.changeNickname(`Thằng mất dạy vô văn hóa`, event.threadID, event.senderID);
			}
		}
		module.exports.run = function({ api, event, client, global }) {
	
	}