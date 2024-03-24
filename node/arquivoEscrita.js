const fs = require('fs')

const produto={
    nome:'celular',
    preco: 1200,
    desconto : 0.12
}

fs.writeFile(__dirname + '/arquivoGerado.json', JSON.stringify(produto),err => {
    console.log(err || 'Arquivo salvo!') //sendo err falso, faz arquivo salvo!
})