//criando com notação literal
const objeto1 = {}
console.log(objeto1)

//objeto em js
console.log(typeof Object,typeof new Object)
const objeto2 = new Object
console.log(objeto2)

//funcoes construtoras
function Produto (nome,preco,desc){
    this.nome = nome
    this.getPrecoComDesconto = () => {
        return preco
    }
}

const p1 = new Produto('Caneta', '7.7', 0.15)
const p2 = new Produto('mesa', '7.7', 0.15)
console.log(p1.getPrecoComDesconto())

// Função Factory
function criarFuncionario (nome, salarioBase, faltas) {
    return {
        nome,
        salarioBase,
        faltas,
        getSalario( ) {
            return (salarioBase / 30) * (30 - faltas)
        }
    }
}

const f1 = criarFuncionario ('João', 7980, 4)
const f2 = criarFuncionario( 'Maria', 11400, 1)
console.log(f1.getSalario(), f2.getSalario())

// Object.create
const filha = Object.create(null)
filha.nome = 'Ana'
console.log (filha)