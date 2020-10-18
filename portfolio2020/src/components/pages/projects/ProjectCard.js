import React, {useState, useEffect} from 'react'
import {motion, useViewportScroll, useTransform, useMotionValue } from 'framer-motion';
import './ProjectCard.css';


function ProjectCard(props) {
    const {title, img, type} = props;

    const [yPos, setYPos] = useState(0);
    const { scrollYProgress } = useViewportScroll()
    const yPosition = useTransform(scrollYProgress, [0, 0.5, 1], [0, 50, 100]);

    scrollYProgress.onChange(x => {
        console.log(1)
      })
    return (
        <div className="project-card" /*style={{backgroundImage: `url("${process.env.PUBLIC_URL}/images/projects/${img}")`}}*/>
            <div className="project-card__img">
                <motion.img src={`${process.env.PUBLIC_URL}/images/projects/${img}`} alt={title} style={{objectPosition: `0% ${yPos}%`}}/>
            </div>            
            <div className="project-card__title">{title}</div>
            <div className="project-card__type">{type}</div>
        </div>
    )
}

export default ProjectCard
