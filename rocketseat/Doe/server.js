//configurando o servidor
const express = require("express")
const server = express()

const port = 3000
const ip = 'localhost'

//configurando template engine
const nunjuks = require("nunjucks")
nunjuks.configure("./", {
    express: server,
    noCache: true,
})

//configurar servidro para exibir arquivos estáticos
server.use(express.static('public'))

//habilitar body no formulário
server.use(express.urlencoded({extended: true}))

//configurando banco de dados
const Pool = require('pg').Pool
const db = new Pool({
    user: 'postgres',
    password: '0000',
    host: 'localhost',
    port: 5432,
    database: 'doe'
})


//configurando a apresentação da página

//pegando as informações gravadas no banco de dados
server.get("/", (req,res) => {
    db.query("SELECT * FROM donors", (err, result) => {
        if (err) return res.send("Erro de seleção de banco")
        
        const donors = result.rows
        return res.render("index.html", {donors})
    })
})

server.post("/", (req, res) => {
    //pegar dados do formulário
    const name = req.body.name
    const email = req.body.email
    const blood = req.body.blood

    if(name == "" || email == "" || blood == ""){
        return res.send("Todos os campos são obrigatórios")
    }

    //coloar valores dentro do db
    const query = `INSERT INTO donors ("name","email","blood") 
            VALUES ($1, $2, $3)`

    const values = [name, email, blood]

    db.query(query, values,(err) =>{
        if(err) return res.send("Erro no banco de dados")
        

        return res.redirect("/")
    } )      

})

//ligar o servidor e realizar acesso na porta 3000
server.listen(port, ip , () => {
    console.log(`Servidor rodando em http://${ip}:${port}`)
    console.log('Para finalizar o servidor: ctrl + C')
})
