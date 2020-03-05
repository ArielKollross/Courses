/*
19) ​ O cardápio de uma lanchonete é o seguinte:
=======================================
Código Descrição do Produto Preço
---------------------------------------
100     Cachorro Quente         R$ 3,00
200     Hambúrguer Simples      R$ 4,00
300     Cheeseburguer           R$ 5,50
400     Bauru                   R$ 7,50
500     Refrigerante            R$ 3,50
600     Suco                    R$ 2,80
----------------------------------------
Implemente uma função que receba como parâmetros o código do item pedido, a quantidade e calcule o valor
a ser pago por aquele lanche. Considere que a cada execução somente será calculado um item. Use o
comando switch. Crie um caso default para produto não existente.
*/

function conta(codItem, quantidade) {

    switch(codItem){
        case 100:
            total = 3*quantidade
            console.log(
                total.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
            )
            break
        case 200:
            total = 4*quantidade
            console.log(
                total.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
            )
            break
        case 300:
            total = 5.5*quantidade
            console.log(
                total.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
            )
            break;
        case 400:
            total = 7.5*quantidade
            console.log(
                total.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
            )
            break;
        case 500:
            total = 3.5*quantidade
            console.log(
                total.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
            )
            break;
        case 600:
            total = 2.8*quantidade
            console.log(
                total.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
            )
            break;
        default:
            console.log("Produto inexistente")
    }
}

conta(200, 4)