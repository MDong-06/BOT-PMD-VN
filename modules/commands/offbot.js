module.exports.config = {
	name: "offbot",
	version: "1.0.0",
	hasPermssion: 3,
	credits: "HTHB",
	description: "Tắt Bot.",
	commandCategory: "system",
	cooldowns: 0
        };
module.exports.run = ({event, api}) =>api.sendMessage("[⚜️] 𝙏𝙧𝙞ệ𝙪 𝙏à𝙞 𝙏â𝙣 [⚜️]\n[🔰𝙊𝙁𝙁𝘽𝙊𝙏🔰] Bye cậu chủ nha em đi ngủ đây:33",event.threadID, () =>process.exit(0))