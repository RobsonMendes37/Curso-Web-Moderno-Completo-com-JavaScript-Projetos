Array.prototype.filter2 = function(callback){
    const newArray=[]
    for(let i =0;i<this.length;i++){
        if(callback(this[i] ,i, this)){
            newArray.push(this[i])
        }
    }
    return newArray
}







const produtos=[
    {nome :'Notebook',preco : 2499 , fragil :true},
    {nome :'pc',preco : 249 , fragil :true},
    {nome :'celular',preco : 7000 , fragil :true},
    {nome :'mouse',preco :99 , fragil :true}
]


maior500 = e => e.preco >= 500
isFragil = e => e.fragil

console.log(produtos.filter2(maior500).filter2(isFragil))
