function esperarPor(tempo = 2000){
    return new Promise(function(resolve){
        setTimeout(()=>resolve(),tempo)
    })
}

// esperarPor(2000)
//     .then(()=>console.log('Executltando promise 1'))
//     .then(esperarPor)
//     .then(()=>console.log('Executltando promise 2'))
//     .then(esperarPor)
//     .then(()=>console.log('Executltando promise 3'))


    async function execultar(){
        await esperarPor(2000)
         console.log('Async/Await 1...')

         await esperarPor(2000)
         console.log('Async/Await 2...')

         await esperarPor(2000)
         console.log('Async/Await 3...')

         return 'parece sincrono mas é assincrono '
    }

execultar().then(console.log)