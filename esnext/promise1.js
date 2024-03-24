//Uma Promise é um objeto que representa um valor que 
//pode estar disponível agora, no futuro ou nunca

let a =1
console.log(a)

let p = new Promise(function(resolve){
    resolve([795,878,254,387,4])
})

const mult3 = num => console.log(num*3)

p.then(valor =>valor)
    .then(primeiro => primeiro[0])
    .then(letra=> `${letra}`)
    .then(primeiraLetra =>parseInt(primeiraLetra[0]))
    .then(mult3)