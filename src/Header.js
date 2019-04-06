import React, { Component } from 'react';
import icon from './location_icon.svg';
import './Header.css';

export default class Header extends Component {
  render() {
    return (
      <div>
        <header className="header">
          <div className="header__content">
            <p>Machu Picchu</p>
            <div className="header__item">
              <img alt="Location icon" src={icon} />
              <p>Cusco, Peru</p>
            </div>
          </div>
        </header>
      </div>
    );
  }
}
