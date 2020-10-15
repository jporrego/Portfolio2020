import React from 'react';
import Navbar from '../../navbar/Navbar.js';
import Landing from '../../landing/Landing.js';

import './Home.css';

function Home() {
    return (
        <div className="home">
            <Navbar></Navbar>
            <Landing></Landing>
        </div>
    )
}

export default Home
