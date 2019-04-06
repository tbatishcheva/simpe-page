import React, { Component } from 'react';
import icon from './location_icon.svg';
import mainPicture from './main_picture.png';
import './Header.css';

export default class Header extends Component {
  render() {
    return (
      <header className="header">
        <img className="header-img" alt="Main" src={mainPicture} />
        <div className="header__text">
          <div className="header__title">
            <span>Machu Picchu</span>
          </div>
          <div className="header__location">
            <img className="header__location-img" alt="Location icon" src={icon} />
            <span>Cusco, Peru</span>
          </div>
        </div>
      </header>
    );
  }
}
