//colecao dinamica de pares chave/valor
const produto = new Object
produto.nome = 'Cadeira'
produto['marca do produto'] = 'Generica'
produto.preco = 220

console.log(produto)
delete produto. preco
delete produto['marca do produto']

console.log(produto)



const carro = {
    modelo: "A4",
    valor: 89000,
    proprietario:{
        nome: 'Raul',
        idade :84,
        endereco : {
            logradouro: 'tabeliao da vida',
            numero: 147,
        }
    },
    condutores:[{
        nome: 'pedro',
        idade : 16
    },{
        nome: 'galileu',
        idade : 76
    }]
}

console.log(carro)