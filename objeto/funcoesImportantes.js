const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
  };
  
  console.log(Object.keys(pessoa));
  console.log(Object.values(pessoa));
  console.log(Object.entries(pessoa));
  
  Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`);
  });
  
  Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true,
    writable: false,
    value: '01/01/2019'
  });
  
  pessoa.dataNascimento = '01/01/2017';
  console.log(pessoa.dataNascimento);
  console.log(Object.keys(pessoa));
  

  // O método Object.assign é usado para copiar os valores de todas as propriedades enumeráveis de um ou mais objetos de origem para um objeto de destino. 
// Ele retorna o objeto de destino. No caso abaixo:
// - O objeto dest é o objeto de destino.
// - Os objetos 01 e 02 são objetos de origem.
// - O método Object.assign(dest, 01, 02) copia as propriedades de 01 e 02 para o objeto dest. Se houver propriedades com os mesmos nomes, o valor do objeto mais recente sobrescreverá o valor do objeto anterior.
// - O objeto resultante é armazenado na variável obj.
// - Em seguida, o método Object.freeze(obj) é chamado para congelar o objeto obj, tornando-o imutável.
// - Tentar modificar a propriedade 'c' do objeto obj resultará em uma falha silenciosa, pois o objeto está congelado.
const dest = { a: 1 };
const obj1 = { b: 2 };
const obj2 = { c: 3, a: 4 };
const obj = Object.assign(dest, obj1, obj2);
Object.freeze(obj);
obj.c = 1234; // Não terá efeito
console.log(obj);