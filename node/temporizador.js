const schedule = require('node-schedule')

const tarefa1 = schedule.scheduleJob('*/1 * 23 * * 6' ,function(){
    console.log('Executando Tarefa 1!', new Date().getSeconds())
})

setTimeout(function( ){
    tarefa1.cancel()
    console.log('Cancelando Tarefa1')
}, 5000)

//setImmediate

const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(1,6)]
regra.hour = 23
regra.segund = 30

const tarefa2 = schedule.scheduleJob(regra,function(){
    console.log('Execultando Tarefa 2"!',new Date().getSeconds())
})