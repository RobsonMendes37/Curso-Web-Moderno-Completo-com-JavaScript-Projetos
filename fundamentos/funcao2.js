const imprimirSoma = function(a,b){
    console.log(a +b)
}
imprimirSoma(4,10)


//funcao arrow
const imprimirSomav2 = (a,b) => { 
    return a +b
}
console.log(imprimirSomav2(4,15))


//retorno implisito
const subtracao = (a,b)=> a - b
console.log(subtracao(23,7))