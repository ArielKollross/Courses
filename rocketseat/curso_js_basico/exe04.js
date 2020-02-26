const experiencia = (anos) => {  
    if( anosEstudo <= 1){
        console.log("Iniciante")
    }else if( anosEstudo <= 3){
        console.log("Intermediário")
    }else if(anosEstudo <= 6){
        console.log("Avançado")
    }else{
        console.log("Jedi Master")
    }
}

    let anosEstudo = 3
    experiencia(anosEstudo)
    // De 0-1 ano: Iniciante
    // De 1-3 anos: Intermediário
    // De 3-6 anos: Avançado
    // De 7 acima: Jedi Master