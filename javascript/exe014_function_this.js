const usuario = {
    msgInicial: "Logado!!",
    status() {
        console.log(this.msgInicial)
    }
}

usuario.status()

// nao consigo acessar esta função dentro da constante
const status = usuario.status
status() // conflito entre paradigimas: funcioanl e OO

const statusUsuario = usuario.status.bind(usuario)
statusUsuario()

/// Vai reotnar um valor indefinido, pois o this dentro do serInterval, não esta referenciado
// this pode variar conforme "quem" chama, neste caso o Objeto user2

// function user2() {
//     this.idade = 0
//     setInterval(function(){
//         this.idade++
//         console.log(this.idade)
//     },1000)
// }

// new user2

// function user2() {
//     this.idade = 0
//     setInterval(function(){
//         this.idade++
//         console.log(this.idade)
//     }.bind(this),1000)
// }

// new user2

// outra forma

function user2() {
    this.idade = 0
    const self = this
    setInterval(function(){
        self.idade++
        console.log(self.idade)
    },1000)
}

new user2


