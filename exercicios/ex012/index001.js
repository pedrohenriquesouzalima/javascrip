//var agora= //new Date() //horario do sistema que está rodando o JV
var hora=  //agora.getHours()
console.log(`Agora são extamente ${hora}:00 horas.`)
if(hora >= 6 && hora<=12){
    console.log('Bom dia!')
} else if(hora >=  13 && hora <= 18){
    console.log('Boa Tarde!')
} else if(hora >=19){
    console.log('Boa noite!')
} else if(hora >=0 && hora <=6){
    console.log('Boa Madrugada!')
}
 
