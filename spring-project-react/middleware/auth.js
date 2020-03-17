const jwt = require('jsonwebtoken');

module.exports = function(req, res, next) {
    const token = req.header('Authorization');

    if(!token) {
        return res.status(401).send({ error: 'No token' });
    };

    try {
        const verify = jwt.verify(token, 'spring');

        req.username = verify;
        next();
    } catch (error) {
        res.status(401).send({ error: 'Token is not valid' });
    }

};