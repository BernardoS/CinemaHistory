//library imports
import React from 'react';
//local imports
import './style.css';
import chLogo from '../../images/CinemaIcon_white.png';
import cameraIconPurple from '../../images/icons/camera_icon_purple.svg';
import cameraIconYellow from '../../images/icons/camera_icon_yellow.svg';

const Home = () =>{
    return(
        <div className="homeContainer">
            <div className="logo">
                <img alt="Cinema History Logo" src={chLogo}/>
                <h1>Cinema History</h1>
            </div>
            <div className="firstTopicDiv">
                <div className="firstTopic">
                    <img className="cameraIcon" alt="Camera Icon" src={cameraIconPurple}/>
                    <h2>The Beginning </h2>
                </div>
                <hr/>
            </div>
            
            <div className="secondTopicDiv">
                <div className="secondTopic">
                    <img className="cameraIcon" alt="Camera Icon" src={cameraIconYellow}/>
                    <h2>The Birth of Hollywood</h2>
                </div>
                <hr/>
            </div>            
        </div>
    );
}

export default Home;