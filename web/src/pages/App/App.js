//library imports
import React,{useEffect} from 'react';

//local imports
import './style.css'
import NavBar from '../../components/NavBar';
import Routes from '../../routes';
import { SmoothProvider } from 'react-smooth-scrolling';
import { useHistory } from 'react-router-dom';

const App = () =>{
    const history = useHistory() 

    useEffect(() => {
       return history.listen((location) => { 
          console.log(`You changed the page to: ${location.pathname}`) 
       }) 
    },[history])
    
    return(
        <SmoothProvider skew={true} ease={0.1} >
                <NavBar/>
                <Routes/>
        </SmoothProvider>
    );
};

export default App;