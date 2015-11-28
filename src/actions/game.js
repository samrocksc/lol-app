export const RECEIVE_STATUS = 'RECEIVE_STATUS';
export const RECEIVE_SERVER_LIST = 'RECEIVE_SERVER_LIST';
 
export function receiveStatus(status){
  console.log('a>receiveStatus',status);
  return {
    type: RECEIVE_STATUS,
    serverStatus: status.services[0].status,
    serverName: status.name
  };
}

export function receiveServerList(shards){
  console.log('a>receiveServerList');
  return{
    type: RECEIVE_SERVER_LIST,
    serverShards: shards
  };
}

//fetch server status
export function fetchStatus(){
  console.log('a>fetchStatus');
  return dispatch => {
    return fetch('http://status.leagueoflegends.com/shards/'+'na')
    .then(response => response.json())
    .then(json => dispatch(receiveStatus(json)));
  };
}

//fetch selected slug
export function fetchSelectedStatus(selectedServer){
  console.log('a>fetchSelectedStatus');
  return dispatch=>{
    return fetch('http://status.leagueoflegends.com/shards/'+selectedServer)
    .then(response => response.json())
    .then(json => dispatch(receiveStatus(json)));
  }
}

//fetches list of server shards
export function fetchShardList(){
  console.log('a>fetchShardList');
  return dispatch => {
    return fetch('http://status.leagueoflegends.com/shards')
    .then(response => response.json())
    .then(json => dispatch(receiveServerList(json)));
  };
}
