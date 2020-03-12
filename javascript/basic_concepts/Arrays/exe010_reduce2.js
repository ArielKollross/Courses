const alunos = [
    {nome: 'Batman', nota: 10, bolsista: false},
    {nome: 'Homem de Ferro', nota: 10, bolsista: false},
    {nome: 'Homem Aranha', nota: 9, bolsista: true},
    {nome: 'DeadPool', nota: 3, bolsista: false}
]


// Desafio 1: todos os alunos são bolsistas? R: falso

const bolsistas = alunos.map( e => e.bolsista).reduce(
    function(acumulador, atual){
        if(acumulador == false){
            return false
        }else{
            return true
        }
    })

    console.log(bolsistas)

const temBolsista = alunos.map( e => e.bolsista).reduce(
    (acumulador, atual) => {
        let count = 0
        while(atual==true){
            count++
        }
        console.log(count)
    })