const obj1 = {}

function Obj(nome, email){
    this.nome = nome
    this.email = email
}
const obj2 = new Obj("Ariel","arielkollross@email.com" )

console.log(obj2.email)