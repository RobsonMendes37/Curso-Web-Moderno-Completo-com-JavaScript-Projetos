const pilotos=['Vettel','Alonso',"Marçal",'Massa']
pilotos.pop()
console.log(pilotos)

pilotos.push('Verstappen')
console.log(pilotos)

pilotos.shift() //remove o primeiro elemento do array
console.log(pilotos)

pilotos.unshift('Alovoce') //adicionou no primeiro elemento
console.log(pilotos)

//splice pode dicionar ou remover elementos

//adicionar
pilotos.splice(2,0,'jeovaneNovo')
console.log(pilotos)


//remover
pilotos.splice(2,1)
console.log(pilotos) //jeovane saiu

const algunsPilotos1 = pilotos.slice() //copia o array pilotos
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(2,4) //copia o array pilotos a partir do 2
console.log(algunsPilotos2)




