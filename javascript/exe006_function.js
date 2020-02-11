// função anonima
const imprimirSoma = function (a,b){
    console.log(a+b)
}

imprimirSoma(24,5)

//função arrow
// "=>" subistitui a "function"
const soma = (a,b) => {
    console.log(a+b)
}
soma(1,12)

//retorno implicito
const subtracao = (a,b) => a-b

console.log(subtracao(10,5))

