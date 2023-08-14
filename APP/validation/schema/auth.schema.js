const Joi = require('joi');


// ma route pour authentifier c'est post donc je lui passe le schema de données
// que je veux verifier. Après "pattern" j'ai mis une regex (les caracteres authorisé)

const schemas = {
    post: Joi.object({
        email: Joi.string().pattern(/^[a-zA-Z0-9!#$%&'+/=?^_`{|}~-]+(?:.[a-zA-Z0-9!#$%&'+/=?^_`{|}~-]+)@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-][a-zA-Z0-9])?.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?$/).required(),
        password: Joi.string().required(),
    }).required(), // required = obligatoire
};

module.exports = schemas