const sequencia = {
    _valor: 1, //convenção para valor privado
    get valor() {return this._valor++},
    set valor(valor) {
        if(valor > this._valor){
            this._valor = valor
        }
    }
}

console.log(sequencia.valor, sequencia.valor)

sequencia.valor = 100
//          (get, set)
console.log(sequencia.valor, sequencia.valor)
