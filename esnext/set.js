// set não aceita repeticao / não indexada

const times = new Set()
times.add('Vasco')
times.add('Flamengo')
times.add('Corintias')
times.add('Palmeiras')
times.add('Vasco')

console.log(times)
console.log(times.size)
console.log(times.has('Vasco'))
console.log(times.has('vasco'))
times.delete('Flamengo')
console.log(times.has('Flamengo'))
console.log(times)

const nomes=['Raquel','Lucas','Julia','Lucas']
const nomeSet = new Set(nomes)
console.log(nomes)
console.log(nomeSet)