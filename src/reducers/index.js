import { combineReducers }    from 'redux';
import { routerStateReducer } from 'redux-router';
import counter                from './counter';
import champions from './champions';
import game from './game';
import summoner from'./summoner';

export default combineReducers({
  counter,
  game,
  champions,
  summoner,
  router: routerStateReducer
});
