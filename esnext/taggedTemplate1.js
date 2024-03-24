// tagged templates - processa o template dentro de uma função
function tag(partes, ...valores) {
    console.log(partes);
    console.log(valores);
    return 'Outra string';
  }

  const aluno = 'Gui';
  const situacao = 'Aprovado';
  console.log(tag`*${aluno} está ${situacao}`);
              //Aqui é essa tagged template, parece um função,mas recebe os termos dentro ${}