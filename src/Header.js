import React, { Component } from 'react';
import icon from './location_icon.svg';
import MainPicture from './Main_Picture.png';
import './Header.css';

export default class Header extends Component {
  render() {
    return (
      <header className="header">
        <img alt="Main" src={MainPicture} />
          <div className="header__title">Machu Picchu</div>
          <div className="header__location">
            <img alt="Location icon" src={icon} />
            <span>Cusco, Peru</span>
          </div>
      </header>
    );
  }
}
