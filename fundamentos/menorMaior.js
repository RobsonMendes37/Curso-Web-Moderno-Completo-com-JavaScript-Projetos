const array = [];
while(array.length <100){
    const randomNumber = Math.round(Math.random() * (1000 - (-1000)))
    if (!array.includes(randomNumber)) {
        array.push(randomNumber);
    }
}
let menor = array[0];
let maior = array[array.length - 1];
for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
        if (array[i] > array[j]) {
            let aux = array[i];
            array[i] = array[j];
            array[j] = aux;
        }
    }
}

console.log('Maior:', array[array.length - 1]);
console.log('Menor:', array[0]);

console.log(array);