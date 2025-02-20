import React, { Component } from "react";
import closeIcon from "./../assets/close-icon.png";
import dots from "./../assets/dots.png";

import whatsapp from "./../assets/socials/whatsapp.png";
import messenger from "./../assets/socials/messenger.png";
import instagram from "./../assets/socials/instagram.png";
import sound from "./../assets/sound.png";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false,
      soundOn: (localStorage.getItem("sound") === "")? false : (localStorage.getItem("sound") === "true")? true : false,
    };
  }

  toggleMenu = () => {
    this.setState((prevState) => ({ menuOpen: !prevState.menuOpen }));
  };

  toggleSound = (e) => {
    this.setState((prevState) => ({ soundOn: !prevState.soundOn }));
    localStorage.setItem("sound", e.target.checked);
  };

  isAvailableForChat = () => {
    if(this.props.workingHours && this.props.workingHours?.length && this.props.widgetSettings?.chat_bot?.bot_id){
      const today = new Date();

      const { startTime, endTime } = this.props.workingHours[today.getDay()];

      // Parse start and end times
      const parseTime = (timeStr) => {
        const [time, modifier] = timeStr.split(" ");
        let [hours, minutes] = time.split(":").map(Number);
    
        if (modifier.toLowerCase() === "pm" && hours !== 12) {
          hours += 12;
        }
        if (modifier.toLowerCase() === "am" && hours === 12) {
          hours = 0;
        }
        return { hours, minutes };
      };
    
      const start = parseTime(startTime);
      const end = parseTime(endTime);
    
      // Get current time in hours and minutes
      const now = new Date();
      const currentHours = now.getHours();
      const currentMinutes = now.getMinutes();
    
      // Compare current time with start and end times
      const isAfterStart =
        currentHours > start.hours ||
        (currentHours === start.hours && currentMinutes >= start.minutes);
    
      const isBeforeEnd =
        currentHours < end.hours ||
        (currentHours === end.hours && currentMinutes <= end.minutes);
    
      // Check if current time is within business hours
      return (isAfterStart && isBeforeEnd) || this.props.widgetSettings?.chat_bot?.bot_id;
    } else if(this.props.workingHours && !this.props.workingHours?.length && this.props.widgetSettings?.chat_bot?.bot_id){
      return true;
    }
    return false;
  };

  showMenu = () => {
    return (this.props.widgetSettings?.widget_builder?.incoming_msg_sound !== "0" ||
      this.props.widgetSettings?.other_channel )
  }

  render() {
    const { menuOpen, soundOn } = this.state;

    return (
      <div className="sc-header">
        {this.props.imageUrl && (
          <img className="sc-header--img" src={this.props.imageUrl} alt="logo" />
        )}
        <div className="sc-header--team-name">
          <h3>{this.props.widgetSettings?.widget_builder?.welcome_heading}</h3>
          <p>{this.props.widgetSettings?.widget_builder?.welcome_tagline}</p>
        </div>

        <div className="sc-header--options">
          <div className={(this.isAvailableForChat())? `sc-header--agent-status active ${this.showMenu()? 'menu-active' : 'menu-inactive'}` : `sc-header--agent-status inactive ${this.showMenu()? 'menu-active' : 'menu-inactive'}`}></div>
          
          {
            this.showMenu() &&
            <div className="sc-header--settings-button" onClick={this.toggleMenu}>
              <img src={dots} alt="options" />
            </div>
          }


          <div
            className={`menu-dropdown ${menuOpen ? "open" : ""}`}
          >
            {
              // revert
              this.props.widgetSettings?.widget_builder?.incoming_msg_sound !== "0" && (
                <div className="menu-item">
                  <img src={sound} alt="sound" />
                  <span className="sound-txt">Sound {soundOn ? "on" : "off"}</span>
                  <label className="switch">
                    <input
                      type="checkbox"
                      checked={soundOn}
                      onChange={this.toggleSound}
                    />
                    <span className="slider"></span>
                  </label>
                </div>
              )
            }

            {
              this.props.widgetSettings?.other_channel && this.props.widgetSettings?.other_channel?.whatsapp &&
              <a href={"#"} className="menu-item" onClick={()=>{this.toggleMenu();this.props.openWhatsAppRedirect()}}>
                <img src={whatsapp} className="insta-menu" alt="WhatsApp" /> Continue on WhatsApp
              </a>
            }
            {
              this.props.widgetSettings?.other_channel && this.props.widgetSettings?.other_channel?.messenger &&
              <a href={`https://www.facebook.com/${this.props.widgetSettings?.other_channel && this.props.widgetSettings?.other_channel?.messenger}`} className="menu-item" target={"_blank"}>
                <img src={messenger} alt="Messenger" /> Continue on Messenger
              </a>
            }
            {
              this.props.widgetSettings?.other_channel && this.props.widgetSettings?.other_channel?.instagram &&
              <a href={`https://www.instagram.com/${this.props.widgetSettings?.other_channel && this.props.widgetSettings?.other_channel?.instagram}`} className="menu-item" target={"_blank"}>
                <img src={instagram} alt="Instagram" /> Continue on Instagram
              </a>
            }
          </div>

          {
            menuOpen && (
              <div className="settings-overlay" onClick={this.toggleMenu}></div>
            )
          }

          <div
            className="sc-header--close-button"
            onClick={this.props.onClose}
          >
            <img src={closeIcon} alt="close" />
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
