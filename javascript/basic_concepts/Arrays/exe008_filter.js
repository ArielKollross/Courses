// filter() criar um novo array resultante, baseado nos retornos verdadeiros ou falsos

const produto = [
    {nome: 'Notebook', preco: 2499, fragil: true},
    {nome: 'sabdre de luz', preco: 67000, fragil: false},
    {nome: 'Espado de aço', preco: 2499, fragil: false},
    {nome: 'Arco e flecha', preco: 2499, fragil: true},
]

console.log(produto.filter(function(p){
    return p.fragil == true &&
            p.preco > 500
}))

const produtoFrageis = p => p.fragil == true // n precisa do ==true
const caros = p => p.preco > 500

console.log(
    produto.filter(produtoFrageis).filter(caros)
    )