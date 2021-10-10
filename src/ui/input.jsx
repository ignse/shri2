import React from 'react';
import './input.css';

export const Input = (props) => {
    const {name, value, text, placeholder, required, onChange, onBlur, onFocus} = props;

    return (
        <div className='input__container'>
            <label className='input_label'>
                {text}{required && <span className='red'>*</span>}
            </label>
            <div>
                <input type='search' name={name} required={required} className='input_box' placeholder={placeholder} value={value} onChange={onChange} onBlur={onBlur} onFocus={onFocus}/>
            </div>
        </div>
    );
};
