import React from 'react';
import { Link } from "react-router-dom";
import {motion } from 'framer-motion';
import Navbar from '../../navbar/Navbar.js';
import './About.css'

function About() {
    const variants = {
        visible: { opacity: 1, y:"0px", transition: {
          when: "beforeChildren",          
          staggerChildren: 0.2
          
        }, },
        hidden: { opacity: 0, y:"-10px" },
      }
    return (
        <div className="about">
            <Navbar selected="about"></Navbar>
            <motion.div className="about__content" initial="hidden" animate="visible" variants={variants}>
                <motion.p variants={variants}>Hi, I'm</motion.p>
                <motion.h1 variants={variants}>Juan Pablo Orrego Contador</motion.h1>
                <motion.p variants={variants}>Programming student and self-taught web developer from Santiago, Chile.</motion.p>
                <motion.p className="about__content__text" variants={variants}>
                    After dropping out of biology and working for around four years as a video editor and 3D artist, 
                    I got interesed in programming and discovered I really like it, especially web development for both the technical and artistic challenges it presents.
                    <br></br>My goal right now is finding work as a full-stack web developer, so I am building projects with <strong>HTML</strong>, <strong>CSS</strong>, <strong>JavaScript</strong>, <strong>React</strong> and <strong>Node.js</strong>.
                </motion.p>

                <motion.div className="landing__buttons" variants={variants}>
                    <Link to="/projects" className="landing__button">projects</Link>
                    <Link to="/contact" className="landing__button">contact</Link>
                </motion.div>
            </motion.div>  
                       
        </div>
    )
}

export default About
