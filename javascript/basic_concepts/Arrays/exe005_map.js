//map() tranforma os elementos de um array, retornando um novo array transformado

const numb = [1,2,3,4,5]
// map(callback)
const elevado2 = numb.map(num => {
    return num ** 2
})

console.log(elevado2)

const dobro = numb.map(function(n){
    return n*2
})

console.log(dobro)

const word = ['a','b','c']

const upperCase = word.map(function(n){
    return n.toUpperCase()
})

console.log(upperCase)

const mult2 = n => n*7
const real = n => 'R$ ' + parseFloat(n).toFixed(2).replace('.', ',')

const resultado = numb.map(mult2).map(real)
console.log(resultado)