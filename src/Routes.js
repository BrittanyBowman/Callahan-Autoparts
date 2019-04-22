import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import Dash from './Components/Dash/Dash';
import Wiz from './Components/Wiz/Wiz';

export default (
    <Switch>
        <Route path='/' exact component={Dash} />
        <Route path='/wiz' component={Wiz} />
        <Redirect to='/' />
    </Switch>
)