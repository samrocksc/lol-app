//import functions from your actionCreators file
import { RECEIVE_CHAMP_DATA, RECEIVE_CHAMPS,RESET_LIST, RECEIVE_SELECTED_CHAMP } from '../actions/champions'; 

export default function champions(state = {
  defaultText: 'Annie',
  selectedChamp: '',
  champList: [],
  isFetching: false,
  champSelected: '',
  champData: [],
  champInfo: [],
  champName: '',
  champId: '',
},action){
  switch(action.type){ 
    case RECEIVE_CHAMPS:
      console.log('r->RECEIVE_CHAMPS');
      return Object.assign({}, state, {
        champList: _.pluck(action.list, 'name'),
      });
    case RESET_LIST:
      console.log('r->RESET_LIST');
      return Object.assign({}, state, {
        champList: ['reset','via','actionCreator']
      });
    case RECEIVE_CHAMP_DATA:
      console.log('r->RECEIVE_CHAMP_DATA',action);
      return Object.assign({}, state, {
        champName: action.champName,
        champData: action.champData.data,
        champId: _.result(_.find(action.champData.data, 'name', action.champName), 'id'),
      });
    default:
      return state;
  }
}

