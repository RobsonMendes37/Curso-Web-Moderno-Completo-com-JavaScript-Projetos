const imprimirResultado = function (nota){
    switch (Math.floor(nota)){
        case 10:
            console.log("o numero é:",10)
            break
        case 9:
            break
        case 5: case 7:
            console.log("o numero é:",5 ,"ou",7)
            break
        case 4 : case 3: case 2: case 1: case 0:
            console.log("reprovado")
            break
        default:
            console.log("nota invalida")
    }
}


imprimirResultado(10)
imprimirResultado(5)
imprimirResultado(2)
imprimirResultado("Boa sorte")