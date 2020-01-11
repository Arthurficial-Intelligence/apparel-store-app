import React from 'react';

import './custom-button.styles.scss';

const CustomButton = ({ children, isGoogleSignIn, ...propsObject }) => {
    return(
        <>  
            <button className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} {...propsObject}>
                {children}
            </button>
        </>
    )
}

export default CustomButton;