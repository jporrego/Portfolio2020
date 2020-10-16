import React from 'react'
import './ProjectCard.css';


function ProjectCard(props) {
    const {title, img} = props;
    const backgroundURL = '../../../assets/projects/' + img;

    return (
        <div className="project-card" style={{backgroundImage: `url(${require("../../../assets/projects/shoppy.JPG")})`}}>
            <div className="project-card__title">{title}</div>
        </div>
    )
}

export default ProjectCard
