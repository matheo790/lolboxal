const Discord = require('discord.js');
const token = require("./token.json");
const fs = require("fs");
const bdd = require("./bdd.json");

const bot = new Discord.Client();

bot.on("ready", async () =>{
    console.log("Le bot est allumer");
    bot.user.setStatus("Online");
bot.user.setActivity("Mon serveur DISCORD => https://discord.gg/zuXnkpa ", {type: 'STREAMING'});
});



bot.on("guildMemberAdd", member => {
    //message priver
    member.send(`               :rainbow: Hey, Bienvenue  ${member} ! 

        Merci d'avoir rejoins mon serveur discord :smiley:

                n'hésite pas a lire le règlement:mag_right::pencil::mag: de mon serveur DISCORD
               Bon séjours dans mon serveur Discord 
               :tada: Amuse toi bien !!!  :tada:
                                                       :lock:De la part de BRAOX:lock:  !`);
//message sur le serveur
bot.channels.cache.get('712430518737830028').send(`Bienvenue sur le serveur ${member} !`);
member.roles.add('714548678869647403');

})

bot.on("message", message => {

    if(message.content.startsWith("!clear")){
        message.delete();
        if(message.member.hasPermission('MANAGE_MESSAGES')){

            let args = message.content.trim().split(/ +/g);
            
            if(args[1]){
            if(!isNaN(args[1])  && args[1] >= 1 && args [1] <= 99){

                message.channel.bulkDelete(args[1])
                message.channel.send(`Vous avez suprimé ${args[1]} message(s) !`)

                }
                else {
                    message.channel.send(`Vous devez indiquer une valeur entre 1 et 99 !`)
                }
            }
            else{
                message.channel.send(`Vous devez indiquer un nombre de message à suprimer !`)
            }
        }
        else{
            message.channel.send(`Vous devez avoir la permission de gérer les messages pour éxécuter cette commande !`)
        }
    }
    if(message.content.startsWith("!warn")){
        message.delete()
        if(message.member.hasPermission('BAN_MEMBERS')){
            
           if(!message.mentions.users.first()) return;
        utilisateur = message.mentions.users.first().id

        if(bdd["warn"][utilisateur] == 3){

            delete bdd["warn"][utilisateur]
            message.guild.members.ban(utilisateur)
        }
        else{
            if(!bdd["warn"][utilisateur]){
                bdd["warn"][utilisateur] = 1
                Savebdd();
            }
            else {
                bdd["warn"][utilisateur]++
                    Savebdd();
            }
             }    
        }
    }
    if(message.content.startsWith("!stats")){
        let onlines = message.guild.members.cache.filter(({presence }) => presence.status !== 'offline').size;
        let totalmembers = message.guild.members.cache.size;
        let totalservers = bot.guilds.cache.size;
        let totalbots = message.guild.members.cache.filter(member => member.user.bot).size;
        let totalrole = message.guild.roles.cache.get('714548678869647403').members.map(member => member.user.tag).length;
        
        const monembed = new Discord.MessageEmbed()
        .setColor('#f700ff')
        .setTitle('Statistiques')
       // .setURL('https://discord.js.org/')
        .setAuthor('Mon Bot discord', 'https://imgur.com/a/zQTFqrT')
        .setDescription('Voici les statistiques du serveur')
        .setThumbnail('https://i.imgur.com/xjDkZQS.png')
        
        .addFields(
            { name: '__Nombre de membres total :__ ', value: totalmembers, inline: true },
            { name: '__"Membres connéctés :__ ', value: onlines, inline: true },
            { name: '__Nombre de serveurs auquel le bot appartient :__ ', value: totalservers, inline: true },
            { name: '__Nombres de bots sur le serveur :__ ', value: totalbots, inline: true },
            { name: '__Nombre de roles qui est membres :__ ', value: totalrole, inline: true },
            
        )
        //.setImage('https://i.imgur.com/xjDkZQS.png')
        .setTimestamp()
       // .setFooter('Some footer text here', 'https://i.imgur.com/wSTFkRM.png');

    message.channel.send(monembed);

    }
    if(message.content.startsWith("!help")){
        const helps = new Discord.MessageEmbed()
            .setColor('#ff0000')
            .setTitle('HELP')
           // .setURL('https://discord.js.org/')
            .setAuthor('Mon Bot discord', 'https://i.imgur.com/xjDkZQS.png')
            .setDescription('Voici les statistiques du serveur')    
            .setThumbnail('https://i.imgur.com/xjDkZQS.png')
            .addFields(
                { name: '``"Dialoguer``"', value: `Vous pouvez me dire bonjour comme si j'étais un humain !`},
                { name: '``"!help``"', value: `Si vous avez bessoin d'aide 😄 `},
                { name: '``"!stats``"', value: `Si vous voulez regarder mes stats `},
            )
            //.setImage('https://i.imgur.com/wSTFkRM.png')
            .setTimestamp()
           // .setFooter('Some footer text here', 'https://i.imgur.com/wSTFkRM.png');

        message.channel.send(helps);
	
    }
    if(message.content.startsWith("bonjour")){
        message.channel.send('Bonjour ça va ?')
    }
    if(message.content.startsWith("salut")){
        message.channel.send('Salut ça va ?')
    }
    if(message.content.startsWith("slt")){
        message.channel.send('Slt ça va ?')
    }
    if(message.content.startsWith("wesh")){
        message.channel.send('Wesh ça va ?')
    }
    if(message.content.startsWith("wsh")){
        message.channel.send('Wsh ça va ?')
    }
    if(message.content.startsWith("bjrs")){
        message.channel.send('Bjrs ça va ?')
    }
    if(message.content.startsWith("ça va et toi")){
        message.channel.send('Ça va tu fait quoi ?')
    }
    if(message.content.startsWith("ça va et twa")){
        message.channel.send('Ça va tfk ?')
    }
    if(message.content.startsWith("trkl trkl et toi")){
        message.channel.send('Trkl tfk sinon ?')
    }
    if(message.content.startsWith("trkl trkl et twa")){
        message.channel.send('Trkl tfk sinon ?')
    }
    if(message.content.startsWith("trkl et twa")){
        message.channel.send('Trkl tfk sinon ?')
    }
    if(message.content.startsWith("trkl et toi")){
        message.channel.send('Trkl tfk sinon ?')
    }
    if(message.content.startsWith("oe et toi")){
        message.channel.send('Oe tfk ?')
    }
    if(message.content.startsWith("oe et twa")){
        message.channel.send('Oe tfk ?')
    }
    if(message.content.startsWith("oui et toi")){
        message.channel.send('Oui tu fait quoi sinon ?')
    } 
    if(message.content.startsWith("oui et twa")){
        message.channel.send('Oui ça va tu fait quoi sinon ?')
    }
    if(message.content.startsWith("je fait rien et toi")){
        message.channel.send('Je joue à discuter ')
    }
    if(message.content.startsWith("je fait rien et twa")){
        message.channel.send('Je joue à discuter')
    }
    if(message.content.startsWith("j'fait rien et toi")){
        message.channel.send('Je joue à discuter')
    }
    if(message.content.startsWith("j'fait rien et twa")){
        message.channel.send('Je joue à discuter')
    }
    if(message.content.startsWith("rien et toi")){
        message.channel.send('Je joue à discuter')
    }
    if(message.content.startsWith("rien et twa")){
        message.channel.send('Je joue à discuter')
    }
    if(message.content.startsWith("r et toi")){
        message.channel.send('Je joue à discuter')
    }
    if(message.content.startsWith("chute")){
        message.channel.send(`D'accord je me tais`)
    }
    
    if(message.content.startsWith("!annonce1")){
        message.delete()
        if(message.member.hasPermission('MANAGE_MESSAGES')){

            let args = message.content.trim().split(/ +/g);
    const annonce1 = new Discord.MessageEmbed()
        .setColor('#50dd00')
        .setTitle('Bonjour tous le monde')
       // .setURL('https://discord.js.org/')
        //.setAuthor('Mon Bot discord')
        .setDescription(`:tada: Salut, @everyone  :tada:


        :tada: BRAOX vient de terminer la maintenance du SERVEUR ! :tada:
        
        Tous le monde peut revoir tous les salons du serveur. 😉
        
        @BRAOX à fait plusieurs modifications sur le serveur des modifications 
        | Sur les salons et vocaux.
        | il m'a aussi crée 🤩 !
        | Vous pouvez m'envoiés des messages dans général mais pas en messages privés !
        | 
        
        
         :tada: Donc j'èspère que la mise a jour du serveur DISCORD vous fait plaissir  :tada:`)
        .setThumbnail('https://i.imgur.com/xjDkZQS.png')
        //.setImage('https://i.imgur.com/xjDkZQS.png')
        .setTimestamp()
       // .setFooter('Some footer text here', 'https://i.imgur.com/wSTFkRM.png');
        
       

    message.channel.send(annonce1);

    }
}
    
    



    
    


})


function Savebdd() {
    fs.writeFile("./bdd.json", JSON.stringify(bdd, null, 4), (err) => {
        if (err) message.channel.send("Une erreur est survenue.");
    });
}


bot.login(token.token);