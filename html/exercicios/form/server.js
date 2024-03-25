const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true})) //le o corpo da requisição, isto é o{ name: }de input

//é o servidor que responde a /usuarios
app.post('/usuarios',(req,resp)=>{
    console.log(req.body)
    resp.send(`<h1>Parabéns </h1>`)
})

app.post('/usuarios/:id',(req,resp)=>{
    console.log(req.params.id)
    console.log(req.body)
    resp.send(`<h1>Parabéns.Usuario Alterado </h1>`)
})

app.listen(3003)





//npx nodemon server.js