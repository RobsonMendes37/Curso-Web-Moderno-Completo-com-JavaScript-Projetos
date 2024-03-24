const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const ehChina = (obj) =>  obj.pais === 'China'
const ehMulher = (obj) =>  obj.genero === 'F'
const menorSalario = (func,funcAtual) => {
    return func.salario < funcAtual.salario ? func : funcAtual
}
//funcAtual é o acumulador


axios.get(url).then(response => {
    const funcionarios = response.data
    //console.log(funcionarios)

    //menor salario
    const func = funcionarios.
        filter(ehChina).
        filter(ehMulher).
        reduce(menorSalario)
    console.log(func)
})

//forma de pegar um json remoto