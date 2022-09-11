import React from 'react';

function Button ({isDisabled, clickHandler, children} ) {
    return (
        <button
            type="button"
            disabled={isDisabled}
            onClick={clickHandler}>
            {children}
        </button>
    )
}
export default Button;
