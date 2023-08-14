
const isLogged =(req, res, next) => {  // on écrit "next" car il s'agit d'un middleware, donc pour pouvoir passer au suivant.
    const token = req.headers.authorization;
    if (!token) {
        return res.status(401).json({ error: 'Tu n\'es pas authentifié!' });
    }
    return next()
}

module.exports = isLogged;