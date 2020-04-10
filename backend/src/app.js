const express = require('express');
const cors = require('cors');
const {errors} = require('celebrate');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());//antes das requisicoes, express vai no body e converte json em objeto
app.use(routes);
app.use(errors());//evita erro 500 quando gerar um erro de validação

module.exports = app;