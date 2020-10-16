import React from 'react';
import { Link } from "react-router-dom";
import Logo from './logo/Logo.js';
import './Navbar.css';


function Navbar(props) {
    const activePage = {
        color: "var(--accent-color)"
    }

    return (
        <nav className="navbar">
            <Logo className="navbar__logo"></Logo>
            <ul className="navbar__links">
                <Link to="/projects" style = {props.selected == "projects" ? activePage : void 0}>projects</Link>
                <Link to="/about" style = {props.selected == "about" ? activePage : void 0}>about</Link>
                <Link to="/contact" style = {props.selected == "contact" ? activePage : void 0}>contact</Link>
            </ul>
        </nav>
    )
}

export default Navbar
