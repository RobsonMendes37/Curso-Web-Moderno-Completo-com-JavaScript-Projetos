
function Pessoa(){ //funcao construtora
    this.idade =0
    
    setInterval(function(){
        this.idade++
        console.log(this.idade) // esse this faz referencia a variavel gloval,tipo o window
        },1000)
}

new Pessoa //instacia pessoa


function Pessoa2(){ //funcao construtora
    this.idade =0
    
    setInterval(function(){
        this.idade++
        console.log(this.idade)
        }.bind(this),1000) // faz com o this seja vinculado a função
}

new Pessoa2 //instacia pessoa