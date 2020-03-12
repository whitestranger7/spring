import bootIcon from '../../config/img/spring-boot-icon.svg';
import springIcon from '../../config/img/spring-logo-icon.svg';
import dataIcon from '../../config/img/spring-data-icon.svg';
import cloudIcon from '../../config/img/spring-cloud-icon.svg';

const initialState = [
    {
        img: bootIcon,
        alt: 'boot-icon',
        header: 'Spring Boot',
        description:
            'Takes an opinionated view of building Spring applications and gets you up and running as quickly as possible.'
    },
    {
        img: springIcon,
        alt: 'spring-icon',
        header: 'Spring Framework',
        description:
            'Provides core support for dependency injection, transaction management, web apps, data access, messaging and more.'
    },
    {
        img: dataIcon,
        alt: 'data-icon',
        header: 'Spring Data',
        description:
            'Provides a consistent approach to data access – relational, non-relational, map-reduce, and beyond.'
    },
    {
        img: cloudIcon,
        alt: 'cloud-icon',
        header: 'Spring Cloud',
        description:
            'Provides a set of tools for common patterns in distributed systems. Useful for building and deploying microservices.'
    }
];

export default function(state = initialState) {
    return state;
};