function real ( partes , ...valores){
    const resultado = []
    valores.forEach((valor,indice) => {
        valor = isNaN(valor) ? valor : `Rs ${valor.toFixed(2)}` //modifco os agumentos padrão par isso
        resultado.push(partes[indice], valor)

    })
    return resultado.join('')
}


const preco = 35.99
const precoParcela = 12
console.log(real `1x de ${preco} ou 3x de ${precoParcela}.`)