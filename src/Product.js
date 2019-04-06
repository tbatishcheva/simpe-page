import React, { Component } from 'react';
import './Product.css';
import Header from './Header';
import Footer from './Footer';

export default class Product extends Component {
  render() {
    return (
      <div className="product">
        <Header />
        <Footer />
      </div>
    );
  }
}
