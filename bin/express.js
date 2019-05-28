const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const variables = require('../bin/configuration/variables');
const cors = require('cors');

// Routers
const motoristaRouter = require('../routes/motorista-router');
const viagemRouter = require('../routes/viagem-router');
const caminhaoRouter = require('../routes/caminhao-router');
const usuarioRouter = require('../routes/usuario-router');

// Criando/Invocando a Api/Server Web do Express
const app = express();

app.use(cors());

// Configuração de parse do JSON
app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ limit: '10mb', extended: false }));

// Mongoose - Configurando a conexão com banco de dados
const url = variables.Database.connection;
const options = {
    reconnectTries: Number.MAX_VALUE,
    reconnectInterval: 500,
    poolSize: 5,
    useNewUrlParser: true
};
 
mongoose.connect(url, options);
mongoose.set('useCreateIndex', true);

mongoose.connection.on('error', (err)=>{
    console.log('Erro na conexão com o banco de dados: ' + err);
});

mongoose.connection.on('connected', () => {
    console.log('Aplicação conectada do banco de dados com sucesso.');
});

mongoose.connection.on('disconnected', () => {
    console.log('Aplicação desconectada do banco de dados');
});

// Configurando as rotas
app.use('/api/motorista', motoristaRouter);
app.use('/api/viagem', viagemRouter);
app.use('/api/caminhao', caminhaoRouter);
app.use('/api/usuario', usuarioRouter);

// Exportando nossa Api
module.exports = app;