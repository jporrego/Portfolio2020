import React from 'react';
import {motion, useViewportScroll, useTransform, useElementScroll } from 'framer-motion';
import Navbar from '../../navbar/Navbar.js';
import Landing from '../../landing/Landing.js';
import Network from '../../network/Network.js'
import './Home.css';

const MotionNetwork = motion.custom(Network);



function Home() {
    return (
        <div className="home">
            <Navbar></Navbar>
            <Landing></Landing>
            <Network ></Network>
            
        </div>
    )
}

export default Home
