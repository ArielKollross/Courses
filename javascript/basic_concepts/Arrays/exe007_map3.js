const carrinho = [
    '{"nome": "A", "preco": 3.50}',
    '{"nome": "B", "preco": 7.50}',
    '{"nome": "C", "preco": 4.50}',
    '{"nome": "D", "preco": 2.50}',

]
//implementando map

Array.prototype.map2 = function(callback){
    const novoArray = []
    for(let i=0; i< this.length; i++){
        novoArray.push(callback(this[i], i, this))
    }
    return novoArray
}

const covnersorJSON = carrinho.map2( x => {return JSON.parse(x)} )
const getPreco = covnersorJSON.map2( p => 'R$ '+parseFloat(p.preco).toFixed(2).replace('.', ','))

console.log(getPreco)