function Carro(velMax = 200, delta = 5){
    //atributo privado, só pertence ao escolo da função,
    // ou seja, podemos definir com let, já que let fica apenas definido dentro do escopo
    let  velAtual = 0

    //método publico, permite que seja visivel fora da função
    // no caso estou defiinco a função acelar, e colocando o this, estou reforçando que 
    //ela esta dentro da função Carro, e não estou chamando ela de outro local do código
    this.acelerar = () => {
        while(velAtual < velMax){
            velAtual += delta;
            (velAtual > velMax)? velAtual =velMax : false
            console.log(velAtual)
        }
    }

    //metodo publico
    this.getVelAtual = () => {
        return velAtual
    }
}

const uno = new Carro
uno.acelerar()

const lamburguine = new Carro(400,46)
lamburguine.acelerar()
