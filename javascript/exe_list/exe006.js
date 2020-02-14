/*
Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos.
*/

function jurosSimples(capitali0,juros, tempoAplicação){
    const valor = (capitali0*juros*tempoAplicação)
    return 'Juros Simples: '+ valor.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})
    //tempoAplicação [mẽs]
    //juros [%]
}

const jurosCompostos = (capitali0,juros,tempoAplicação) => {
    const valor = (capitali0 * (1 + juros*tempoAplicação ))
    return 'Juros Composto: ' +valor.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})
}

console.log(jurosSimples(1000,7.5,10), jurosCompostos(1000,7.5,10))