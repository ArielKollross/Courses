const obj1 = {}

function Obj(nome, email){
    this.nome = nome
    this.email = email
}
const obj2 = new Obj("Ariel","kollross@email.com" )

console.log(obj2.email)


// forma literal

function fun1() {}

//armazenar fç em uma variavel

const fun2 = function () {}

//armazenar em um array 
const array = [function(a,b){return a+b}, fun1, fun2]
console.log(array[0](2,3))

//armazenar em um atributo de objeto
const obj = {}
obj.falar = function () {return 'Oi'}
console.log(obj.falar())

//passar uma fç como parametro
function fun3(fun) {
    fun()
}

fun3(function () {console.log('Executando....')})

//fç pode retornar/conter uma fç
function soma(a,b){
    return function(c){
        console.log(a+b+c)
    }
}

soma(1,2)(3)
const quatroMais = soma(2,2)
quatroMais(5) // resultado = 9
