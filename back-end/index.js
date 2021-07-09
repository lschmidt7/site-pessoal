const express = require("express");
const connection = require('./database/database');

const routes = require('./routes');


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

app.use('/',routes);

app.listen(4000,function () {
    console.log("Servidor rodando na porta 4000");
})