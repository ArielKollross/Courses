Array.prototype.filter2 = function(callback) {
    const newArray = []
    
    for(let i=0; i< this.length; i++){
        if(callback(this[i]))
            newArray.push(this[i])
    }
        return newArray
}

const produto = [
    {nome: 'Notebook', preco: 2499, fragil: true},
    {nome: 'sabdre de luz', preco: 67000, fragil: false},
    {nome: 'Espado de aço', preco: 2499, fragil: false},
    {nome: 'Arco e flecha', preco: 2499, fragil: true},
]

const produtoFrageis = p => p.fragil // n precisa do ==true
const caros = p => p.preco > 500

console.log(
    produto.filter2(produtoFrageis).filter2(caros)
    )