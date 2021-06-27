//library imports
import React from 'react';
import {Link} from 'react-router-dom';
//local imports
import './style.css';
import configIcon from '../../../images/icons/cogs-solid.svg';
import filmIcon from '../../../images/icons/film-solid.svg';

const NavBarLink = () =>{
    return(
        <div className="navBarLinkContainer">
            <Link to="/"><img className="configIcon" src={configIcon} alt="Configuration Menu Icon"/></Link>
            <Link to="/"><img className="filmIcon" src={filmIcon} alt="Film Recomendation Menu Icon"/></Link>
        </div>
    );
}

export default NavBarLink;