const DevSkills = {
    name: "Ariel Kollross",
    age: 26,
    especialty: "Web skills",
    tecnology: [
        {name: "JavaScript", especialty: "Fullstack"},
        {name: "Python", especialty: "Scientific programming"},
        {name: "C", especialty: "Physics and Math programming"},
        {name: "Php", especialty: "Learning"},
        {name: "C++", especialty: "College Study only"}
    ]
}

console.log(`
${DevSkills.name} tem ${DevSkills.age} anos e usa tecnologia ${DevSkills.tecnology[0].name} em 
${DevSkills.tecnology[0].especialty}
`)

