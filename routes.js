import React from 'react';
import {NativeRouter, Route, Link} from 'react-router-native';
import Home from './src/Components/Home/Home';
import Profile from './src/Components/Profile/Profile';
export default (
  <>
    <Route component={Home} exact path="/" />
    <Route component={Profile} path="/profile/:user" />
  </>
);
