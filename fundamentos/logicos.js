function compras(trabalho1,trabalho2){
    const comprarSorvete = trabalho1 || trabalho2
    const comprarTv = trabalho1 && trabalho2
    const comprarTv2 = trabalho1 !=trabalho2
    const manterSaudavel = !comprarSorvete //operador unitário
    
    return {comprarSorvete, //cria um objeto,mas a chave fica implisita, em vez de fazer sorvet: comprarSorvete
            comprarTv,
            comprarTv2 ,
            manterSaudavel 
            }
}


console.log(compras(true,false))
console.log(compras(true,true))
console.log(compras(false,false))
console.log(compras(false,true))