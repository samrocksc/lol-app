import 'babel-core/polyfill';
import React, { Component, PropTypes } from 'react';
import { Router, Route, Link, History, Lifecycle, Redirect, IndexRoute } from 'react-router';
/*Components*/
import Layout from '../containers/Layout';
import ShowIndex from '../containers/showIndex';
import ShowChamps from '../containers/showChampions';

export default class AppRouter extends Component{

  render(){
    return(
      <div>
      <Layout />
      <Router>
        <Route path="/" component={ShowIndex}>
          <IndexRoute component={Layout}
          <Route path="showchamps" component={ShowChamps} />
          <Route path="showgear" component={ShowGear} />
        </Route>
      </Router>
      </div>
    )
  }
}


