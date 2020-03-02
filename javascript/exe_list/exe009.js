/*
09)​ Construa uma função para um sistema de notas de uma instituição que possui a seguinte política de
classificação: Todo aluno recebe uma nota de 0 a 100. Alunos com nota abaixo de 40 são reprovados. As notas
possuem a seguinte regra de arredondamento: Se a diferença entre a nota e o próximo múltiplo de 5 for menor
que 3, arredondar a nota para esse próximo múltiplo de 5. Se a nota for abaixo de 38, não é feito nenhum
arredondamento pois esta nota resulta na reprovação do aluno. Por exemplo, a nota 84 será arredondada para
85, mas a nota 29 não será arredondada por ser abaixo de 40 e não ser possível arredondamento eficiente, ou
seja, que evite a reprovação do aluno. No caso de a nota ser 38, o arredondamento é possível pois atingirá 40
e o aluno será aprovado.
*/

function statusAlunos (nota) {

    let status = ''

    if(nota < 38){
        status = 'reprovado'
        console.log(`Aluno ${status}, com nota: ${nota} `)
    }else{
        status = 'Aprovado'
        console.log(`Aluno ${status}, com nota: ${arrendondarNota(nota)} `)
    }
}

function arrendondarNota (nota) {
    //sempre vai ocorrer arredondamentos para cima, logo so precisamos testar se a nota arrendondada eh
    //divisivel por 5
    if(nota%5 == 0){
        //nota nao precisa ser arredondada
        return nota
    }

    let arredondamento = []
    // tudo isto poderia ser colocado dentro do array, nao precisando usar o metodo push
    const arredondamento1 = (nota + 1)%5 == 0 ? (nota +1) : false
    const arredondamento2 = (nota + 2)%5 == 0 ? (nota +2) : false
    const arredondamento3 = (nota + 3)%5 == 0 ? (nota +3) : false
    const arredondamento4 = (nota % 5)   != 0 ? nota      : false
    arredondamento.push(arredondamento1, arredondamento2, arredondamento3, arredondamento4)

    for(let i in arredondamento){
        if(arredondamento[i])
            return arredondamento[i]
    }
}

statusAlunos(76)
// 67 - > comprar com 65 e 70, 67-65 = 2 , 67 - 70 = -3 