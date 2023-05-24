let num = [1, 2, 3, 6, 8, 7]
num.push(4)
num.sort()
console.log(num)
console.log(`Nosso vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
let pos = num.indexOf(7)
if(pos == -1){
    console.log('O valor não foi encontrado!')
} else{
    console.log(`O valor 8 está na posição ${pos}`)
}
