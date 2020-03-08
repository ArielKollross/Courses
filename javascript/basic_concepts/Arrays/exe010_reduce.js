//reduce() tranformar o array em algo, por exemplo: numb, str, obj, array

const alunos = [
    {nome: 'Batman', nota: 10, bolsista: false},
    {nome: 'Homem de Ferro', nota: 10, bolsista: false},
    {nome: 'Homem Aranha', nota: 9, bolsista: true},
    {nome: 'DeadPool', nota: 3, bolsista: false}
]

const nota = alunos.map(a => a.nota).reduce(
    function(acumulador, atual){
        console.log(acumulador,atual) //passo a passo
        return acumulador + atual
})

/* nota -> arrya [10,10,9,3]
 acumulador = 10, atual = 10
 ------------logica-----------
 10 10 -> acomulador, atual -> return 10+10 = 20
20 9 -> acomulador = 20, atual = 9, 3o elemento, return 20 + 9 = 29
29 + 3 -> return 32

 */
console.log(nota)
 