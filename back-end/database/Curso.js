const Sequelize = require('sequelize');

const connection = require('./database');

const Curso = connection.define('curso',{
    titulo: {
        type: Sequelize.STRING,
        allowNull: false
    },
    descricao: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    imagem: {
        type: Sequelize.STRING,
        allowNull: false
    },
    horas: {
        type: Sequelize.SMALLINT,
        allowNull: false
    },
    aulas: {
        type: Sequelize.SMALLINT,
        allowNull: false
    },
    arquivos: {
        type: Sequelize.SMALLINT,
        allowNull: false
    },
    classificacao: {
        type: Sequelize.TINYINT,
        allowNull: true
    },
    num_classificacoes: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    alunos: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
})

Curso.sync({force: false}).then(() => {
    console.log("TABELA CURSO CRIADA")
})

module.exports = Curso;