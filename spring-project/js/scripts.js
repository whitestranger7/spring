let items = [
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
    },
];

const init = function(items) {
    let allContent = document.createElement('div');
    let wrapper = document.createElement('div');
    let itemsContainer = document.createElement('div');
    allContent.classList.add('main__content');
    wrapper.classList.add('content__wrapper');
    itemsContainer.classList.add('content__items');
    let allItems = items.map(el => {
        let item = document.createElement('div');
        let itemIcon = document.createElement('div');
        let itemIconImg = document.createElement('img');
        let itemDesc = document.createElement('div');
        let itemDescHeader = document.createElement('h1');
        let itemDescText = document.createElement('p');
        item.classList.add('content__item');
        itemIcon.classList.add('item__icon');
        itemDesc.classList.add('item__description');
        item.appendChild(itemIcon);
        item.appendChild(itemDesc);
        itemIcon.appendChild(itemIconImg);
        itemDesc.appendChild(itemDescHeader);
        itemDesc.appendChild(itemDescText);
        itemIconImg.src = el.img;
        itemIconImg.alt = el.alt;
        itemDescHeader.appendChild(document.createTextNode(el.header));
        itemDescText.appendChild(document.createTextNode(el.description));
        return item;
    });
    let itemsBlock = itemsContainer.cloneNode(true);
    let wrappersBlock = wrapper.cloneNode(true);
    for(let i in allItems) {
        itemsBlock.appendChild(allItems[i]);
        if(i % 2 !== 0) {
            wrappersBlock.appendChild(itemsBlock);
            allContent.appendChild(wrappersBlock);
            itemsBlock = itemsContainer.cloneNode(true);
            wrappersBlock = wrapper.cloneNode(true);
        }
        if(i == allItems.length - 1) {
            wrappersBlock.appendChild(itemsBlock);
            allContent.appendChild(wrappersBlock);
        }
    }
    document.getElementById('main__hero').insertAdjacentElement('afterend', allContent);
    console.log(allContent);
};

function openNav() {
    let modalNav = document.getElementById('modal__nav');
    let navBar = document.getElementById('nav');
    modalNav.style.display = 'block';
    modalNav.style.height = '100%';
    navBar.style.display = 'none';
}

function closeNav() {
    let modalNav = document.getElementById('modal__nav');
    let navBar = document.getElementById('nav');
    modalNav.style.height = '0';
    navBar.style.removeProperty('display');
}

init(items);