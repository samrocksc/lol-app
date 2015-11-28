import React, { Component } from 'react';
export default class championDropdown extends Component {
  render(){
    //importing props from showChampions
    const { champList } = this.props;
    //Create Dropdown List
    return(
        <div>
        <select>
          <option key='default' id='default'>Pick A Champion</option>
        </select>
        </div>
        );
  }
}
