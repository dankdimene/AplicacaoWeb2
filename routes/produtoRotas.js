var express = require("express")
var produtoControlador = require("../controllers/produtoControlador")

var rotas = express.Router()

//Rotas da API
rotas.post("/produtos",produtoControlador.inserir)
rotas.get("/produtos/:id",produtoControlador.buscarUm)
rotas.get("/produtos",produtoControlador.buscarVarios)
rotas.put("/produtos/:id",produtoControlador.atualizar)
rotas.delete("/produtos/:id",produtoControlador.remover)

//Rotas das páginas
rotas.get("/cadastrar",produtoControlador.novoFormulario) //Retorna a página de cadastro
rotas.get("/editar/:id",produtoControlador.editarFormulario)  //Retorna a página de edição
rotas.post("/ediReq/:id",produtoControlador.montarReqEdicao)  //Monta a requisição de edição
rotas.get("/remover/:id",produtoControlador.montarReqDelete)  //Monta a requisição de remoção


module.exports = rotas