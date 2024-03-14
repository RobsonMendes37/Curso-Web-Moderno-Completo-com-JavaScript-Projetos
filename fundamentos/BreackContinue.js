const notas = [6.2,4.7,8.9,10.2,6.2,4.7,8.9,10.2,10.0,54.2]

for(x in notas){
    if(notas[x] == 10.0){
        console.log("sai do loop for,boa break")
        break
    }
    console.log(`${x} = ${notas[x]}`)
}


console.log(" \n ------------------------- \n")


forExterno:
for(a in notas){
    for(x in notas){
        if(notas[x] == 10.0){
            console.log("sai dos loops fors,boa break exteno")
            break forExterno
        }
        console.log(`${x} = ${notas[x]}`)
    }
}

console.log('')
console.log("-------------------------")
console.log('')
for(x in notas){
    if(notas[x] == 10.0){
        console.log("ainda estou no loop for,boa continue")
        continue
    }
    console.log(`${x} = ${notas[x]}`)
}