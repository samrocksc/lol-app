import React, { Component } from 'react';
//Setup Redux
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ChampData from '../components/champData';
import * as ChampActions from '../actions/champions';


class ChampView extends Component {
  //mounting champions when component mounts
  componentWillMount(){
    const { fetchChamps } = this.props;
    fetchChamps();
  }

  selectChamp(event){
    let { changeSelectedChamp, championName, selectChampion, loadChampData, selectedChamp } = this.props;
    selectedChamp = event.target.value;
    console.log(selectedChamp,'was selected');
    loadChampData(selectedChamp);
  }
  render(){
    const { champId, champData,champTitle, champAllyTip, champEnemyTip, champBlurb, champList, selectedChamp, champName } = this.props;
    const champDropdown = champList.sort().map(function(champion){
      return <option value={champion} key={champion}>{champion}</option>
    })
    let selectedData = champData[champId];
    let champComponent = champName;
    if(this.props.champName != ''){
      champComponent = <ChampData champInfo={selectedData} />
    };
    console.log('Data for selected Champion', selectedData);
    return(
        <div>
        <h4>Champion</h4>
        <p>
        <select onChange={this.selectChamp.bind(this)}>
        <option value='default' key='default'>Pick A Champ</option>
        {champDropdown}
        </select>
        </p>
        {champComponent}
        </div>
        );
  }
}

function mapStateToProps(state){
  console.log('Available Props', state);
  return{
    champId: state.champions.champId,
    selectedChamp: state.champions.selectedChamp,
    champList: state.champions.champList,
    champName: state.champions.champName,
    champData: state.champions.champData
  };
}

function mapDispatchToProps(dispatch){
  console.log('Available Dispatches:',ChampActions);
  return bindActionCreators(ChampActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ChampView);
