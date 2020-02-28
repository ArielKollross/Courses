const a = {name: "Teste"} // -> a esta alocada em um espaço de memoria 
console.log(a)

let b = a // b esta referenciada ao mesmo espaço de memoria com a
console.log(b)
//se  mudarmos o valor de b
b.name = "Ariel"
console.log("------mudando nome do objeto----------")
console.log(a) // vai mudar o valor, pois b.nome =.. mudou valor na memoria
console.log(b)

//isto ocorre para referenciacão de objetos, mas para tipos primitiso isso não acontece

let c = 13
let d = c
console.log(`: ${c}, d: ${d}`)
d = 15
console.log(`: ${c}, d: ${d}`)