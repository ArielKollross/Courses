/*
11) ​ As regras para o cálculo dos anos bissextos são as seguintes:
De 4 em 4 anos é ano bissexto;
De 100 em 100 anos não é ano bissexto;
De 400 em 400 anos é ano bissexto;
Prevalecem as últimas regras sobre as primeiras.
Partindo daí elabore uma função que recebe um ano e calcula se ele é ano bissexto, imprimindo no console a
mensagem e retornando true ou false.
*/

function anoBissexto(ano) {
    if(ano%400 == 0){ //if(ano%400) -> sempre vai retornar true, independente do ano que colocar
        return true
    }else if (ano%100 != 0 && ano%4 == 0) {
        return true
    }else{
        return false
    }
}

console.log(anoBissexto(2020)) // true
console.log(anoBissexto(1600)) // true
console.log(anoBissexto(2021)) // false
console.log(anoBissexto(1900)) // falso