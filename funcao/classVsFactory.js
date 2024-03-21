class Pessoa{
    constructor(nome){
        this.nome = nome
    }

    falar(){
        console.log('Meu nome é ',this.nome)
    }
}

const p1 = new Pessoa('João')
p1.falar()


const criarPessoa = nome=>{ //funcao factory retorna uma funcao que cria um objeto
    return {
        falar:() =>console.log('Meu nome é:',nome)
    }

}

const p2 = criarPessoa('pedro')
p2.falar()

