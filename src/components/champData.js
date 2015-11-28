//This component displays data about a champ
import React, { Component } from 'react';
/*
 * Shows a dumb component for character info from
 * selectedChamp dispatch.
 */
// TODO sanitize the champ data
export default class champData extends Component {
  componentDidMount(){
    console.log('componentDidMount');
  }
  render(){
    const { champInfo } = this.props;
    console.log('Props for champData:', this.props);
    let bg = document.getElementsByClassName('mdl-card__title')[0];

    bg.style.background = "url(http://ddragon.leagueoflegends.com/cdn/img/champion/loading/"+champInfo.key+"_0.jpg) top / cover";

    return(
        <div>
        <h3>{champInfo.name}</h3>
        <h4>{champInfo.title}</h4>
        <p><i>{champInfo.blurb}</i></p>
        </div>
        );
  }
}
