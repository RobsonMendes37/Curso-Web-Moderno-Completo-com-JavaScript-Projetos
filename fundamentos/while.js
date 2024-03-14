function getInteiroAleatorioEntre(min,max){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = 0
let cont =1
while( opcao != -1){
    opcao = getInteiroAleatorioEntre(-1000,100000)
    console.log(opcao)
    cont++
}
console.log("o cont é",cont)