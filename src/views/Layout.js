import React, { Component, PropTypes } from 'react';
import ShowIndex from '../containers/showIndex';
import { Link } from 'react-router';
import MainDropdown from '../components/mainDropdown';
/*setup redux*/



export default class Layout extends Component {
    render() {
    return (
      <div className="mainApp">
        <div className="demo-card-wide mdl-card mdl-shadow--2dp">
          <div className="mdl-card__title">
            <h2 className="mdl-card__title-text">League App</h2>
          </div>
          <div className="mdl-card__supporting-text">
            {this.props.children}
          </div>
          <MainDropdown/>
          <div className="mdl-card__menu">
            <button id="demo-menu-lower-right" className="mdl-button mdl-js-button mdl-button--icon">
            <i className="material-icons">more_vert</i>
            </button>
            <ul className="mdl-menu mdl-menu--bottom-right mdl-js-menu mdl-js-ripple-effect" htmlFor="demo-menu-lower-right">
              <li className="mdl-menu__item">
                <Link to="/showchamps" className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">Show Champions</Link>
              </li>
              <li className="mdl-menu__item">
                <Link to="/showplayer" className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">Show Summoner</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

