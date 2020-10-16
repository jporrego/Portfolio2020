import React, {useEffect} from 'react'
import Navbar from '../../navbar/Navbar.js';
import ProjectCard from './ProjectCard.js';
import { motion, useAnimation } from "framer-motion";
import './Projects.css';

function Projects() {
    useEffect(() => {
        generalAnimation();
      }, []);

    const generalAnimation = async () => {
        await cardAnimation.start({
            y: ["2%", "0%"],
            opacity: ["0%", "100%"],
            transition: { duration: .5 },
          })
        await titleAnimation.start({
          y: ["-20%", "0%"], 
          opacity: ["0%", "100%"],
          transition: { duration: .5 }
        })

    }
    const cardAnimation = useAnimation();
    const titleAnimation = useAnimation();

    return (
        <div className="projects">
            <Navbar selected="projects"></Navbar>
            <motion.div className="projects__title" animate={titleAnimation} initial={{opacity:"0%"}}>projects</motion.div>
            <motion.div className="project-grid" animate={cardAnimation} initial={{opacity:"0%"}}>
                <ProjectCard></ProjectCard>
                <ProjectCard></ProjectCard>
                <ProjectCard></ProjectCard>
                <ProjectCard></ProjectCard>
            </motion.div>
        </div>
    )
}

export default Projects
