const pessoa ={ //objeto
    nome:'Ana',
    idade: 5,
    endereco: {
        logradouro :   'Rua tarana',
        numero : 1000,
    }
}
//forma de acessar os atributos de um objeto,usa chaves{}
const {nome,idade} = pessoa
console.log(nome,idade)

const {nome : n, idade :i} = pessoa
console.log(n,i)

const {endereco :{logradouro,numero,cep}} = pessoa
console.log(logradouro,numero,cep)