function soma(){ //forma de usar uma função sem argumentos por definição
    let soma = 0
    for (i in arguments){
        soma += arguments[i]
    }
    return soma
}

console.log(soma())
console.log(soma(1))
console.log(soma(1.2,1.4,5.3))
console.log(soma('a','b','c'))
console.log(soma(1,4,'teste'))