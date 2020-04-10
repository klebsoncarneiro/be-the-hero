const express = require('express');
const { celebrate, Segments, Joi } = require('celebrate');

const OngController = require('./controllers/OngController')
const IncidentController = require('./controllers/IncidentController')
const ProfileController = require('./controllers/ProfileController')
const SessionController = require('./controllers/SessionController')

const routes = express.Router();

/**
 * Tipos de parâmetros:
 * 
 * Query Params: Parâmetros nomeados enviados na toda após "?" (Filtros, paginação)
 * Route Params: Parâmetros utilizados para identificar recursos
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
 * Headers
 * Cookies
 * Signed Cookies
 */

routes.post('/sessions', SessionController.create);

routes.get('/ongs', OngController.index);
routes.post('/ongs', celebrate({
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().required().email(),
        whatsapp: Joi.string().required().min(10).max(11),
        city: Joi.string().required(),
        uf: Joi.string().required().length(2)
    })
}), OngController.create);

routes.get('/profile', celebrate({
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required()
    }).unknown()//nao validar restante dos headers implícitos
}), ProfileController.index);

routes.post('/incidents', celebrate({
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required()
    }).unknown()//nao validar restante dos headers implícitos
}), celebrate({//segunda validação
    [Segments.BODY]: Joi.object().keys({
        title: Joi.string().required(),
        description: Joi.string().required(),
        value: Joi.number()
    })
}), IncidentController.create);

routes.get('/incidents', celebrate({
    [Segments.QUERY]: Joi.object().keys({
        page: Joi.number()
    })
}), IncidentController.index);

routes.delete('/incidents/:id', celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required()
    })
}), IncidentController.delete);

//routes.delete('/incidents/', IncidentController.deleteAll);

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