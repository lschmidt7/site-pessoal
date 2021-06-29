const express = require("express");
const connection = require('./database/database');
const Curso = require('./database/Curso');
const User = require('./database/User');
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');


// conexão
connection.authenticate().then(() => {});

// express
const app = express();

app.use(
    express.urlencoded({
      extended: true
    })
  )
app.use(express.json())

// cors
const cors = require('cors');
app.use(cors())

// ROUTES
app.get('/cursos',(req,res) => {
    Curso.findAll().then(cursos => {
        res.send(cursos);
    })
});

app.post('/insert-curso',(req,res) => {
    console.log(req.body);
    Curso.create(req.body);
    res.send("resposta");
})

app.get('/insert-curso-test',(req,res) => {
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

app.get('/insert-user',(req,res) => {
    User.create({
        first_name: 'Leonardo',
        last_name: 'Schmidt',
        email: 'leonardoschmabreu@gmail.com',
        password: bcrypt.hashSync('password', 8)
    })
})

app.listen(4000,function () {
    console.log("Servidor rodando na porta 4000");
})