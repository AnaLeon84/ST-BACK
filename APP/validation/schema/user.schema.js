// Je require le module JOI

const Joi = require('joi');

// Je crée ma variable qui va comporter les différents schémas

const schemas = {
  // Je crée les schémas
  // Le schéma en méthode 'post' le 'user'
  // J'utilise la fonction 'object' de JOI

  post: Joi.object({
    // Je lui précise que le name est une string et que cette donnée est obligatoire

    name: Joi.string().required(),

    // Je lui précise que l'email est une string sous une forme particulière
    // Ce patron de données (pattern) est une regex qui attribue les caractères autorisés et l'ordre
    // et que cette donnée est obligatoire

    email: Joi.string().pattern(/^[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?$/).required(),
    // Je lui précise que le password est une string et que cette donnée est obligatoire

    password: Joi.string().required(),
    // Je lui précise que le description est un nombre entier et que cette donnée est obligatoire
    
    description: Joi.string(),


  }).required(),
  put: Joi.object({
    name: Joi.string().required(),
    email: Joi.string().pattern(/^[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?$/).required(),
    password: Joi.number().integer().required(),
    description: Joi.string(),
  }).required(),
};

module.exports = schemas;

