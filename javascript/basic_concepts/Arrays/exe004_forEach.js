const aprovado = ['A', 'B', 'C']

//criando uma nova função 
Array.prototype.forEach2 = function(callback) {
    for(let i=0; i <this.length; i++){
        callback(this[i], i , this)
    }
}

aprovado.forEach2(function(nome, index, array){
    console.log(`${index +1}- ${nome} pertencente a ${array}`)
})
