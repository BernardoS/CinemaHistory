//library imports
import React,{useEffect} from 'react';
import {Link,useHistory} from 'react-router-dom';
//local imports
import './style.css';
import configIcon from '../../../images/icons/cogs-solid.svg';
import filmIcon from '../../../images/icons/film-solid.svg';
import backIcon from '../../../images/icons/chevron-left-solid.svg';

const NavBarLink = () =>{
    const history = useHistory() 

   useEffect(() => {
      return history.listen((location) => { 
        if(window.location.pathname === "/login"){
            document.getElementById("HomeLink").style.display = "flex";
            document.getElementById("LoginLink").style.display = "none";
        }
        if(window.location.pathname === "/"){
            document.getElementById("HomeLink").style.display = "none";
            document.getElementById("LoginLink").style.display = "flex";
        }
        if(window.location.pathname === "/recomendation"){
            document.getElementById("HomeLink").style.display = "flex";
            document.getElementById("LoginLink").style.display = "none";
        }
      }) 
   },[history])

   useEffect(()=>{
    if(window.location.pathname === "/login"){
        document.getElementById("HomeLink").style.display = "flex";
        document.getElementById("LoginLink").style.display = "none";
    }
    if(window.location.pathname === "/"){
        document.getElementById("HomeLink").style.display = "none";
        document.getElementById("LoginLink").style.display = "flex";
    }
    if(window.location.pathname === "/recomendation"){
        document.getElementById("HomeLink").style.display = "flex";
        document.getElementById("LoginLink").style.display = "none";
    }
   },[]) 

    return(
        <div className="navBarLinkContainer">
            <Link id="HomeLink" to="/"><img className="backIcon" src={backIcon} alt="Home Menu Icon"/></Link>
            <Link id="LoginLink"  to="/login"><img className="configIcon" src={configIcon} alt="Home Menu Icon"/></Link>
            <Link id="RecomendationLink" to="/recomendation"><img className="filmIcon" src={filmIcon} alt="Film Recomendation Menu Icon"/></Link>
        </div>
    );
}

export default NavBarLink;