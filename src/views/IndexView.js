import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as GameActions from '../actions/game';

class IndexView extends Component {
  componentDidMount(){
    const { fetchStatus, fetchShardList } = this.props;
    console.log('componentDidMount props:', this.props);
    fetchShardList();
    fetchStatus();
  }

  selectServer(event){
    let { selectedServer, fetchSelectedStatus } = this.props
    selectedServer = event.target.value
    console.log('selected a server!', selectedServer);
    fetchSelectedStatus(selectedServer);
  }
  render(){
    const { serverName, serverStatus, serverList, selectedServer, defaultServer } = this.props;
    console.log('serverList', serverList);
    //creating a mapped server function!
    const mappedServers = serverList.map(function(server){
      return <option key={server.slug} value={server.slug}>{server.name}</option>
    })
    //hide selected component until needed
    console.log('selectedServer',this.props.selectedServer)
    if(selectedServer != ''){
      return <h2>hey</h2>
    }

    return(
      <div>
      <h3>{serverName} Server Status: <strong>{serverStatus}</strong></h3>
      <p>
      <select onChange={this.selectServer.bind(this)}>
      <option key="default" value="default">Pick a Server</option>
      {mappedServers}
      </select>
      </p>
      </div>
    );
  }
}

//attach redux
function mapStateToProps(state){
  console.log('State Props', state);
  return{
    serverName: state.game.serverName,
    selectedServer: state.game.selectedServer,
    serverStatus: state.game.serverStatus,
    serverList: state.game.serverList,
  };
}

function mapDispatchToProps(dispatch){
  console.log('Available Actions', GameActions);
  return bindActionCreators(GameActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(IndexView);
