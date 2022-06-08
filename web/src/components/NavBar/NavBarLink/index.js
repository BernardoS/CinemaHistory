//library imports
import React,{useEffect, useState} from 'react';
import {Link,useHistory} from 'react-router-dom';
//local imports
import './style.css';
import configIcon from '../../../images/icons/cogs-solid.svg';
import filmIcon from '../../../images/icons/film-solid.svg';
import backIcon from '../../../images/icons/undo-alt-solid.svg';

const NavBarLink = () =>{
    const history = useHistory() 
    const [navBarItems, setNavBarItems] = useState({
        login: true,
        home:true,
        recomendation:true
    })
    
   useEffect(() => {
      return history.listen((location) => { 
        switch (window.location.pathname) {
            case "/login":
                setNavBarItems({
                    login:false,
                    home:true,
                    recomendation:true
                })
                break;
            case "/":
                setNavBarItems({
                    login:true,
                    home:false,
                    recomendation:true
                })
                break;
            case "/recomendation":
                setNavBarItems({
                    login:false,
                    home:true,
                    recomendation:true
                })
                break;
            default:
                
                break;
        }
      }) 
   },[history,navBarItems])
   useEffect(()=>{
    switch (window.location.pathname) {
        case "/login":
            setNavBarItems({
                login:false,
                home:true,
                recomendation:true
            })
            break;
        case "/":
            setNavBarItems({
                login:true,
                home:false,
                recomendation:true
            })
            break;
        case "/recomendation":
            setNavBarItems({
                login:false,
                home:true,
                recomendation:true
            })
            break;
        default:
            
            break;
    }
   },[])

    return(
        <div className="navBarLinkContainer">
            {navBarItems.home &&  <Link id="HomeLink" to="/"><img className="backIcon" src={backIcon} alt="Home Menu Icon"/></Link>}
            {navBarItems.login && <Link id="LoginLink"  to="/login"><img className="configIcon" src={configIcon} alt="Home Menu Icon"/></Link>}
            {navBarItems.recomendation && <Link id="RecomendationLink" to="/recomendation"><img className="filmIcon" src={filmIcon} alt="Film Recomendation Menu Icon"/></Link>}
        </div>
    );
}

export default NavBarLink;