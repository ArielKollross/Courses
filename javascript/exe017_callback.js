callback

const fabricante = ["Mercedes","Audi", "BMW"]

function imprimir(nome, indice) {
    console.log(`${indice +1}, ${nome}`)
}

fabricante.forEach(imprimir)

let user = ["Alice", "Bob", "Batman"]


imprimirUser = (nome, index, user) => {
    console.log(`${index +1}, ${nome}`)
}

user.forEach(imprimirUser)

// sem callback
let notas = [7.7, 6.5, 8.2, 5.8]

let notasBaixas = []
for(let i in notas){
    if(notas[i] < 7){
        notasBaixas.push(notas[i])
    }
}
console.log(notasBaixas)

//com callback

let notasBaixas2 = notas.filter( nota => nota <= 7)
console.log(notasBaixas2)

