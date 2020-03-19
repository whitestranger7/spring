const express = require('express');
const db = require('../../sequelize');
const jwt = require('jsonwebtoken');
const User = require('../../models/User');
const auth = require('../../middleware/auth');

const router = express.Router();
router.post('/login', async (req, res) => {
    
    const user = req.body;

    try {
        const foundUser = await User.findAll({
            where: {
                username: user.username,
                password: user.password
            }
        });
        
    } catch (error) {
        res.send(404).send(error);
    }

});

router.post('/signup', async (req, res) => {
    const user = req.body;

    try {
        const newUser = await User.create({
            username: user.username,
            password: user.password,
            firstName: user.firstName,
            lastName: user.lastName,
            age: user.age
        });

        const id = newUser.id;

        jwt.sign(
            { id },
            'spring',
            { expiresIn: 36000 },
            (error, token) => {
                if (error) res.status(400).send({ error: 'JWT Error' });
                res.status(201).send({ token });
            }
        );

    } catch (error) {
        res.status(404).send(error);
    }
});

module.exports = router;
