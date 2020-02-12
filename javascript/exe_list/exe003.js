/* Crie uma função que recebe dois parâmetros, base e expoente, e 
retorne a base elevada ao expoente.
*/

//fç literal

function exponencial(a,b) {
    return a**b
}

console.log(exponencial(2,3))

//arrow function

const exponencial2 = (z,y) =>{
    console.log(Math.pow(z,y))
}

exponencial2(2,2)