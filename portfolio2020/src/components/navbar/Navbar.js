import React from 'react';
import Logo from './logo/Logo.js';
import './Navbar.css';


function Navbar() {
    return (
        <nav className="navbar">
            <Logo></Logo>
            <ul className="navbar__links">
                <li>Projects</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
    )
}

export default Navbar
