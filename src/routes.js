import React from 'react';
import {Switch, Routes} from 'react-router-dom';
import Home from './App'

export default (
    <Switch>
        <Routes component={Home} exact path='/'/>
        <Routes component={Users} exact path='/users'/>
    </Switch>
)