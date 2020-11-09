import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Login from './components/Login';
import Welcome from './components/Welcome';
import About from './components/About';
import Contact from './components/Contact';

export default (
    <Switch>
        <Route exact path="/" component={Login}/>
        <Route path="/welcome" component={Welcome}/>
        <Route path="/about" component={About}/>
        <Route path="/contact" component={Contact}/>
    </Switch>
)