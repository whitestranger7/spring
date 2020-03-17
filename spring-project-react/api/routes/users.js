const express = require('express');
const db = require('../../db');
const jwt = require('jsonwebtoken');
const auth = require('../../middleware/auth');

const router = express.Router();

router.post('/signup', async (req, res) => {
    const { username, password, firstName, lastName, age } = req.body;

    const user = [[ null, username, password, firstName, lastName, age, null ]];
    
    try {
        await db.query(`INSERT INTO users VALUES ?`, [user], (error, result, fields) => {
            if (error) throw new Error('DB error');
        });

        jwt.sign({ username },
            'spring',
            { expiresIn: 36000 },
            (error, token) => {
                if(error) throw new Error('JWT Error');
                res.status(200).send({token});
        });

    } catch (error) {
        res.status(404).send({error: 'Server Error'});
    }
});

router.post('/login', (req, res) => {
    const validCredentials = {
        username: 'admin',
        password: '1234'
    };

    if (
        validCredentials.username === req.body.username &&
        validCredentials.password === req.body.password
    ) {
        res.status(202).send(req.body);
    } else {    
        res.status(403).send({ err: 'Unable to authorize' });
    }
});

module.exports = router;
