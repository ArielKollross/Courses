// forEach()
const aprovado = ['A', 'B', 'C']

aprovado.forEach(function(nome, index, array){
    console.log(`${index +1}- ${nome} pertencente a ${array}`)
})

const listaNumero = [1,3,5,3,7,8,9,10,23,53,2,3]

listaNumero.sort()
console.log(listaNumero)

listaNumero.forEach(function(n){
    let maior = listaNumero[0]
    if(n > maior)
        maior = n
    return maior
})

