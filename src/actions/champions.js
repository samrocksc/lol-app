import fetch from 'isomorphic-fetch';
export const RECEIVE_CHAMPS = 'RECEIVE_CHAMPS';
export const RESET_LIST = 'RESET_LIST';
export const RECEIVE_CHAMP_DATA = 'RECEIVE_CHAMP_DATA';

//receives champion list on initializing
export function receiveChamps(champs) {
  console.log('a->receiveChamps');
  return {
    type: RECEIVE_CHAMPS,
    list: champs
  };
}

//now defunct reset button
export function resetList() {
  console.log('a->resetList')
    return {
      type: RESET_LIST
    };
}

//loads all champs data for reducer parsing
export function receiveChampData(json, selectedChamp){
  console.log('a>receiveChampData', json);
  console.log('a>receiveChampData.selectedChamp', selectedChamp);
  return{
    type: RECEIVE_CHAMP_DATA,
    champData: json,
    champName: selectedChamp
  }
}

export function resetListAction() {
  consle.log('ac->resetListAction');
  return (dispatch, getState) => {
    const {
      champList
    } = getState();
    dispatch(resetList());
  };
}

export function fetchChamps() {
  console.log('ac->fetchChamps');
  return dispatch => {
    return fetch('https://global.api.pvp.net/api/lol/static-data/na/v1.2/champion?dataById=true&champData=allytips,blurb,enemytips,image&api_key=63abf213-7f41-4f04-9e90-3a05f0f7ef74')
      .then(response => response.json())
      .then(json => dispatch(receiveChamps(json.data)));
  };
}

export function loadChampData(selectedChamp){
  console.log('ac->loadChampData',selectedChamp);
  return dispatch => {
    return fetch('https://global.api.pvp.net/api/lol/static-data/na/v1.2/champion?dataById=true&champData=allytips,blurb,enemytips,image&api_key=63abf213-7f41-4f04-9e90-3a05f0f7ef74')
      .then(response => response.json())
      .then(json => dispatch(receiveChampData(json, selectedChamp)))
  };
}
