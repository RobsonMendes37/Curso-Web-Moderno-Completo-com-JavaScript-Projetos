const pessoa = {
    saudacao :'Bom dia',
    falar(){
        console.log(this.saudacao)
    }
}

pessoa.falar()
const falar= pessoa.falar
falar()


//amarra o objeto. Toda vez que fizer falarDePessoa.this vai chamar pessoa
const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()
