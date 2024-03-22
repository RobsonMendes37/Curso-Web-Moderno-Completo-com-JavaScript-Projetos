Array.prototype.map2 = function(callback){
    const newArray = []
    for(let i = 0;i<this.length;i++){
        newArray.push(callback(this[i],i,this))
    }
    return newArray
}
//criando estrutura array



const carrinho = [
    '{"nome":"borracha1","preco" : 3.35}',
    '{"nome":"borracha2","preco": 4.37}',
    '{"nome":"borracha3","preco" : 5.35}',
    '{"nome":"borracha4","preco" : 6.35}',
]

//retornar um array apenas com os precos

const paraObjeto = json => JSON.parse(json) //cria uma função que transforma pra objeto
const apenasPreco = produto => produto.preco

const resultado = carrinho.map2(paraObjeto).map2(apenasPreco)
console.log(resultado)