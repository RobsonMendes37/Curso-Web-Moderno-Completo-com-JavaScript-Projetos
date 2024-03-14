
//criar de forma literal
function fun1(){}


//armazenar a funcao em uma variavel
const fun2 = function (){}


//armazenar em um array
const array =[function(a,b){return a +b },fun1,fun2]
console.log(array)


//armazenar em um atributo de objeto
const obj={}
obj.falar = function (){return 'opa'}
console.log(obj.falar())


//passar função como parametro
function run(fun){
    fun()
}
run(function () {console.log('execultando...')})


//funcao pode retornar/conter um função
function soma(a,b){
    return function (c){
        console.log(a+b+c)
    }
}

soma(2,3)(4)
const cincoMais = soma(3,4)
cincoMais(5)