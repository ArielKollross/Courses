const valor = "Global"

function minhaFuncao() {
    console.log(valor)    
}

function exec() {
    const valor = 'Local'
    minhaFuncao()
}

exec() // global
//contexto léxico que a fç foi escrita, vai pegar valor ="Global"


//Closuer -> nada mais é que o contexto léxico, ou seja
// o escopo que a fç é criada.

const x = "Global"

function fora() {
    const x = "local"
    function dentro() {
        return x
    }
    return dentro
}

const minhaFuncao2 = fora()
console.log(minhaFuncao2()) // local


// IIFE - Immediataly Invoked Function Expression
// esta protegia do escopo global
(function() {
    console.log('Função IIFE')
})