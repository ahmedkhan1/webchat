import { useState } from "react";
import "./ChannelsMenu.css"; // Import external CSS
import whatsapp from "../../assets/socials/whatsapp.png";
import messenger from "../../assets/socials/messenger.png";
import instagram from "../../assets/socials/instagram.png";
import ChatIcon from "../chatIcon";
import launcherIconActive from '../../assets/mingcute_close-fill.png';

export default function ChannelsMenu({widgetSettings, isWebChannelOpen, handleWebchatMenu}) {
  const [isOpen, setIsOpen] = useState(false);
  const classList = [
    'social-float sc-launcher',
    (isOpen ? 'opened' : ''),
  ];

  const toggleChannel = () => {
    if(isWebChannelOpen){
      handleWebchatMenu();
    } else {
      setIsOpen(!isOpen);
    }
  }
  return (
    <div className="floating-menu">
      <div className={`float-menu-items ${isOpen ? "open" : ""}`}>

        {
          widgetSettings?.other_channel && widgetSettings?.other_channel[0].whatsapp &&
          <a href={`https://web.whatsapp.com/send/?phone=${widgetSettings?.other_channel && widgetSettings?.other_channel[0].whatsapp}&text=${encodeURIComponent("I'm continuing my conversation on WhatsApp. Here's my code:\n" + localStorage.getItem("sessionId"))}`} target="_blank" rel="noopener noreferrer" className="float-menu-item whatsapp">
            <img src={whatsapp} alt="WhatsApp" />
          </a>
        }

        {
          widgetSettings?.other_channel && widgetSettings?.other_channel[1].messenger &&
          <a href={`https://www.facebook.com/${widgetSettings?.other_channel && widgetSettings?.other_channel[1].messenger}`} target="_blank" rel="noopener noreferrer" className="float-menu-item messenger">
            <img src={messenger} alt="Messenger" />
          </a>
        }  
        {
          widgetSettings?.other_channel && widgetSettings?.other_channel[2].instagram &&
          <a href={`https://www.instagram.com/${widgetSettings?.other_channel && widgetSettings?.other_channel[2].instagram}`} target="_blank" rel="noopener noreferrer" className="float-menu-item instagram">
            <img src={instagram} alt="Instagram" />
          </a>
        }  

        {
          widgetSettings?.settings  && widgetSettings?.settings.property_id &&
          <a href={`#`} className="float-menu-item webchat-widget" onClick={() =>{setIsOpen(!isOpen);handleWebchatMenu()}}>
            <ChatIcon iconNo={widgetSettings?.widget_builder?.messageIcon} />
          </a>
        }        

      </div>

      <button className={classList.join(' ')} onClick={() =>toggleChannel()}>
        <img className={'sc-open-icon'} src={launcherIconActive} />
        <ChatIcon iconNo={widgetSettings?.widget_builder?.messageIcon} />
      </button>
    </div>
  );
}
