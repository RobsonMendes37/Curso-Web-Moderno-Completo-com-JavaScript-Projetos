const carrinho = [
    '{"nome":"borracha1","preco" : 3.35}',
    '{"nome":"borracha2","preco": 4.37}',
    '{"nome":"borracha3","preco" : 5.35}',
    '{"nome":"borracha4","preco" : 6.35}',
]

//retornar um array apenas com os precos

const paraObjeto = json => JSON.parse(json) //cria uma função que transforma pra objeto
const apenasPreco = produto => produto.preco

const resultado = carrinho.map(paraObjeto).map(apenasPreco)
console.log(resultado)