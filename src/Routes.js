import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import Dash from './Components/Dash/Dash';
import Wiz from './Components/Wiz/Wiz';
import Search from './Components/Search/Search';
import Auth from './Components/Auth/Auth';

export default (
    <Switch>
        <Route path='/dashboard' component={Dash} />
        <Route path ='/' exact component={Auth} />
        <Route path='/wiz' component={Wiz} />
        <Route path='/search' component={Search} />
        <Redirect to='/' />
    </Switch>
)