const produtos=[
    {nome :'Notebook',preco : 2499 , fragil :true},
    {nome :'pc',preco : 249 , fragil :true},
    {nome :'celular',preco : 7000 , fragil :true},
    {nome :'mouse',preco :99 , fragil :true}
]

console.log(produtos.filter(function(e){
    return true
}))

console.log(produtos.filter(function(e){
    return false
})) // vai ser []

console.log(produtos.filter(function(e){
    return e.preco >=100
}))

console.log(produtos.filter(function(e){
    return e.preco >=100
}))

// console.log(produtos.filter(function(e){
//     return e.preco >=500 && e.fragil
// }))
maior500 = e => e.preco >= 500
isFragil = e => e.fragil

console.log(produtos.filter(maior500).filter(isFragil))
