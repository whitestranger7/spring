// import bootIcon from './img/spring-boot-icon.svg';
// import springIcon from './img/spring-logo-icon.svg';
// import dataIcon from './img/spring-data-icon.svg';
// import cloudIcon from './img/spring-cloud-icon.svg';

//icons
// const bootIcon = require('../../client/src/config/img/spring-boot-icon.svg');
// const springIcon = require('../../client/src/config/img/spring-logo-icon.svg');
// const dataIcon = require('../../client/src/config/img/spring-data-icon.svg');
// const cloudIcon = require('../../client/src/config/img/spring-cloud-icon.svg');

const express = require('express');

const router = express.Router();

const projectsList = [
    {
        // img: 'https://upload.wikimedia.org/wikipedia/en/1/19/Batman_%28circa_2016%29.png',
        alt: 'boot-icon',
        header: 'Spring Boot',
        description:
            'Takes an opinionated view of building Spring applications and gets you up and running as quickly as possible.'
    },
    {
        alt: 'spring-icon',
        header: 'Spring Framework',
        description:
            'Provides core support for dependency injection, transaction management, web apps, data access, messaging and more.'
    },
    {
        alt: 'data-icon',
        header: 'Spring Data',
        description:
            'Provides a consistent approach to data access – relational, non-relational, map-reduce, and beyond.'
    },
    {
        alt: 'cloud-icon',
        header: 'Spring Cloud',
        description:
            'Provides a set of tools for common patterns in distributed systems. Useful for building and deploying microservices.'
    }
];

router.get('/list', (req, res) => {

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
