const {Client, MessageAttachment} = require('discord.js');
const bot = new Client();

const token = 'NzIzODg1MDYxNjk4NjE3NDE1.Xu4JMQ.b-EZoigTTXLu-4TijmXlxJ_qAJ0';

const PREFIX = "+";

bot.on('ready', () => {
    console.log('Bu bot online!');
    bot.user.setActivity('Hayatlarınızla',{
        type: 'Oynuyor...'
    }).catch(console.error);
})

bot.on('message', message =>{
    
    let args = message.content.substring(PREFIX.length).split(" ");

    switch(args[0]){
        case 'bilgi':
            message.channel.send('Bu bot @Mr.Monster#4162 tarafından @Mrs.Monster#5007 a ithafen yapılmıştır.\nBu bot ayrıca yargı dağıtır!!!\nBan botudur!');
            break;
        case 'clear':
            if(!args[1]) return message.reply('Lütfen bir sayı giriniz! Örnek: "+clear sayı"');
            message.channel.bulkDelete(args[1]);
            break;
        case 'cls':
            if(!args[1]) return message.reply('Lütfen bir sayı giriniz! Örnek: "+clear sayı"');
            message.channel.bulkDelete(args[1]);
            break;
        case 'ban':
            const user = message.mentions.users.first();

            if(user){
                const member = message.guild.member(user);

                if(member){
                    member.ban({ression:"Kurallara uymamaktan veya yaptığın başka bir davranıştan dolayı banlandın!"});
                    const attachment = new MessageAttachment('https://media3.giphy.com/media/kf4KLlj33Z2fRlH4hz/giphy.gif');
                    message.channel.send(`${user.tag} sunucumuzdan tekmeyi yedi!`);
                    message.channel.send(attachment);
                }
                else {
                    message.channel.send("Burada böyle biri yok!")
                }
            }
            else{
                message.channel.send("Bu sunucada var olan birini etiketlemelisiniz.")
            }
            break;
            
    }
    
})

bot.login(token);