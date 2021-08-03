var sequelize = require("sequelize")

var conexao = new sequelize("danistore","root","12345678",{
    host: "danistore.cqayiioxyiq4.us-east-2.rds.amazonaws.com",
    dialect: "mysql"
})

conexao.authenticate().then(
    function(){
        console.log("Conectado ao banco de dados...")
        }

    ).catch(
        function(erro){
        console.log("Erro ao conectar com o banco. Erro: "+erro)
        }
    )


module.exports = conexao