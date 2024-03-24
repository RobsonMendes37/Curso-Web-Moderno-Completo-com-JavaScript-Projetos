const tecnologias = new Map();
tecnologias.set('react', { framework: false });
tecnologias.set('Angular', { framework: true });

console.log(tecnologias.react); //isso não é um objeto
console.log(tecnologias.get('react').framework); // Output: false


const chavesVariadas = new Map([
    [function () { }, 'Função'],
    [{}, 'Objeto'],
    [123, 'numero']
])

chavesVariadas.forEach((vl,ch)=> {
    console.log(ch,vl)
})

console.log(chavesVariadas.has(123))
chavesVariadas.delete(123)
console.log(chavesVariadas.has(123))
console.log(chavesVariadas.size)

chavesVariadas.set(123 , 'a')
chavesVariadas.set(123 , 'b')
chavesVariadas.set(456 , 'a')
console.log(chavesVariadas)

    