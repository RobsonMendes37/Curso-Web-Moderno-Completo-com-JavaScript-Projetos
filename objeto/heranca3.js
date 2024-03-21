const pai = {nome :"pedro", corCabelo: 'preto'}

const filha1 = Object.create(pai)
filha1.nome = 'Ana' 
console.log(filha1.corCabelo)

const filha2 = Object.create(pai, {
    nome : {value: 'Bia', writable : false, enumerable : true}
})

console.log(filha2.nome)
filha2.nome ="Carla"
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`)


console.log(Object.keys(filha1))
console.log(Object.keys(filha2))

for(key in filha2) {
    filha2.hasOwnProperty(key) ?    // verifica se o atributo é dele mesmo ou se é do pai
        console.log(key) : console.log('Pro heranca :',key)
}