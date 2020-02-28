const pessoa = {
    nome: "Ariel",
    idade: 26,
    endereco:{
        logardoro: "Rua ABC",
        numero: 666
    }
}

const {nome, idade} = pessoa
console.log(nome, idade)

const {nome: n, idade: i } = pessoa
console.log(n,i)

const {endereco: {logardoro, numero, cep}} = pessoa
console.log(logardoro, numero, cep)

//criando var com operador destructuring

const [a,b,c,d] = [3,4,5,67]
console.log(a,b,c,d)