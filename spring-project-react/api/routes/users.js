const express = require('express');

const router = express.Router();

router.post('/login', (req, res) => {

    const validCredentials = {
        username: 'admin',
        password: '1234'
    };

    if(validCredentials.username === req.body.username && validCredentials.password === req.body.password) {
        res.status(202).send(req.body);
    }else {
        res.status(403).send({err: 'Unable to authorize'});
    }
    
});

module.exports = router;