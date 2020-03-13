import React from 'react';
import { connect } from 'react-redux';

import './Items.scss';
import Item from './Item/Item';

const Items = ({ itemList }) => {

    return (
        <div className='main__content'>
            {itemList.map((el, index) => {
                const last =
                    itemList.length - 1 === index && index % 2 === 0
                        ? true
                        : false;
                return (
                    <Item
                        key={index}
                        index={index}
                        last={last}
                        img={el.img}
                        alt={el.alt}
                        header={el.header}
                        description={el.description}
                    />
                );
            })}
        </div>
    );
};

const mapStateToProps = state => {
    return {
        itemList: state.itemList
    };
};

export default connect(mapStateToProps)(Items);
