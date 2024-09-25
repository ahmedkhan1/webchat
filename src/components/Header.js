import React, { Component } from 'react';
import closeIcon from './../assets/close-icon.png';


class Header extends Component {

  render() {
    return (
      <div className="sc-header">
        {/*<img className="sc-header--img" src={this.props.imageUrl} alt="" />*/}
        <div className="sc-header--team-name"> 
          <h3>{this.props.widgetSettings?.widget_builder?.welcome_heading} </h3>
          
          <p>{this.props.widgetSettings?.widget_builder?.welcome_tagline} </p>
        </div>
       
        {/*<div className="sc-header--close-button" onClick={this.props.onClose}>
                  <img src={closeIcon} alt="" />
                </div>*/}
      </div>
    );
  }
}

export default Header;
