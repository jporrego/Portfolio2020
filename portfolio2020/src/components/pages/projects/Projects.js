import React, {useEffect, useState} from 'react'
import Navbar from '../../navbar/Navbar.js';
import ProjectCard from './ProjectCard.js';
import { motion, useAnimation } from "framer-motion";
import './Projects.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHtml5, faCss3Alt, faJsSquare, faReact,faNodeJs } from '@fortawesome/free-brands-svg-icons'

function Projects() {
    const [title, setTitle] = useState("");

    useEffect(() => {
        generalAnimation();
      }, []);

    const generalAnimation = async () => {
        await cardAnimation.start({
            y: ["2%", "0%"],
            opacity: ["0%", "100%"],
            transition: { duration: .5 },
          });

        await titleAnimation.start({
          y: ["-10%", "0%"], 
          opacity: ["0%", "100%"],
          transition: { duration: .4 }
        });

        await skillsAnimation.start({
          y: ["-5%", "0%"], 
          opacity: ["0%", "100%"],
          transition: { duration: .5 }
        });


    }
    const cardAnimation = useAnimation();
    const titleAnimation = useAnimation();
    const skillsAnimation = useAnimation();

    const variants = {
      visible: { opacity: 1, y:"0%", transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
      }, },
      hidden: { opacity: 0, y:"-10%"  },
    }

    const writeVariants = {
      visible: { opacity: 1, y:"0%", transition: {
        when: "beforeChildren",
        staggerChildren: .05,
        ease:"anticipate",
        delay: .7
      }, },
      hidden: { opacity: 0, y:"-5%" },
    }


    return (
        <div className="projects">
            <Navbar selected="projects"></Navbar>
            <motion.div className="projects__title" animate={titleAnimation} initial={{opacity:"0%"}}>
              <span style={{display:"inline"}}>&#60;/</span>
              <motion.span className="projects__title__inner-text" initial="hidden" animate="visible" variants={writeVariants}>
                  <motion.span variants={variants}>P</motion.span> 
                  <motion.span variants={variants}>R</motion.span> 
                  <motion.span variants={variants}>O</motion.span> 
                  <motion.span variants={variants}>J</motion.span> 
                  <motion.span variants={variants}>E</motion.span> 
                  <motion.span variants={variants}>C</motion.span>
                  <motion.span variants={variants}>T</motion.span> 
                  <motion.span variants={variants}>S</motion.span>
                  <motion.span id="cursor" animate={{opacity:["0%", "100%", "100%", "100%", "0%"]}} transition={{repeat: Infinity, duration:.6, repeatDelay: .5, ease: "easeIn", delay:1.8}}>|</motion.span>  
                </motion.span> 
              <span style={{display:"inline"}}>&#62;</span>
              </motion.div>
            <motion.div className="projects__skills" /*animate={skillsAnimation}*/ initial="hidden" animate="visible" variants={variants}>
              <motion.div variants={variants}>
                <FontAwesomeIcon icon={faHtml5}/>
              </motion.div>
              <motion.div variants={variants}>
                <FontAwesomeIcon icon={faCss3Alt} />
              </motion.div>            
              <motion.div variants={variants}>
                <FontAwesomeIcon icon={faJsSquare} />
              </motion.div >
              <motion.div variants={variants}>
                <FontAwesomeIcon icon={faReact} />
              </motion.div>
              <motion.div variants={variants}>
                <FontAwesomeIcon icon={faNodeJs} />
              </motion.div>
              
            </motion.div>
            <motion.div className="project-grid" animate={cardAnimation} initial={{opacity:"0%"}}>
                <ProjectCard title="shoppy" img="test.png" type="e-commerce website"></ProjectCard>
                <ProjectCard title="gaming forum" img="gamingforum.PNG" type="Gaming forum"></ProjectCard>
            </motion.div>
        </div>
    )
}

export default Projects
