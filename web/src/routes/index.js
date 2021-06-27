//library imports
import React from 'react';
import {Switch,Route} from 'react-router-dom';

//local imports
import Home from '../pages/Home';
import Login from '../pages/Login';
import Recomendation from '../pages/Recomendation';

const Routes = () =>{
    return(
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/login" component={Login}/>
                <Route exact path="/recomendation" component={Recomendation}/>
            </Switch>
    );
}

export default Routes;