//fç lietral
// let dobro = function(a) {
//     return 2*a
// }


// Arrow

// dobro = (a) => {
//     return 2*a
// }

dobro = a => 2*a // retorno implicito
console.log(dobro(500))

// this não varai com arrow function

function user() {
    this.idade = 0

    setInterval(()=>{
        this.idade++
        console.log(this.idade)
    },1000)
}

new user