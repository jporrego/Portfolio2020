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

    return (
        <div className="projects">
            <Navbar selected="projects"></Navbar>
            <motion.div className="projects__title" animate={titleAnimation} initial={{opacity:"0%"}}>projects</motion.div>
            <motion.div className="projects__skills" animate={skillsAnimation} initial={{opacity:"0%"}}>
              <FontAwesomeIcon icon={faHtml5} />
              <FontAwesomeIcon icon={faCss3Alt} />
              <FontAwesomeIcon icon={faJsSquare} />
              <FontAwesomeIcon icon={faReact} />
              <FontAwesomeIcon icon={faNodeJs} />
            </motion.div>
            <motion.div className="project-grid" animate={cardAnimation} initial={{opacity:"0%"}}>
                <ProjectCard title="shoppy" img="shoppy.JPG"></ProjectCard>
                <ProjectCard title="gaming forum" img="gamingforum.PNG"></ProjectCard>
                <ProjectCard></ProjectCard>
                <ProjectCard></ProjectCard>
            </motion.div>
        </div>
    )
}

export default Projects
