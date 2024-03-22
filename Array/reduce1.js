const alunos = [
    {nome: 'João',nota: 7.3,bolsista: false},
    {nome: 'Maria',nota:9.7,bolsista: true},
    {nome: 'Pedro',nota: 4.3,bolsista: false},
    {nome: 'Adam',nota: 8.5,bolsista: true}
]
console.log(alunos.map(a=>a.nota))


const resultado =  alunos.map(a => a.nota).reduce(function(acumulador,atual){
    console.log(acumulador,atual)
    return acumulador + atual
},0)

console.log(resultado)