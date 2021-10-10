import React from 'react';
import './number.css';

export const Number = (props) => {
    const {name, value, required, onChange, onBlur, onFocus} = props;

    return (
        <div className='input__container'>
            <div>
                <input type='number' name={name} required={required} className='input_box_num number' value={value} onChange={onChange} onBlur={onBlur} onFocus={onFocus}/>
            </div>
        </div>
    );
};
