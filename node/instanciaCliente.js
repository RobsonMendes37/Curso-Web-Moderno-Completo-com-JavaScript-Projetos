const contadorA = require('./funcionarios/instanciaUnica')
const contadorB = require('./funcionarios/instanciaUnica')

const contadorC = require('./funcionarios/instanciaNova')()
const contadorD = require('./funcionarios/instanciaNova')()

contadorA.inc()
contadorA.inc()
console.log(contadorA.valor,contadorB.valor)

contadorC.inc()
contadorC.inc()
console.log(contadorC.valor,contadorD.valor)