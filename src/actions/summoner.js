import fetch from 'isomorphic-fetch';
export const FETCH_SUMMONER_ID = 'FETCH_SUMMONER_ID'; //look up summoner ID based off of name
export const FETCH_SUMMONER_NAME = 'FETCH_SUMMONER_NAME'; //fetch summoners name based off of ID 

export function fetchSummonerName(data){
  console.log('a->fetchSummonerId');
  return {
    type: FETCH_SUMMONER_NAME,
    summonerName: data
  };
}

//summonerData will contain all of the ID's
export function fetchingSummonerId(data){
  console.log('a>fetchingSummonerId,',data[Object.keys(data)[0]]);
  return {
    type: FETCH_SUMMONER_ID,
    summonerData: data[Object.keys(data)[0]]
  } 
}

//fetch summoner data off of ID
export function fetchSummonerData(summonerId){
  console.log('ac->fetchSummonerData->',summonerId);
  return dispatch =>{
    return fetch('https://na.api.pvp.net/api/lol/na/v1.3/stats/by-summoner/13409/summary?season=SEASON2015&api_key=63abf213-7f41-4f04-9e90-3a05f0f7ef74')
    .then(response => response.json())
    .then(json => dispatch(receiveSummonerData(json)));
  };
}

//finds the summoner ID, can be comma delimited
export function fetchSummonerId(summonerName) {
  console.log('ac>fetchSummonerId for',summonerName);
  return dispatch => {
    return fetch('https://na.api.pvp.net/api/lol/na/v1.4/summoner/by-name/'+summonerName+'?api_key=63abf213-7f41-4f04-9e90-3a05f0f7ef74')
      .then(response => response.json())
      .then(json => dispatch(fetchingSummonerId(json, summonerName)));
  };
}

