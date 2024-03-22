const alunos = [
    {nome: 'maria', nota: 7.9},
    {nome: 'Predro', nota: 9.1},
]

//imperativo
//como tem que ser feito, passo a passo
let total1=0
for(let i=0;i<alunos.length;i++){
    total1+= alunos[i].nota
}
console.log(total1 / alunos.length)


//declarativo
//oque tem que ser feito, o fim importa mais que o meio
const getNota = aluno => aluno.nota
const soma= (total,atual) => total + atual
const total2 = alunos.map(getNota).reduce(soma)
console.log(total2 / alunos.length)