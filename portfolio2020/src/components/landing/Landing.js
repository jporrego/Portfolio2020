import React from 'react';
import { Link } from "react-router-dom";
import {motion, useViewportScroll, useTransform, useElementScroll } from 'framer-motion';
import './Landing.css';

function Landing() {

    return (
        <div className="landing">
            <motion.div className="landing__text">
                <h1>Juan Pablo Orrego C.</h1>
                <p>Full Stack Developer</p>
                <p>Video Editor</p>
                <p>3D Artist</p>                
            </motion.div>
            <div className="landing__buttons">
                <Link to="/projects" className="landing__button">projects</Link>
                <Link to="/about"className="landing__button">about</Link>
                <Link to="/contact" className="landing__button">contact</Link>
            </div>            
        </div>
    )
}

export default Landing
