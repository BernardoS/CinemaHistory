//library imports
import React from 'react';
//local imports
import './style.css';
import ticketIcon from '../../images/icons/ticket-alt-solid.svg';

const Login = () =>{
    return(
        <div className="loginContainer">
            <form className="loginFormContainer">
                <h1 className="loginTitle">Login</h1>
                <label className="loginLabel">Username</label>
                <input className="loginInput" placeholder="Type your username" type="text" ></input>
                <label className="loginLabel">Password</label>
                <input className="loginInput" placeholder="Type your password" type="password" ></input>
                <button className="loginButton" type="button">Entrar<img className="ticketIcon" src={ticketIcon} alt="Ticket Icon"/></button>
            </form>
        </div>
    );
}

export default Login;