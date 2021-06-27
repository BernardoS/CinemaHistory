//library imports
import React from 'react';
import {Switch,Route} from 'react-router-dom';

//local imports
import Home from '../pages/Home';

const Routes = () =>{
    return(
            <Switch>
                <Route exact path="/" component={Home}/>
            </Switch>
    );
}

export default Routes;