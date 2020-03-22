const express = require('express');
const auth = require('../../middleware/auth');

const router = express.Router();

const projectsList = [
    {
        img: 'img/spring-boot-icon.svg',
        alt: 'boot-icon',
        header: 'Spring Boot',
        description:
            'Takes an opinionated view of building Spring applications and gets you up and running as quickly as possible.'
    },
    {
        img: 'img/spring-logo-icon.svg',
        alt: 'spring-icon',
        header: 'Spring Framework',
        description:
            'Provides core support for dependency injection, transaction management, web apps, data access, messaging and more.'
    },
    {
        img: 'img/spring-data-icon.svg',
        alt: 'data-icon',
        header: 'Spring Data',
        description:
            'Provides a consistent approach to data access – relational, non-relational, map-reduce, and beyond.'
    },
    {
        img: 'img/spring-cloud-icon.svg',
        alt: 'cloud-icon',
        header: 'Spring Cloud',
        description:
            'Provides a set of tools for common patterns in distributed systems. Useful for building and deploying microservices.'
    }
];

router.get('/list', auth, (req, res) => {

    if(req.query.search) {
        const matchItems = projectsList.filter(el => {
            return el.header.toLowerCase().includes(req.query.search.toLowerCase());
        })  
        res.status(200).send(matchItems);
    }else {
        if (projectsList.length > 0) {
            res.status(200).send(projectsList);
        } else {
            res.status(404).send("There's no items");
        }
    }
});

module.exports = router;