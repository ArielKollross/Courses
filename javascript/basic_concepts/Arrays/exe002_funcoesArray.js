const carros = ['Ecplise', 'Lamburguine', 'Maverik', 'Opala', 'Supra']

// remove ultimo elemnto do array
carros.pop()
console.log(carros)

//add elemento array
carros.push('Supra x')
console.log(carros)
//remove 1o elemento
carros.shift() 
console.log(carros)

//add no 1o elemento
carros.unshift('Ecplise 95 turbo')
console.log(carros)

//splice, add e remover elementos

//(add a partir do elemento 1, e deletar 0 elemntos, elementos add)
carros.splice(1, 0, 'Hammer H2', 'Porche')
console.log(carros)

//remover
carros.splice(1,3) // removendo 3 elementos, a paritr do index 1
console.log(carros)

const newCarros = carros.slice(2) //novo array, retirando 2 primeiros elementos
console.log(newCarros)

const newCarros2 = carros.slice(1,3) // nao pega o elemento [3]
// voltar elmentos [1] e [2]
console.log(newCarros2)
