const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());//antes das requisicoes, express vai no body e converte json em objeto
app.use(routes);

app.listen(3333);