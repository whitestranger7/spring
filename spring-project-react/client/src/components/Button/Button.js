import React from 'react'
import './Button.scss';

const Button = props => {

    let style = null;
    if(props.color) {
        style = { backgroundColor: props.color };
    }

    return (
        <div className='btn__container'>
            <button type={props.type} className={`btn__${props.type}`} style={style}>
                {props.text}
            </button>
        </div>
    )
}

export default Button
