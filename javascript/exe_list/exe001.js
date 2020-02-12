/*Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração,
multiplicação e divisão desses valores.*/

// forma litertal

function calcular(a,b){
    sum = a+b
    sub = a-b
    mult = a*b
    div = a/b
    console.log(sum, sub, mult, div)
}

calcular(1,2)

// arrow function

let calcular2 = (a,b) =>{
    sum = a+b
    sub = a-b
    mult = a*b
    div = a/b
    console.log(sum, sub, mult, div)
}

calcular2(2,5)
