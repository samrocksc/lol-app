import 'babel-core/polyfill';
import React, { Component, PropTypes } from 'react';
import { Router, Route, Link, History, Lifecycle, Redirect, IndexRoute } from 'react-router';
/*Components*/
import Layout from '../containers/Layout';
import ShowIndex from '../containers/showIndex';
import ShowChamps from '../containers/showChampions';
import ShowPlayer from '../containers/showPlayer';

export default class App extends Component{
  render(){
    return(
      <div>
      <Router>
        <Route path="/" component={Layout}>
          <IndexRoute component={ShowIndex} />
          <Route path="showchamps" component={ShowChamps} />
          <Route path="showplayer" component={ShowPlayer} />
        </Route>
      </Router>
      </div>
    )
  }
}


