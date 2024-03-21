function criarProduto(nome,preco){
    return {
        nome,
        preco,
        desconto:10
    }
}

console.log(criarProduto('mouse',30))
console.log(criarProduto('notebook',1000))
console.log(criarProduto)