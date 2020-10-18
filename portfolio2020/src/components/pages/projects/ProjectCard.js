import React, {useState, useEffect, useRef} from 'react'
import {motion, useViewportScroll, useTransform, useElementScroll } from 'framer-motion';
import './ProjectCard.css';


function ProjectCard(props) {
    const {title, img, type} = props;
    


    return (
        <motion.div className="project-card" /*style={{backgroundImage: `url("${process.env.PUBLIC_URL}/images/projects/${img}")`}}*/>
            <motion.div className="project-card__img" animate={{opacity:["0%", "100%"]}} transition={{duration: 2}}>
                <motion.img src={`${process.env.PUBLIC_URL}/images/projects/${img}`} alt={title} animate={{objectPosition: ["0% 0%", "0% 0%", "0% 100%", "0% 100%", "0% 0%"]}} transition={{
                    duration: 6,
                    ease: "easeInOut",
                    loop: Infinity,
                    repeatDelay: 1}}/>
            </motion.div>            
            <motion.div className="project-card__title" animate={{x:["-20%", "0%"], opacity:["0%", "100%"]}}>{title}</motion.div>            
            <motion.div className="project-card__type" animate={{x:["-10%", "0%"], opacity:["0%", "0%", "100%"]}}>{type}</motion.div>
        </motion.div>
    )
}

export default ProjectCard
