import React, { Component } from 'react'
import { Link } from 'react-router';

export default class MainDropdown extends Component {
  render(){
    return(
      <div className="mdl-card__actions mdl-card--border">
      <Link to="/" id="mainMenu" className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">Home</Link>
      </div>

    );
  }
}
