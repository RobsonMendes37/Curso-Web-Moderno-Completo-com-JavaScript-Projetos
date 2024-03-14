function Pessoa(){ 
    this.idade =0
    
    setInterval(()=> { //na funçao arrow o this não varia
                      //Em funções de seta, o valor de this é lexicalmente vinculado ao contexto em que a função é definida
        this.idade++
        console.log(this.idade)
        },1000)
}

new Pessoa 

