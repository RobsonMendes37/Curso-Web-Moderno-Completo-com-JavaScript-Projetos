const notas = [1.1,2.2,3.3,4.4,55.5,6.6,7.7,8.8,9.9]

//sem callback
let notasBaixas1 = []
for(let i in notas){
    if(notas[i]< 7){
        notasBaixas1.push(notas[i])
    }
}

console.log(notasBaixas1)

//com callback
let notasBaixas2 = notas.filter(function(nota){ //filter () é usado para criar um novo array contendo elementos que 
                                                //passam em um teste especificado por uma função. 
    return nota < 7
})
console.log(notasBaixas2)


let notasBaixas3 = notas.filter(nota =>{  //funcao arrow anonima
    return nota < 7
})
console.log(notasBaixas3)


let menorQue7 = nota => nota < 7
let notasBaixas4 = notas.filter(menorQue7)
console.log(notasBaixas4)

