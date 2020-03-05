// Objesct.preventExtensions
// não deixa add novos atibutos, mas pode-se mudar e excluir os já existentes

const produto = Object.preventExtensions({
    nome: "ASSASAs",
    preco: 10.00,
    tag: "Gold"
})
console.log('Extensivel:', Object.isExtensible(produto)) // testa se foi criada com preventExtensions
produto.class = "não vai ser add" // n conseguimos add novos atributos
produto.nome = "Sabre de Luz" // mudamos o nome
delete produto.tag // deletamos o atributo
console.log(produto)

//Object.seal
// nao consegue add nem remover novos atributos, mas consegue modifica-los
const pessoa = {nome: "Ariel"}
Object.seal(pessoa)
pessoa.nome = "Kollross" // vai mudar a informação dentor do atributo
delete pessoa.nome // não vai excluir
console.log(pessoa, "Selado: " + Object.isSealed(pessoa))

//Object.freeze   
// não pode nem add, nem remover, nem editar atributos