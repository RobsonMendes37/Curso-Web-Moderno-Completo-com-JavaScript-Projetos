
const getNotaDoAluno = aluno => aluno.nota;


const getNotasDaTurma = turma => turma.alunos.map(getNotaDoAluno);


const escola = [
    { alunos: [{ nome: 'Maria', nota: 8.1 }, { nome: 'Pedro', nota: 9.3 }] },
    { alunos: [{ nome: 'João', nota: 8.9 }, { nome: 'Ana', nota: 7.3 }] }
];

// Definindo o método flatMap
if (!Array.prototype.flatMap) { //verifica se o metodo existe
    Array.prototype.flatMap = function(callback) {
        return Array.prototype.concat.apply([], this.map(callback));
    };
}

// Obtendo as notas usando map e flatMap
const notas1 = escola.map(getNotasDaTurma);
console.log(notas1);

const notas2 = escola.flatMap(getNotasDaTurma);
console.log(notas2);
