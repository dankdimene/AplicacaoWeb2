var sequelize = require("sequelize")
var banco = require("../configs/banco_config")

var produto = banco.define("produto",{
    idproduto: {
        type: sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    descricao: {
        type: sequelize.STRING(50),
        allowNull: false,
    },
    preco: {
        type: sequelize.DECIMAL(10,2),
        allowNull: false,
    }
},{
    freezeTableName: true,
    timestamps: false
})

//produto.sync( )

module.exports = produto



