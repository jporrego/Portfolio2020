import React from 'react';
import { Link } from "react-router-dom";
import {motion, useViewportScroll, useTransform, useElementScroll } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHtml5, faCss3Alt, faJsSquare, faReact,faNodeJs } from '@fortawesome/free-brands-svg-icons'
import './Landing.css';

function Landing() {

    return (
        <div className="landing">
            <motion.div className="landing__text">
                <p>Hi, I'm</p>
                <h1>Juan Pablo Orrego C.</h1>
                <p>Programming student and self-taught web developer, video editor and 3D artist.</p>          
            </motion.div>
            <div className="landing__buttons">
                <Link to="/projects" className="landing__button">projects</Link>
                <Link to="/about"className="landing__button">about</Link>
                <Link to="/contact" className="landing__button">contact</Link>
            </div>            
            <div className="skills">
                <h2 className="skills__title">skills</h2>
                <div className="skills__icons">
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
                </div>
            </div>
        </div>
    )
}

export default Landing
