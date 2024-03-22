//jason é um formato de dados

const obj = {a:1,b:2,c:3, soma(){return a+b+c}}
console.log(JSON.stringify(obj))

//.parse  converte uma string JSON em um valor JavaScript ou em um objeto JavaScript descrito pela string.
//console.log(JSON.parse("{a:1,b:2,c:3}"))  //forma errada
//console.log(JSON.parse("{'a':1,'b':2,'c':3}"))   //forma errada
console.log(JSON.parse('{"a":1,"b":2,"c":3}'))
console.log(JSON.parse('{"a":[],"b":{},"c":"string","d":true , "e":332}'))