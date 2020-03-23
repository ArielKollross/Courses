const express = require('express')

const app = express()
//app.listen(3333)

const ip = 'localhost'
const port = 3333

app.get('/', (request, response) =>{
    return response.json({
        evento: 'Semana OmniStack 11',
        Aluno: 'Ariel Kollross'
    })
})

//ligar o servidor e realizar acesso na porta 3000
app.listen(port, ip , () => {
    console.log(`Servidor rodando em http://${ip}:${port}`)
    console.log('Para finalizar o servidor: ctrl + C')
})