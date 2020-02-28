/*
08) ​ Pedro joga N jogos de basquete por temporada. Para saber como está ele está progredindo, ele mantém
registro de todos os as pontuações feitas por jogo. Após cada jogo ele anota no novo valor e confere se o
mesmo é maior ou menor que seu melhor e pior desempenho. Dada uma lista string = “pontuação1 pontuação2
pontuação3 etc..”, escreva uma função que ao recebê-la irá comparar os valores um a um e irá retornar um
vetor com o número de vezes que ele bateu seu recorde de maior número de pontos e quando fez seu pior
jogo. (Número do pior jogo).
*/

const jogosAnalise = (par1, ...parN) => {
    const lista = []
    lista.push(par1, ...parN)
    lista.shift()
    let maior = lista[0]
    let menor = lista[0]

    function gamefilter() {
        for(let i in lista){
            if(lista[i] >= maior)
                maior = lista[i]
            if(lista[i] <= menor)
                menor = lista[i]
        }
        const res = []
        res.push(maior, menor)
        console.log(res)
    }
    gamefilter()
}

jogosAnalise(7,2,3,4)