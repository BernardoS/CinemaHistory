//library imports
import React from 'react';
//local imports
import './style.css';
import NavBarLink from './NavBarLink';

const NavBar = () =>{
    return(
        <div className="navBarContainer" >
            <NavBarLink/>
        </div>
    );
}

export default NavBar;