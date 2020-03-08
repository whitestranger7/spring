import React from 'react'

import './Item.scss';


const Item = (props) => {

    let styles;

    if(props.index % 2 !== 0) {
        styles = {
            justifyContent: 'flex-start'
        }
    }else {
        styles = {
            justifyContent: 'flex-end'
        }
    }

    if(props.last) {
        styles = {
            justifyContent: 'center'
        }
    }

    return (
        <div style={styles} className={'item__wrapper'} id={`item__wrapper ${props.header}`}>
            <div className='content__item'>
                <div className='item__icon'>
                    <img src={props.img} alt={props.alt}/>
                </div>
                <div className='item__description'>
                    <h1>{props.header}</h1>
                    <p>{props.description}</p>
                </div>
            </div>
        </div>
    )
}

export default Item;
