const usuarios = [
    { nome: "Carlos", tecnologias: ["HTML", "CSS"] },
    { nome: "Jasmine", tecnologias: ["JavaScript", "CSS"] },
    { nome: "Tuane", tecnologias: ["HTML", "Node.js"] }
  ];

function skillCSS (array){
    if(array.tecnologias.find(el => el =='CSS'))
       return console.log(`O usuário ${array.nome} trabalha com CSS`)
}

usuarios.forEach(skillCSS)