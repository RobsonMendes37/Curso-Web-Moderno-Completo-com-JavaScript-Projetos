console.log(this === global)
console.log(this === module)

console.log(this === module.exports)
console.log(this === exports)

function logThis(){
    console.log('Dentro de uma função...')
    console.log(this === global)
    console.log(this === module)
    console.log(this === module.exports)
    console.log(this === exports)

}

logThis()

//this dentro d função é global
//this dentro dentro do escopo geral é module.exports igual em uma arrow function
