const usuarios = [
  { nome: "Carlos", tecnologias: ["HTML", "CSS"] },
  { nome: "Jasmine", tecnologias: ["JavaScript", "CSS"] },
  { nome: "Tuane", tecnologias: ["HTML", "Node.js"] }
];


function userSkills (array){
    return console.log(`${array.nome} trabalha com ${array.tecnologias}`)
}

usuarios.forEach(userSkills)