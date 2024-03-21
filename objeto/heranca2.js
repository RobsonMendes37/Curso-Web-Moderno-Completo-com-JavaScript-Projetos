//cadeia de prototipos (prototype chain)

Object.prototype.attr0 = '0' //forma errada
                             //é prototipo pai absoluto,

const avo = {atrr1 : 'A'}
const pai = {__proto__: avo, attr2: 'B',atrr3 :'3'}
const filho ={ __proto__ : pai, atrr3 :'C'}
console.log(filho.attr0 , filho.atrr1,filho.attr2,filho.atrr3)



const carro = {
    velAtual : 0,
    velMax : 200,
    acelerarMais(delta){
        if(this.velAtual + delta <= this.velMax){
            this.velAtual+=delta
        }
        else {
            this.velAtual = this.velMax
        }
    },
    status(){
        return `${this.velAtual} Km/h de ${this.velMax}km/h`
    }
}

const ferrari = {
    modelo : 'F40',
    velMax : 324 //shadowing, sobrescrever uma variavel global de forma local

}

const volvo ={
    modelo : 'V40',
    status(){
        return `${this.modelo} : ${super.status()}` //super pega o metodo do prototipo
    }
}

Object.setPrototypeOf(ferrari,carro)
Object.setPrototypeOf(volvo,carro)

console.log(ferrari)
console.log(volvo)

volvo.acelerarMais(100)
console.log(volvo.status()) //ta pegando 200km do pai

volvo.acelerarMais(300)
console.log(volvo.status()) 