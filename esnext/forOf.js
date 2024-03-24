for(let letra of 'palavra'){
    console.log(letra)
}

const assuntosECMA = [ 'Map','Set','Promise']

for(let i of assuntosECMA){ //tras o valor
    console.log(i)
}

for(let i in assuntosECMA){ //tras o indice
    console.log(i)
}

const assuntosMap = new Map([
    ['Map', { abordado: true}],
    ['Set', { abordado: true}],
    ['Promise', { abordado: false}]
])

for (let assunto of assuntosMap) {
    console.log(assunto);
}

for (let chave of assuntosMap.keys()) {
    console.log(chave);
}

for (let valor of assuntosMap.values()) {
    console.log(valor);
}

for (let [chave, valor] of assuntosMap.entries()) {
    console.log(chave, valor);
}
