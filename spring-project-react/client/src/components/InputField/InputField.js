import React from 'react';

import './InputField.scss';

const InputField = props => {
    return (
        <div className='field__container'>
            <div className='label__wrapper'>
                <label>{`${props.name}:`}</label>
            </div>
            <div className='input__wrapper'>
                <input
                    className={`${props.name}__input`}
                    type={props.type}
                    id={props.name}
                    name={props.name}
                    onChange={props.onChange}
                    style={props.inputStyle}
                />
            </div>
            <div className='input__helper--text' style={props.helperStyle} >
                <p>{`Invalid ${props.name}`}</p>
            </div>
        </div>
    );
};

export default InputField;
