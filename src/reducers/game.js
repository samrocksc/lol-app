//import modules
import _ from 'lodash';
//importing actions
import { RECEIVE_STATUS, RECEIVE_SERVER_LIST } from '../actions/game';
// TODO change North American to dynamic data on front page
export default function game(state = {
  serverStatus: '',
  serverList: [],
  selectedServer: '',
  defaultServer: 'na',
  serverName: ''
},action){
  switch(action.type){
    case RECEIVE_SERVER_LIST:
      console.log('r>RECEIVE_SERVER_LIST');
      return Object.assign({}, state, {
        serverList:
          action.serverShards
      });
    case RECEIVE_STATUS:
      console.log('r>RECEIVE_STATUS',action);
      return Object.assign({}, state, {
        serverStatus: action.serverStatus,
        serverName: action.serverName
      });
    default:
      return state;
  }
}
