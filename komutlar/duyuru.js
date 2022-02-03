const Discord = require('discord.js')

exports.run = async (client, message, args) => {
  
        
let rChannel = message.guild.channels.cache.get(args[0])

        if(!rChannel)return message.channel.send .MessageEmbed()(`**!duyuru [kanal id] [Duyuru yapılacak mesaj] şeklinde giriniz!**`)
        console.log(rChannel)
        let MSG = args.slice(1).join(' ')
        if(!MSG)return message.channel.send(`You did not specify your message to send!`)
        const olimpos = new Discord.MessageEmbed()

        .setTitle(`<:alevs:848670691594600469> Jigsaw Media`) // Sunucunuzun ismi

        .setDescription(`${MSG}`)
        .setColor('RANDOM')
        rChannel.send(olimpos)
        message.delete()
}

exports.conf = {
	enabled: true,
	guildOnly: false,
	aliases: ["duyuru"],
	permLevel: 0,
}

exports.help = {
	name: 'duyuru',
}