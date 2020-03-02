/*
10) ​ Crie uma função que verifica se um número inteiro passado como parêmetro é divisível por 3 e retorne true
ou false.
*/

const divisivel3 = (number) => {
    if(Number.isInteger(number) ){
        divisor3(number)
    }else{
        console.log(`${number} nao eh inteiro, coloque outro numero!`)
    }
    
    function divisor3() {
         if(number%3 == 0){
            console.log(`${number} eh divisivel por 3`)
        }else{
            console.log(`${number} nao eh divisivel por 3`)
        }
    }
  
}

divisivel3(3)
divisivel3(1.1)
divisivel3(7)