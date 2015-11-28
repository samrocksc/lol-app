//ES6 React Component imports, standard
import React, { Component } from 'react';
import ReactDOM, { findDOMNode } from 'react-dom';
//import our redux connectors
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
//import our action file so that we can quickly dispatch whatever we need.
import * as SummonerActions from '../actions/summoner';
import SummonerData from '../components/summonerData';


//kick off the main component
export default class SummonerView extends Component {
//preload any data we may need
  componentDidMount(){
    console.log('Current Props',this.props)
  }
  //NOTE we auto bind the action with this.formAction.bind(this)
  formAction(){
    const { fetchSummonerId } = this.props;
    let summonerName = ReactDOM.findDOMNode(this.refs.summonerName).value;
    console.log('looking up:'+summonerName);
    fetchSummonerId(summonerName);
  }
  render(){
    const { summonerName, summonerId, summonerInfo } = this.props;
    console.log('summonerInfo:',summonerInfo);
    let showSummonerData = '';
    if(summonerId != ''){
      showSummonerData = <SummonerData data={summonerInfo}/>
    }
    return(
      <div>
        <form onSubmit={this.formAction.bind(this)}>
          <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
            <input ref="summonerName" className="mdl-textfield__input" type="text" id="summonerName" />
            <label className="mdl-textfield__label" htmlFor="summonerName">Summoner Name</label>
          </div>
          <button type="submit" className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored">
            Button
          </button>
        </form>
        {showSummonerData}
      </div>
    );
  }
}

function mapStateToProps(state){
  console.log('Available Props', state);
  return{
    summonerName: state.summoner.summonerName,
    summonerId: state.summoner.summonerId,
    summonerInfo: state.summoner.summonerInfo
  };
}

function mapDispatchToProps(dispatch){
  console.log('Available Dispatches:', SummonerActions)
  return bindActionCreators(SummonerActions, dispatch);
}

//connect the component and props to the store
export default connect(mapStateToProps, mapDispatchToProps)(SummonerView);
