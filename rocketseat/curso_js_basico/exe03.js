const  temHabilidade = (skills) =>  { 
    for(let i in skills){
        skills.indexOf("Javascript", skills)
        return true + ", no elemento de posição " + i
    }
}
    
let skills = ["Javascript", "ReactJS", "React Native"]
console.log(temHabilidade(skills)) // true ou false