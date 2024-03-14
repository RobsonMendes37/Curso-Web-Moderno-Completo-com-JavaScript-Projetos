//copia por referencia 
const a = {nome : "joão"}

const b = a //agora os dois apontam pro mesmo endereço de memoria
b.nome ="maria"
console.log(a)



//copia por valor
let c =4

let d = c
console.log(c)


const valor = null//ausencia de valor

//ex de erro console.log(valor.toString())