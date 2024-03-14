function getInteiroAleatorioEntre(min,max){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao =0
let cont =1

//pelo menos uma repeticao é garantida com o do while
do {
    opcao = getInteiroAleatorioEntre(-1000,100000)
    console.log(opcao)
    cont++
}
while( opcao != -1)

console.log("o cont é",cont)