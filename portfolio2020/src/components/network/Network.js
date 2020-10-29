import React, {useState} from 'react';
import {motion, } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBehanceSquare, faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import './Network.css';

function Network() {
    const [open, setOpen] = useState(false);

    const networkVariants = {
        visible: { opacity: 1, x:"0px", transition: {
          when: "beforeChildren",
          staggerChildren: 0.2,
          delay: 1.2,
          type: "Tween"
        }, },
        hidden: { opacity: 0, x:"-50px" },
      }

    const showLinks = () => {
        if (open == true) {  
            /*setOpen(false);*/
        } else {
            setOpen(true);
        }
    }

    let timer;
    
    const hideLinks = () => {
        timer = setTimeout(() => {
            setOpen(false)
        }, 2500);
    }

    const networkLogo = () => {
        return (
        <div className="network__logo">
                network
        </div>)
    }

    const networkLinks = () =>
    {
        return (
            <div className="network__links" onMouseLeave={() => hideLinks()} onMouseEnter={() => clearTimeout(timer)}>
                <a href="https://www.behance.net/JPOrrego" target="_blank" className="network__link">
                    <FontAwesomeIcon icon={faBehanceSquare} />
                </a>
                <a href="https://github.com/jporrego" target="_blank" className="network__link">
                    <FontAwesomeIcon icon={faGithubSquare} />
                </a>
                <a href="https://www.linkedin.com/in/juan-pablo-orrego-contador-38a3001ba/" target="_blank" className="network__link">
                    <FontAwesomeIcon icon={faLinkedin} />
                </a>
            </div>     
        )
    }
    return (
        <motion.div className="network"  onClick={showLinks} initial="hidden" animate="visible" variants={networkVariants}>
            {open ? networkLinks() : networkLogo()}                
        </motion.div>
    )
}

export default Network
