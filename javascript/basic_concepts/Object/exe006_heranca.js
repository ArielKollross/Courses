function Aula(nome, VideoID){
    this.nome = nome
    this.VideoID = VideoID
}

const aula1 = new Aula("Aula 0", 1)
const aula2 = new  Aula("funções", 281)
console.log(aula1, aula2)

// simulando o que "new" faz.
function novo(f, ...params){
    const obj = {}
    obj.__proto__ = f.prototype
    f.apply(obj, params)
    return obj
}
 
const aula3 = novo(Aula,"Aula 02", 82)
console.log(aula3)