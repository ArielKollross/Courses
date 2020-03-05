/*
17)​ Um funcionário irá receber um aumento de acordo com o seu plano de
trabalho, de acordo com a tabela abaixo:
====================
| Plano | Aumento |
|  A    |  10%    |
|  B    |  15%    |
|  C    |   20%   |
-------------------
Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu
novo salário. Use a estrutura switch e faça um caso default que indique que o plano é inválido.
*/


function aumento(salario, plano) {

    switch(plano){
        case "A":
            const resA = salario*(1 + 10*0.01)
            console.log(
                resA.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
            )
            break
        case "B":
            const resB = salario*(1 + 15*0.01)
            console.log(
                resB.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
            )
            break
        case "C":
            const resC = salario*(1 + 20*0.01)
            console.log(
                resC.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
            )
            break
        default:
            console.log("Plano invaido, valores permitidos: A, B ou C.")
    }
   

}

aumento(1500,"C")