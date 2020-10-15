import React from 'react';
import './Logo.css';
import logo from '../../../assets/logo.png';


function Logo() {
    return (
        <div>
            <img src={logo} alt="logo" className="logo__img"/>
        </div>
    )
}

export default Logo
