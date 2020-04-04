const alunos = [
    {name: "Aluno 1",grade: 7.6 },
    {name: "Aluno 2",grade: 9.6 },
    {name: "Aluno 3",grade: 4.7 },
    {name: "Aluno 4",grade: 7.3 },
    {name: "Aluno 5",grade: 6.6 },
    {name: "Aluno 6",grade: 8.0 },   
]

let sum = 0
let med = 0
let count = 0

function calcMedia(array) {
        sum += array.grade
        count++
        
        return  med = sum/count    
}

alunos.forEach(calcMedia)
console.log(med)


