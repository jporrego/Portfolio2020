import React, {useState, Fragment} from 'react';
import './Network.css';

function Network() {
    const [open, setOpen] = useState(false);


    const showLinks = () => {
        if (open == true) {  
            setOpen(false);
        } else {
            setOpen(true);
        }
        
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
            <div className="network__links">
                <div className="network__link">Gh</div>
                <div className="network__link">Ln</div>
                <div className="network__link">Be</div>
            </div>     
        )
    }
    return (
        <div className="network"  onClick={showLinks}>
            {open ? networkLinks() : networkLogo()}                
        </div>
    )
}

export default Network
