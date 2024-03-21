function getPreco(imposto = 0,moeda ='RS'){
    return `${moeda} ${this.preco * (1-this.desc) * (1+imposto)}`
}

const produto={
    nome:'Notebook',
    preco :4200,
    desc: 0.15,
    getPreco
}

global.preco = 20
global.desc = 0.1
console.log(getPreco())  //chama a partir de uma função
console.log(produto.getPreco()) //chama a partir de um objeto

const carro = { preco: 49990, desc: 0.20}

console.log(getPreco.call(carro,0.17,'$'))  //passa os parametros dentro de uma função
console.log(getPreco.apply(global,[0.17],'$$')) //no aply se passa os parametros dentro um array