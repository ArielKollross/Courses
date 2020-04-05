const alunos = [
    {name: "Aluno 1",grade: 7.6 },
    {name: "Aluno 2",grade: 9.6 },
    {name: "Aluno 3",grade: 4.7 },
    {name: "Aluno 4",grade: 7.3 },
    {name: "Aluno 5",grade: 6.6 },
    {name: "Aluno 6",grade: 8.0 },   
]

function GradeSum(array) {
    let sum = 0

    for(let i in array){
        sum += array[i].grade
    }
    return sum
}

function CalculateAvagare(array) {

    const sum = GradeSum(alunos)

    return sum/ array.length
}

console.log(CalculateAvagare(alunos))




