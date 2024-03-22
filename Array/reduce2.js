const alunos = [
    {nome: 'João',nota: 7.3,bolsista: true},
    {nome: 'Maria',nota:9.7,bolsista: false},
    {nome: 'Pedro',nota: 4.3,bolsista: true},
    {nome: 'Adam',nota: 8.5,bolsista: false}
]

//todos são bolsistas ?
// const resultado =  alunos.map(a => a.bolsista).reduce(function(acumulador,atual){
//     console.log(acumulador,"  ",atual)
//     if(acumulador && atual){
//         return true
//     }else{
//         return false
//     }
// },true)

// console.log(resultado)


//algum deles é bolsistas ? 
// const resultado =  alunos.map(a => a.bolsista).reduce(function(acumulador,atual){
//     console.log(acumulador,"  ",atual)
//     if(acumulador || atual){
//         return true
//     }else{
//         return false
//     }
// },true)

// console.log(resultado)

//-----------------------------------------//

//todos são bolsistas ?
const todosBolsistas = (resultado, bolsista) => resultado && bolsista
console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas))

//algum deles é bolsistas ?
const algumBolsista = (resultado, bolsista) => resultado || bolsista
console.log(alunos.map(a => a.bolsista).reduce(algumBolsista))
