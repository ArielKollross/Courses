
//calculo imc

function imc(name, weight, height, gender) {
    let imc = (weight / height**2).toFixed(2)

   if(imc >= 30){
       console.log(`${name}, seu IMC:${imc}, vc  esta acima do peso`)
   } else{
       console.log(`${name}, seu IMC:${imc}, vc não esta acima do peso`)
   }
}

const name = 'fulano'
const weight = 89.8
const height = 1.60

imc(name, weight, height)

imc('sharon', 50, 1.63)

imc('ariel', 63, 1.77)