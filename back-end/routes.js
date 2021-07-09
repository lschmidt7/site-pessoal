var express = require('express');
var router = express.Router();

const Curso = require('./database/Curso');
const User = require('./database/User');
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');


// ROUTES
router.get('/cursos',(req,res) => {
    Curso.findAll().then(cursos => {
        res.send(cursos);
    })
});

router.post('/curso',(req,res) => {
    Curso.findOne({
        where: {
            id: req.body.id
        }
    }).then(curso => {
        res.send(curso);
    })
})

router.post('/insert-curso',(req,res) => {
    Curso.create(req.body);
    res.send("Curso Cadastrado");
})

router.get('/insert-user',(req,res) => {
    User.create({
        first_name: 'Leonardo',
        last_name: 'Schmidt',
        email: 'leonardoschmabreu@gmail.com',
        password: bcrypt.hashSync('password', 8)
    })
})

module.exports = router;