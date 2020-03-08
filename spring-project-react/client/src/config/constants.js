import bootIcon from './img/spring-boot-icon.svg';
import springIcon from './img/spring-logo-icon.svg';
import dataIcon from './img/spring-data-icon.svg';
import cloudIcon from './img/spring-cloud-icon.svg';

export const navigationItems = [
    {
        title: 'Why Spring',
        list: [
            'Overview',
            'Microservices',
            'Reactive',
            'Event Driven',
            'Cloud',
            'Web Applications',
            'Serverless',
            'Batch'
        ]
    },
    {
        title: 'Learn',
        list: ['Overview', 'Quickstart', 'Guides', 'Blog']
    },
    {
        title: 'Projects',
        list: [
            'Overview',
            'Spring Boot',
            'Spring Framework',
            'Spring Cloud',
            'Spring Cloud Data Flow',
            'Spring Data',
            'Spring Integration',
            'Spring Batch',
            'Spring Security'
        ]
    },
    {
        title: 'Training'
    },
    {
        title: 'Support'
    },
    {
        title: 'Community',
        list: ['Overview', 'Events', 'Team', 'Store']
    },
];

export const heroBarObj = {
    title: 'Projects',
    description:
        'From configuration to security, web apps to big data—whatever the infrastructure needs of your application may be, there is a Spring Project to help you build it. Start small and use just what you need—Spring is modular by design.'
};

export const itemList = [
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
