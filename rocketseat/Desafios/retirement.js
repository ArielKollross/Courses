const retirement = (name, gender, age, contribution) => {

    let femaleRetirement = (gender == 'female' && 
                            contribution >= 30 && 
                            contribution+age >= 85 ) ? statusF = true : statusF = false

    let maleRetirement = (gender == 'male' && 
                        contribution >= 35 &&
                        contribution + age >= 95 ) ?  statusM = true : statusM =false
    
    if(femaleRetirement || maleRetirement ){
        console.log(`${name} vc pode se aponsentar`)
    }else{
        console.log(`${name} vc não pode se aponsentar`)
    }
}

retirement('sharon', 'female', 24, 0)
retirement('idoso', 'male', 67, 35)