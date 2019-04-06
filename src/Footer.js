import React, { Component } from 'react';
import cameraIcon from './camera_icon.svg';
import heartIcon from './heart_icon.svg';
import bubbleIcon from './bubble_icon.svg';
import './Footer.css';

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="footer_item">
          <img alt="icon" src={cameraIcon} />
          <p>19</p>
        </div>
        <div className="footer_item">
          <img alt="icon" src={heartIcon} />
          <p>24</p>
        </div>
        <div className="footer_item">
          <img alt="icon" src={bubbleIcon} />
          <p>12</p>
        </div>
      </footer>
    );
  }
}
