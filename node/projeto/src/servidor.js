const porta = 3003

const express = require('express')
const app = express()
const bancoDeDados = require('./bancoDeDados')
const bodyParser = require('body-parser')


app.use(bodyParser.urlencoded({extented : true}))

app.get('/produtos',(req,res,next) =>{
    res.send(bancoDeDados.getProdutos())
})

app.get('/produtos/:id',(req,res,next) =>{
    res.send(bancoDeDados.getProduto(req.params.id))
})
app.post('/produtos',(req,res,next)=>{
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) //gera um JSON
})

app.put('/produtos/:id',(req,res,next)=>{
    const produto = bancoDeDados.salvarProduto({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) //gera um JSON
})

app.delete('/produtos/:id',(req,res,next)=>{
    const produto = bancoDeDados.excluirProduto(req.params.id)
    res.send(produto) //gera um JSON
})


app.listen(porta, () => {
    console.log(`Servidor execultando na porta ${porta}`)
})