const Discord = require('discord.js');
const bot = new Discord.Client();
 
const token = '' ;
 
const SUFFIX = 'ine';

function getWordAt (str, pos) {

    // Perform type conversions.
    str = String(str);
    pos = Number(pos) >>> 0;

    // Search for the word's beginning and end.
    var left = str.slice(0, pos + 1).search(/\S+$/),
        right = str.slice(pos).search(/\s/);

    // The last word in the string is a special case.
    if (right < 0) {
        return str.slice(left);
    }

    // Return the word, using the located bounds to extract it from the string.
    return str.slice(left, right + pos);

}

bot.on('ready', () =>{
    console.log('This bot is online!');
})

bot.on('message', msg =>{
    var message = msg.toString()
    console.log(message)
    var mot = ''
    if (!(msg.author.bot)) { 
        for(let k=0 ; k < message.length-2 ; k++) {
           
            if (message.substring(k,k+3) == SUFFIX) {
                var position = k
                mot = getWordAt(message,k)
            }
    
        }
        console.log('mot trouve : ' + mot)
        if(mot != '') {
            if((mot.substring(mot.lenght-3,mot.length)== 'ine') || (mot.substring(mot.lenght-4,mot.length)=='ines')){
                console.log(message +','+mot)
                if(mot.substring(mot.length-1,mot.lenght)=='s'){
                    msg.reply('on dit pas '+ mot +', on dit pains aux ' + mot.substring(0,mot.length-4)+'s')
                
                } else {
                msg.reply('on dit pas '+ mot +', on dit pain au ' + mot.substring(0,mot.length-4))
                }
            
            }
            
        }
       
        
    }
    


    
        

})

bot.login(token);
