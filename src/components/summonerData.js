import React, { Component } from 'react';
// displays a champions data
export default class summonerData extends Component {
  render(){
    const { data } = this.props;
    console.log('data:',data)
    return(
      <div>
      <h3>Name: {data.name}</h3>
      <h3>Id: {data.id}</h3>
      </div>
    )
  }
}

