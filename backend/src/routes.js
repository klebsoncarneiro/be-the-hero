const express = require('express');

const OngController = require('./controllers/OngController')
const IncidentController = require('./controllers/IncidentController')
const ProfileController = require('./controllers/ProfileController')
const SessionController = require('./controllers/SessionController')

const routes = express.Router();

/**
 * Tipos de par�metros:
 * 
 * Query Params: Par�metros nomeados enviados na toda ap�s "?" (Filtros, pagina��o)
 * Route Params: Par�metros utilizados para identificar recursos
 * Request Body: Corpo da requisi��o, utilizado para criar ou alterar recursos
 */

routes.post('/sessions', SessionController.create);

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.post('/incidents', IncidentController.create);
routes.get('/incidents', IncidentController.index);
routes.delete('/incidents/:id', IncidentController.delete);

routes.get('/profile', ProfileController.index);

/*
routes.get('/users', (request, response) => {
    //return response.send('Hello World')
    const params = request.query;// ?nome=Klebson

    console.log(params);

    return response.json({
        evento: 'Semana OmniStack 11.0',
        aluno: 'Klebson Carneiro',
        rota: 'get /users'
    });
});

routes.get('/users/:id', (request, response) => {
    const params = request.params;

    console.log(params);

    return response.json({
        evento: 'Semana OmniStack 11.0',
        aluno: 'Klebson Carneiro',
        rota: 'get /users/:id'
    });
});

routes.post('/users', (request, response) => {
    const body = request.body; //enviou um json

    console.log(body);

    return response.json({
        evento: 'Semana OmniStack 11.0',
        aluno: 'Klebson Carneiroooooo',
        rota: 'post /users/'
    });
});
*/
module.exports = routes;