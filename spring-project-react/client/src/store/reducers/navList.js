const initialState = [
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

export default function(state = initialState) {
    return state;
}