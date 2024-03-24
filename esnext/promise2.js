
setTimeout(function(){
    console.log( "chamando callback...")
    setTimeout(function(){
        console.log( "chamando callback...")
        setTimeout(function(){
            console.log( "chamando callback...")
        },200)
    },200)
},200)


//callback
//-----qual é melhor? -------
//promise


function esperarPor(tempo = 2000){
    return new Promise(function(resolve){
        setTimeout(function(){
            console.log('Execultando promise...')
            resolve('Vishhhh')
        },tempo)
    })
}

esperarPor(2000)
    .then(() => esperarPor)
    .then(esperarPor)