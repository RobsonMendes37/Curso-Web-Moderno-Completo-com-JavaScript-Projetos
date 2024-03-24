// Crie uma função que recebe um array de números e retorna o segundo maior número presente nesse array.

const nums =[1,2,3,4,5,6,7,8,33,4,2,1,69,66,3,232,1000,21,55,34,21]


function segundoMaior(array) {
    let maior = -Infinity;
    let segundoMaior = -Infinity;

    array.forEach(element => {
        if (element > maior) {
            segundoMaior = maior; 
            maior = element;
        } else if (element > segundoMaior && element < maior) {
            segundoMaior = element;
        }
    });

    return segundoMaior;
}

console.log(segundoMaior(nums)); // Saída: 232
