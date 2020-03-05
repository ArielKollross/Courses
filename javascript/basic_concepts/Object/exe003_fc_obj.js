const pessoa = {
    nome: "Ariel",
    idade: 13,
    peso: 55
}

console.log(Object.keys(pessoa)) 
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa)) // tranforma num arraty, com sub arrays com chave, valor

Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave} : ${valor}`)  
})

Object.defineProperty(pessoa, 'dataNascimento',{
    enumerable: true,
    writable: false,
    value: '01/01/2019'
})

pessoa.dataNascimento = "dsda" // nao vai ser setado, pois o obj esta protegido
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

const dest = {a: 1}
const obj1 = {b: 2}
const obj2 = {c: 3, a: 1000}
const obj = Object.assign(dest, obj1, obj2) 
// add obj 1 e 2 dentro de dest
console.log(obj)
