// installer joi
// Le schema c'est l'example de ce que je veux
// datasource c'est ce que je récupére du body(ce que l'utilisateur me fournit)

function validate(schema, dataSource) {
    return async (req, res, next) => {
      try {
        await schema.validateAsync(req[dataSource]);
        next();
      } catch (error) {
        console.error(error);
        res.status(400).json({ error: 'Bad input error. Please try again later.' });
      }
    };
  }
  
  module.exports = validate;