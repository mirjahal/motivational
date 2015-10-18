var quoteController = require('../controllers/quoteController');
var Joi = require('joi');

var paramValidate = {
    id: Joi.number().integer().min(1)
};

var payloadValidate = {
    author: Joi.string().required(),
    text: Joi.string().required()
};

module.exports = [
    {
        method: 'GET',
        path: '/quote',
        config : {
            handler: quoteController.list
        }
    },
    {
        method: 'GET',
        path: '/quote/{id}',
        config : {
            validate: {
                params: paramValidate
            },
            handler: quoteController.show
        }
    },
    {
        method: 'POST',
        path: '/quote',
        config: {
            payload: {
                allow: 'application/json'
            },
            validate: {
                payload: payloadValidate
            },
            handler: quoteController.create
        }
    },
    {
        method: 'PATCH',
        path: '/quote/{id}',
        config: {
            payload: {
                allow: 'application/json'
            },
            validate: {
    		    params: paramValidate,
                payload: payloadValidate
            },
            handler: quoteController.update
        }
    },
    {
        method: 'DELETE',
        path: '/quote/{id}',
        config: {
            payload: {
                allow: 'application/json'
            },
            validate: {
                params: paramValidate
            },
            handler: quoteController.destroy
        }
    }
];

