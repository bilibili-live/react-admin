import React, { Component } from 'react';
import LogoImg from './github.png'
import './logo.scss'

class Logo extends Component {
  render() { 
    return (
      <div className="logo-img-wrap">
        <img src={ LogoImg } />
      </div>
    )
  }
}
 
export default Logo;