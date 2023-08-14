
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const dataMapper = require('../models/dataMapper');

const authController = {
  
  async login(req, res) {
    const { email, password } = req.body;

        // On vérifie qu'on a le mail dans notre bdd
    const result = await dataMapper.getOneUserByEmail(email);

    if (!result) {
      return res.status(401).json({ message: 'E-mail ou mot de passe incorrecte' });
    }
    const isMatchingPassword = await bcrypt.compare(password, result.password);

    if (!isMatchingPassword) {
      return res.status(401).send({ errorMessage: 'E-mail ou mot de passe incorrecte' });
    }
    result.isLogged = true;
   
    const token = jwt.sign(result, process.env.JWT_SECRET, { expiresIn: '1d' });
    res.status(200).json({ token });
  },
};

module.exports = authController;