import React from 'react';
import './CustomButton.scss';


const CustomButton = ({ children, isGoogleSignIn, ...otherProps }) => (
  <div className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} {...otherProps}>
    {children}
  </div>
)

export default CustomButton;