var express = require("express")
var handlebars = require("express-handlebars")
var rotas = require("./routes/produtoRotas")

var aplicacao = express()
var PORTA = 3000

//configuração do handlebars no projeto
aplicacao.engine("handlebars", handlebars({defaultLayout:"main"}))
aplicacao.set("view engine","handlebars")

aplicacao.use(express.urlencoded({extended:true}))
aplicacao.use(rotas)

aplicacao.listen(PORTA,function(){
    console.log(`Servidor executando na porta ${PORTA}...`)
})