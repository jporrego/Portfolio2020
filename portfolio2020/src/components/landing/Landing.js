import React from 'react';
import { Link } from "react-router-dom";
import {motion, useViewportScroll, useTransform, useElementScroll } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHtml5, faCss3Alt, faJsSquare, faReact,faNodeJs } from '@fortawesome/free-brands-svg-icons'
import './Landing.css';

function Landing() {

    const variants = {
        visible: { opacity: 1, y:"0px", transition: {
          when: "beforeChildren",
          staggerChildren: 0.2,
        }, },
        hidden: { opacity: 0, y:"-10px" },
      }
    
    const buttonVariants = {
        visible: { opacity: 1, x:"0px", transition: {
        delay: .6,
          when: "beforeChildren",
          staggerChildren: 0.6
          
        }, },
        hidden: { opacity: 0, x:"-20px" },
      }
    return (
        <motion.div className="landing">
            <motion.div className="landing__text" initial="hidden" animate="visible" variants={variants}>
                    <motion.p variants={variants}>Hi, I'm</motion.p>
                    <motion.h1 variants={variants}>Juan Pablo Orrego C.</motion.h1>
                    <motion.p variants={variants} style={{display:"inline-block"}}>Programming student and self-taught web developer, video editor and 3D artist.</motion.p>          
            </motion.div>
            <motion.div className="landing__buttons" initial="hidden" animate="visible" variants={buttonVariants}>
                <Link to="/projects" className="landing__button">projects</Link>
                <Link to="/about"className="landing__button" variants={buttonVariants}>about</Link>
                <Link to="/contact" className="landing__button" variants={buttonVariants}>contact</Link>
            </motion.div>            
            <motion.div className="skills" initial="hidden" animate="visible" variants={variants}>
                <motion.h2 className="skills__title" variants={variants}>skills</motion.h2>
                <motion.div className="skills__icons" variants={variants}>
                    <motion.div>
                        <p>HTML5</p>
                        <FontAwesomeIcon icon={faHtml5}/>
                    </motion.div>

                    <motion.div>
                        <p>CSS3</p>
                      <FontAwesomeIcon icon={faCss3Alt} />
                    </motion.div>   

                    <motion.div>
                        <p>JavaScript</p>
                      <FontAwesomeIcon icon={faJsSquare} />
                    </motion.div >

                    <motion.div>
                        <p>React</p>
                      <FontAwesomeIcon icon={faReact} />
                    </motion.div>

                    <motion.div>
                        <p>Node.js</p>
                      <FontAwesomeIcon icon={faNodeJs} />
                    </motion.div>
                </motion.div>
            </motion.div>
            
        </motion.div>
    )
}

export default Landing
