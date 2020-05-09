import React from 'react'

import  HomeScreen from './screens/home';
import  DiscoveryScreen from './screens/discovery';
import  SearchScreen from './screens/search';
import  AlbumScreen from './screens/album';
import  FavoritesSecreen from './screens/favorites';

import {Switch, Route} from 'react-router-dom';

const Routes = (props) => (
    <Switch>
        <Route exact path='/' component={HomeScreen}/>,
        <Route exact path='/search' component={SearchScreen}/>,
        <Route exact path='/discovery' component={DiscoveryScreen}/>,
        <Route exact path='/favorites' component={FavoritesSecreen}/>,
        <Route exact path='/album/id:' component={AlbumScreen}/>,
    </Switch>
);

export default Routes;

