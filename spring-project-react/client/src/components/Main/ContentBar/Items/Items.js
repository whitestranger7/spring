import React from 'react';

import './Items.scss';
import Item from './Item/Item';

import { itemList } from '../../../../config/constants';

const items = () => {
    return (
        <div className='main__content'>
            {itemList.map((el, index) => {
                const last = itemList.length - 1 === index && index % 2 === 0 ? true : false;
                return <Item
                key={index}
                index={index}
                last={last}
                img={el.img}
                alt={el.alt}
                header={el.header}
                description={el.description} />
            })}
        </div>
    );
};

export default items;