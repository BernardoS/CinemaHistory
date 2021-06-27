//library imports
import React from 'react';


//local imports
import './style.css'
import NavBar from '../../components/NavBar';
import Routes from '../../routes';
import { SmoothProvider } from 'react-smooth-scrolling';

const App = () =>{
    return(
        <SmoothProvider skew={true} ease={0.1} >
                <NavBar/>
                <Routes/>
        </SmoothProvider>
    );
};

export default App;