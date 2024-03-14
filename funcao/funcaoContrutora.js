function Carro (velocidadeMaxima=200, delta=5){
    //atributo privado
    let velocidadeAtual =0


    //metodo publico
    this.acelerar = () =>{
        if(velocidadeAtual + delta <= velocidadeMaxima){
            velocidadeAtual += delta
        }else {
            velocidadeAtual = velocidadeMaxima
        }
    }


    //metodo publico
    this.getVelocidadeAtual = function(){
        return velocidadeAtual
    }
}

const uno = new Carro(200, 7)
uno.acelerar()
console.log(uno.getVelocidadeAtual())

const ferrati = new Carro(350,10)
ferrati.acelerar()
ferrati.acelerar()
ferrati.acelerar()
ferrati.acelerar()
console.log(ferrati.getVelocidadeAtual())