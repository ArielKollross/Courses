const soma = function(a,b){
    return a+b
}

const printResultado = function (a,b, operacao = soma){
    console.log(operacao(a,b))
}

printResultado(4,10)
printResultado(3,3,soma) 
printResultado(3,6, function(x,y){
    return x**y
})

printResultado(1,1, (x,y) => x -y) // x=1, y=1, funções arrow são sempre anonimas