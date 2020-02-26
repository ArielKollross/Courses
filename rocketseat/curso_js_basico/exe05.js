
let usuarios =
 [{  nome: "Diego",
    habilidades: ["Javascript", "ReactJS", "Redux"]  }, 
 {  nome: "Gabriel", 
    habilidades: ["VueJS", "Ruby on Rails", "Elixir"]  
}]

const checkUser = () =>{
    for( let i of usuarios){
        console.log(`${i.nome} tem as seguintes habilidades: ${i.habilidades.join()}`)
    }        
}

console.log(checkUser(usuarios))