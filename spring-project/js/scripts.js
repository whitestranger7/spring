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
    {
        img: 'img/spring-cloud-icon.svg',
        alt: 'cloud-icon',
        header: 'Spring Cloud',
        description:
            'Provides a set of tools for common patterns in distributed systems. Useful for building and deploying microservices.'
    },
    {
        img: 'img/spring-cloud-icon.svg',
        alt: 'cloud-icon',
        header: 'Spring Cloud',
        description:
            'Provides a set of tools for common patterns in distributed systems. Useful for building and deploying microservices.'
    }
];

const init = function() {
    let allContent = document.createElement('div');
    let wrapper = document.createElement('div');
    let itemsContainer = document.createElement('div');
    allContent.classList.add('main__content');
    wrapper.classList.add('content__wrapper');
    itemsContainer.classList.add('content__items');
    let allItems = items.map((el, index) => {
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
        if(i == allItems.length - 1 && i % 2 == 0) {
            wrappersBlock.appendChild(itemsBlock);
            allContent.appendChild(wrappersBlock);
            wrappersBlock.firstChild.classList.add('content__items--single');
        }
    }
    document.getElementById('search__container').insertAdjacentElement('afterend', allContent);
};

function openNav() {
    let modalNav = document.getElementById('modal__nav');
    let navBar = document.getElementById('nav');
    modalNav.style.height = '100%';
    modalNav.style.display = 'block';
    navBar.style.display = 'none';
}

const navOpenEventListener = () => {
    let modalNav = document.getElementById('modal__nav');
    let navBar = document.getElementById('nav');
    modalNav.addEventListener('transitionend', () => {
        navBar.removeAttribute('style');
        modalNav.removeEventListener('transitionend', this);
    });
}

function closeNav() {
    let modalNav = document.getElementById('modal__nav');
    let navBar = document.getElementById('nav');
    modalNav.style.height = '0';
    modalNav.style.removeProperty('display');
    navOpenEventListener();
}

function fillSearch() {
    let listWrapper = document.createElement('div');
    let listItems = document.createElement('ul');
    listWrapper.classList.add('search__results__wrapper');
    listWrapper.id = 'search__results__wrapper';
    listItems.classList.add('search__list');
    listItems.id = 'search__list';
    for (let i in items) {
        let searchItem = document.createElement('li');
        let searchItemWrapper = document.createElement('div');
        let searchItemHeader = document.createElement('p');
        searchItem.classList.add('search__item');
        searchItemWrapper.classList.add('search__item__wrapper');
        searchItemHeader.classList.add('search__item--header');
        searchItemHeader.appendChild(document.createTextNode(items[i].header));
        searchItemWrapper.appendChild(searchItemHeader);
        searchItem.appendChild(searchItemWrapper);
        listItems.appendChild(searchItem);
    }
    listWrapper.appendChild(listItems);
    document.getElementById('search__container').insertAdjacentElement('beforeend', listWrapper);
};

function search() {
    let searchValue = document.getElementById('search__input').value.toLowerCase();
    let nothingMatches = document.getElementById('search__nothing');
    let searchResultWrapper = document.getElementById('search__results__wrapper');
    if(searchValue !== '') {
        nothingMatches.style.display = 'none';
        searchResultWrapper.style.display = 'flex';
        let ul, li, header;
        ul = document.getElementById('search__list');
        li = ul.getElementsByTagName('li');
        // for(let i in li) {
        //     // header = li[i].textContent || li[i].innerText;
        //     // if(header.toLowerCase().indexOf(searchValue) !== -1){
        //     //     console.log(i);
        //     // }
        //     header = li[0].innerText;
        //     console.log(li)
        // }
        let resultArray = [];
        for (let i = 0; i < li.length; i++) {
            header = li[i].textContent || li[i].innerText;
            if(header.toLowerCase().indexOf(searchValue) !== -1) {
                li[i].style.display = 'flex';
                resultArray.push(li[i]);
            }else {
                li[i].style.display = 'none';
            }
        }
        if(resultArray.length == 0) {
            nothingMatches.style.display = 'flex';
            searchResultWrapper.style.display = 'none';
        }
    }
};

function resultNothing() {
    let searchValue = document.getElementById('search__input').value;
    let nothingMatches = document.getElementById('search__nothing');
    let searchList = document.getElementById('search__results__wrapper');
    if(searchValue === '') {
        nothingMatches.style.display = 'flex';
        searchList.style.display = 'none';
    }
}

function closeModal(index) {
    let change = document.getElementsByClassName('modal__nav__wrapper');
    let btn = change[index].firstElementChild;
    let list = change[index].lastElementChild;
    if (btn.classList.value.includes('active')){
        btn.classList.toggle('active');
        list.style.display = 'none';
    } else {
        btn.classList.toggle('active');
        list.style.display = 'block';
    }
}

init();
fillSearch();