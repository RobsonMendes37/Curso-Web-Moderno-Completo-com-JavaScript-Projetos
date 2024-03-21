const sequencia = {
    _valor: 1, // convenção
    get_valor() { return this._valor++ },
    set_valor(valor){
        if(valor > this-_valor) {
        this._valor = valor
        }
    }
}
console.log(sequencia.get_valor(), sequencia._valor)