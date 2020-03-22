const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {
    
    const token = req.header('Authorization');

    if(!token) {
        return res.status(401).send({ error: 'No token' });
    };

    const verify = jwt.verify(token, 'spring');
    if(verify) {
        req.username = verify;
        next();
    }

};

module.exports = auth;