const valores = [7.7,8.8,9.9,10.2]
console.log(valores[0],valores[3])
console.log(valores[4])

valores[4] = 10
console.log(valores)
console.log(valores.length)

valores.push({id :3},true,0,'teste')
console.log(valores)