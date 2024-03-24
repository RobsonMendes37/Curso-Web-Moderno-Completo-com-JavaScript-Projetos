module.exports = function (...nomes){
    return nomes.map(nome => `Boa semana ${nome}`)
}                //map vai fazer o retorno da função passada para todos os elementos do array