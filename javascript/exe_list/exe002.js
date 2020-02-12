/* Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
triângulo).
*/

const triangleType = (a,b,c) => {
    if(a==b && a==c){
        return "Equilatero"
    }else if(a!=b && a!=c && b!=c ){
        return "Escaleno"
    }else{
        return "Isóceles"
    }
}

console.log(triangleType(1,1,1))
console.log(triangleType(2,2,1))
console.log(triangleType(3,4,5))