//todo fetchSummoner, receiveSummoner, findSummonerId
/* Work => goes view->(ac)findSummonerId->FETCH_SUMMONER_ID(r)setSummonerId
 */
import { FETCH_SUMMONER_ID } from '../actions/summoner';

export default function summoner(state = {
  defaultId: '',
  summonerId: '',
  summonerName: '',
  summonerInfo: ''
}, action){
  switch(action.type){
    case FETCH_SUMMONER_ID:
      console.log('r->FETCH_SUMMONER_ID>',action);
      return Object.assign({},state, {
        summonerInfo: action.summonerData,
        summonerId: action.summonerData.id,
        summonerName: action.summonerData.name
      });
    default:
      return state;
  }
}
