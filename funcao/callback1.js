const fabricantes = ['Mercedes','Aud','BMW']

function imprimir(nome ,indice){
    console.log(`${indice + 1}. ${nome}`)
}

fabricantes.forEach(imprimir) // o callback funciona aqui
fabricantes.forEach(fabricante => console.log(fabricante))

// Em JavaScript, uma função de callback é uma
//função que é passada como argumento para
// outra função e é chamada de volta (executada) 
// quando a função principal termina sua 
//execução ou atinge um determinado ponto12.