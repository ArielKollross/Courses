const carrinho = [
    '{"nome": "A", "preco": 3.50}',
    '{"nome": "B", "preco": 7.50}',
    '{"nome": "C", "preco": 4.50}',
    '{"nome": "D", "preco": 2.50}',

]
//retornar um array com os preços

const covnersorJSON = carrinho.map( x =>{
    return JSON.parse(x)
})

console.log(covnersorJSON)

