var produto = require("../models/produto")
var axios = require("axios")
const qs = require("querystring")

var produtoControlador = {}


//CREATE: inserir no banco - método POST
produtoControlador.inserir = function(req,res){
    produto.create({
        descricao: req.body.descricao,
        preco: req.body.preco
    })
    .then(function(dados){
            res.status(200).redirect("/produtos")
        }
    ).catch(function(erro){
            res.status(500).send("Erro ao inserir o produto: "+erro)
        }
    )
}


//READ: buscar no banco - método GET
//findOne (buscar um)
produtoControlador.buscarUm = function(req,res){
    produto.findOne({
        raw: true,
        where: {
            idproduto: req.params.id
        }
    }).then(
        function(dados){
            res.status(200).send(dados)
        }
    ).catch(
        function(erro){
            res.status(500).send(`Erro ao buscar pelo produto com o id ${req.params.id} informado: ${erro}`)
        }
    )
}

//findAll (buscar vários)
produtoControlador.buscarVarios = function(req,res){
    produto.findAll({
        raw: true
    }).then(
        function(dados){
            res.render("tabela",{produto: dados})
        }
    ).catch(
        function(erro){
            res.status(500).send(`Erro ao buscar os produtos: ${erro}`)
        }
    )
}



//UPDATE: atualizar um registro no banco - método PUT
produtoControlador.atualizar = function(req,res){
    produto.update({
        descricao: req.body.descricao,
        preco: req.body.preco
    },{
        where: {
            idproduto: req.params.id
        }
    }).then(
        function(dados){
            res.sendStatus(200)
        }        
    ).catch(
        function(erro){
            res.status(500).send("Erro ao atualizar o produto: "+erro)
        }
    )
}



//DELETE: remover dados do banco - método DELETE
produtoControlador.remover = function(req,res){
    produto.destroy({
        where: {
            idproduto: req.params.id
        }
    }).then(
        function(dados){
            res.sendStatus(200)
        }
    ).catch(
        function(erro){
            res.status(500).send("Erro ao remover o produto: "+erro)
        }
    )

}

//---------------------------------------------------Handlebars--------------------------------------------------------

//Solicitar novo formulário
produtoControlador.novoFormulario = function(req,res){
                res.render("novoForm")
}


//Atualizar formulário - com Axios
produtoControlador.editarFormulario = function(req,res){
    res.render("editarForm",{
        idproduto: req.params.id
    })
}


//Montar requisição Editar
produtoControlador.montarReqEdicao = function(req,res){
    axios.put("/produtos/" + req.params.id,
    qs.stringify({
        descricao: req.body.descricao,
        preco: req.body.preco
    }),
    {
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        proxy: {
            host: "18.119.140.197",
            PORTA: 3000
        }

    }).then(
        function(){
            res.status(200).redirect("/produtos");
            })
     
    .catch(
        function(err){
            res.status(500).send("Erro ao editar o produto: " + err);
        });
};


produtoControlador.montarReqDelete = function(req,res){
    axios.delete("/produtos/" + req.params.id,{
        proxy: {
            host: "18.119.140.197",
            PORTA: 3000
        }
    })
    .then(
        function(){
            res.status(200).redirect("/produtos");
            })
    .catch(
        function(err){
            res.status(500).send("Erro ao apagar um produto: " + err);
        });
};     

module.exports = produtoControlador
