function rand({min=0,max=1000}){ //paremetros dentro do operador destruction
                                 //em vez de fazer exemplo.mim,exemplo.max ao ter recebido um objeto como parametro
                                 // vai tirar o mim e max prontos sem 
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

const obj = {max :50,min:40} //cria um objeto
console.log(rand(obj))      //rand ja puxa altomaticamente o max e mim
console.log(rand({min:900})) 