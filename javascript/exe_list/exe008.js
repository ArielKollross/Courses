/*
08)  Pedro joga N jogos de basquete por temporada. Para saber como está ele está progredindo, ele mantém
registro de todos os as pontuações feitas por jogo. Após cada jogo ele anota no novo valor e confere se o
mesmo é maior ou menor que seu melhor e pior desempenho. Dada uma lista string = “pontuação1 pontuação2
pontuação3 etc..”, escreva uma função que ao recebê-la irá comparar os valores um a um e irá retornar um
vetor com o número de vezes que ele bateu seu recorde de maior número de pontos e quando fez seu pior
jogo. (Número do pior jogo).

Obs.: O primeiro jogo não conta como novo recorde do melhor.
Exemplo:
String: “10 20 20 8 25 3 0 30 1”
Retorno: [3, 7] (Significa que ele bateu três vezes seu recorde de melhor pontuação e a pior pontuação
aconteceu no sétimo jogo.)
*/

const jogosAnalise = (n) => {

    const arr = n.split(' ').map(Number) // split -> transforma um str em array de str, map(Number) vai
    // converter cada elemento de str para number 
    const primeiroJogo = arr[0]

    let maior = arr[0]
    let menor = arr[0]
    let count = 0

    for(let i in arr){
        if(arr[i] == primeiroJogo) {
            count = 0
        }else if (arr[i] > maior) {
            maior = arr[i]
            count ++
        }
    }

    for(let k in arr){
        if(arr[k] < menor)
            menor = arr[k]
    }

    const resposta = []
    const piorJogo = arr.indexOf(menor)
    resposta.push(count, piorJogo + 1) //posicao inicial agora eh 1 e nao mais 0
    console.log(resposta)

}

jogosAnalise("10 10 10")
jogosAnalise("10 20 20 8 25 3 0 30 1")
jogosAnalise("50 49 20 49 30")