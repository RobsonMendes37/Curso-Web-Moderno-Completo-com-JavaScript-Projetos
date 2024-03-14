const fabricantes = ['Mercedes','Aud','BMW']

function imprimir(nome ,indice){
    console.log(`${indice + 1}. ${nome}`)
}

fabricantes.forEach(imprimir) // o callback funciona aqui
fabricantes.forEach(fabricante => console.log(fabricante))