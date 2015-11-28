import React                 from 'react';
import { Route, IndexRoute } from 'react-router';
import CoreLayout            from 'layouts/CoreLayout';
import HomeView              from 'views/HomeView';
import ChampView from 'views/ChampView';
import SummonerView from 'views/SummonerView';
import IndexView from 'views/IndexView';

export default (
  <Route path='/' component={CoreLayout}>
    <IndexRoute component={IndexView} />
  </Route>
);
