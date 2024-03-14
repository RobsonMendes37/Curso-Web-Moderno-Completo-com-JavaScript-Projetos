let comparaComThis = function(param){
    console.log(this ===param) 
}

comparaComThis(global) //faz refencia ao global , true

const obj ={}
comparaComThis = comparaComThis.bind(obj) //agora faz refencia ao obj
comparaComThis(global) //false
comparaComThis(obj) //true

let comparaComThisArrow = () => console.log(this === arguments)
comparaComThisArrow(global)