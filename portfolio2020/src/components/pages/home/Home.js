import React from 'react';
import Navbar from '../../navbar/Navbar.js';
import Landing from '../../landing/Landing.js';
import Network from '../../network/Network.js'

import './Home.css';

function Home() {
    return (
        <div className="home">
            <Navbar></Navbar>
            <Landing></Landing>
            <Network></Network>
        </div>
    )
}

export default Home
