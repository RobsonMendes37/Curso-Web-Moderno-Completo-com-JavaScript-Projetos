let dobro = function(a){
    return 2*a
}

dobro = (a) => {
    return 2*a
}

//melhor, com retorno implícito
dobro = a => 2*a
console.log(dobro(Math.PI))

let ola = function(){
    return 'ola'
}

ola = () => 'ola'
ola = _ => 'ola' //possui um parametro
console.log(ola())


//ps não deu pau nos olas por conta da sobrescrita de metodos ;)

