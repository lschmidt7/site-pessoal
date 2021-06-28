const express = require("express");
const connection = require('./database/database');
const Curso = require('./database/Curso');

connection.authenticate().then(() => {
    console.log("Conexão realizada");
});

const app = express();

const cors = require('cors')

app.use(cors())

app.get('/cursos',(req,res) => {
    Curso.findAll().then(cursos => {
        res.send(cursos);
    })
});

app.get('/insert-curso',(req,res) => {
    Curso.create({
        titulo: "Algoritmos e Programação do Zero com Portugol e Python",
        descricao: "Olá, Seja bem vindo ao curso de Algoritmos e Programação em Portugol e Python. Esse curso é destinado a todos que desejam iniciar seu aprendizado em desenvolvimento de software e conhecer os principais recursos em linguagens de programação.",
        imagem: "curso_algoritmos.jpg",
        horas: 11,
        aulas: 55,
        arquivos: 50,
        classificacao: 5,
        num_classificacoes: 2,
        alunos: 5
    })
})

app.listen(4000,function () {
    console.log("Servidor rodando na porta 4000");
})