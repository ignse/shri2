import React from 'react';
import './button.css';
import PropTypes from 'prop-types';

export const Button = (props) => {
    const {type , onClick, disabled, name, icon, children} = props;

    const className = `button ${
        type === 'primary' ? 'button_type_primary' : 'button_type_secondary'
    } ${
        icon ? (children ? 'button_icon' : 'button_icon_only') : 'button_normal'
    }`;

    return (
        <button disabled={disabled} name={name} onClick={onClick} className={className}>
            {icon && <div className='button_icon_block'>{icon}</div>}
            <span className='button_text'>{children}</span>
        </button>
    );
};

Button.propTypes = {
    type: PropTypes.string,
    size: PropTypes.string,
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
    icon: PropTypes.element,
    name: PropTypes.string,
};
