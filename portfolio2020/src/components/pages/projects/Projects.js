import React, {useEffect} from 'react'
import Navbar from '../../navbar/Navbar.js';
import ProjectCard from './ProjectCard.js';
import { motion, useAnimation } from "framer-motion";
import './Projects.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHtml5, faCss3Alt, faJsSquare, faReact,faNodeJs } from '@fortawesome/free-brands-svg-icons'

function Projects() {
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
          y: ["-20%", "0%"], 
          opacity: ["0%", "100%"],
          transition: { duration: .5 }
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
      visible: { opacity: 1, transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
      }, },
      hidden: { opacity: 0 },
    }

    return (
        <div className="projects">
            <Navbar selected="projects"></Navbar>
            <motion.div className="projects__title" animate={titleAnimation} initial={{opacity:"0%"}}>projects</motion.div>
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
