
//coleção dinâmica, chave valor
const produto = new Object
produto.nome = "Sabre de Luz"
produto.cor = "verde"

console.log(produto)
delete pr
//criação literal
const client ={
    nome: "Batman",
    email: "batman@bat.com",
    endereço:{
        rua: "Mansão Wayne",
        numero: 0,

    },
    nomeFuncao: function name(params) {
        return params
    },
    funçao() {
        //...
    }
}

client.endereço.cidade = "Gotham"

console.log(client)

// Fç construtora

function Produtos(nome, preço, desconto) {
    // torna nome acessavel fora da função (publico)
    // de modo que este atributo pode ser alterado fora da fç
    this.nome = nome
    this.getPrecoComDesconto = () => {
        return preço*(1 - desconto*0.01)
    }
}

const produto1 = new Produtos("Sabre de Luz", 500.00 , 10)
console.log(produto1.getPrecoComDesconto())

//Fç Factory

function criarFuncionario(nome, salarioBase, faltas){
    return {
        nome,
        salarioBase,
        faltas,
        getSalario() {
            return (salarioBase/30.0)* (30 - faltas)
        }
    }
}

const funcionario1 = criarFuncionario("Homem de Ferro", 1500, 3)
console.log(funcionario1.getSalario())

//Object.create
const heroina = Object.create(null)
heroina.nome = "Mulher Maravilha"
console.log(heroina)
// é possivel alterar a const obj, devido ao objeto estar referenciado na memoria, e este
// local da memoria nao muda, mas seus atributos podem mudar
// nao podemos fazer, heroina = {nome: "aasdad"}
Object.freeze(heroina) // objeto nao pode ser mais alterado


const pessoaConstante = Object.freeze({nome: "Ariel"})
console.log(pessoaConstante)

//fç que retorna Objeto
const fromJSON = JSON.parse('{"info":"Sou um JSON"}')
console.log(fromJSON.info)