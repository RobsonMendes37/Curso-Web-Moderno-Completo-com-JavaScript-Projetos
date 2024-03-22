console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)

String.prototype.reverse = function() {
    return this.split('').reverse().join('') //quebra o array em caracteres; inverte os caracteres; junta os caracteres em um array
}

console.log('Escola AmorEVida'.reverse())

Array.prototype.first = function(){
    return this[0]
}

console.log([1,2,3,4,5,6,7,8,9].first)
console.log(['a','b'].first)

String.prototype.toString = function (){
    return 'lascou tudo'
}

console.log('Escola AmorEVida'.reverse())