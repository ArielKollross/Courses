// 12)​ Faça um algoritmo que calcule o fatorial de um número.

function fatorial(n){
    if(n < 0 || (Number.isInteger(n) == false) ){
        return (`${n} é um número invalido`)
    }else if(n == 1 || n == 0){
        return (`fatorial de ${n}! = 1`)
    }else{
        // let resposta = 1
        // for(let i=n;i>1; i--){
            // resposta *= i
        // }

        //return (resposta)

        return n*fatorial(n-1)
    }
}

console.log(fatorial(3))