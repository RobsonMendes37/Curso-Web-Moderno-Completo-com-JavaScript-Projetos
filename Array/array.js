console.log(typeof Array,typeof new Array,typeof [])

aprovados = ['Ana','Pedro','Robson']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])

aprovados [3]='Rafael'
aprovados.push('Abia')
console.log(aprovados.length)

aprovados[9] ='Rafael'
console.log(aprovados.length)
console.log(aprovados[8]===undefined)

console.log(aprovados)
aprovados.sort()
console.log(aprovados)

delete aprovados[1]
console.log(aprovados[1])
console.log(aprovados[2])

aprovados = ['Bia','Carla','Ana']
aprovados.splice(1, 1, 'João') //substitui o elemento
//aprovados.splice(1, 0, 'Elemento1', 'Elemento2')
console.log(aprovados)
