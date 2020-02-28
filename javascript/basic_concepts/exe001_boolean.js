//let nome = 'Ariel'
let nome = ''
// se noem for verdadeiro, retorna o nome, se não, volta a msg
console.log(nome || "Nenhum nome encontrado") 
console.log(typeof nome)
// !! -> "transforma" em um valor booleano
console.log(!!nome) 

//são falsos:
console.log(!!(0 || '' || null || NaN || undefined ))
// são verdadeiro
let isTrue = 13
console.log(!!(3 || -1 || ' ' || 'strg' || [] || {} || Infinity ||  isTrue ))