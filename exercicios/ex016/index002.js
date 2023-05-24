let num = [7, 8, 4, 5, 3, 6,]
num.sort()
console.log(num)
/*
for(let pos=0; pos<num.length; pos++){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}
*/

for (let pos in num){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}
