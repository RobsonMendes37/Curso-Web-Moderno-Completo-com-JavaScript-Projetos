Array.prototype.forEach2= function(callback){
    for (let i=0;i<this.length;i++){
        callback(this[i],i,this)
    }
}


const aprovados=['agata','aldo','daniel','raquel']

aprovados.forEach2(function(nome,indice){
    console.log(`${indice +1}) ${nome}`)
})


//simulando o forEach no js