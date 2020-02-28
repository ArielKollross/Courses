function compras(trabalho1,trabalho2){
    const comprarSorvete = trabalho1  || trabalho2
    const comprarTV50 = trabalho1 && trabalho2
    const comprarTV32 = trabalho1 != trabalho2
    const naoSorvete = !comprarSorvete

    return {comprarSorvete, comprarTV50, comprarTV32, naoSorvete} //criando obj só com valor

}

console.log(compras(false, false))

//ternário 
const resultado = nota => nota >= 7 ? 'Aprovado' : "Reprovado"
console.log(resultado(8))