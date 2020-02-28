// var é uma variavel goblal
{{{{var hks = "oi"}}}} //var é definida dentro de todo o escopo
console.log(hks)

{let a = "2 Oi"} // let só esta definida dentro do bloco
//console.log(a) // Erro!

// var em funções, não é fedinida globalmente
const teste = () => {
    var local = 123
    console.log(local)
}
//console.log(local) // Erro
teste() // ou seja, var só esta disponivel dentro do bloco

let number = 1
{
    let number = 2 
    console.log('dentro =',number)        
}

const numero = () =>{
    let number = 3
    console.log(number)
}
console.log('função = ') 
numero()
console.log('fora =',number)
