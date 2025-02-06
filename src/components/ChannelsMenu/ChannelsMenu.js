import { useState } from "react";
import "./ChannelsMenu.css"; // Import external CSS
import whatsapp from "../../assets/socials/whatsapp.png";
import messenger from "../../assets/socials/messenger.png";
import instagram from "../../assets/socials/instagram.png";
import ChatIcon from "../chatIcon";
import launcherIconActive from '../../assets/mingcute_close-fill.png';

export default function ChannelsMenu({widgetSettings}) {
  const [isOpen, setIsOpen] = useState(false);
  const classList = [
    'social-float sc-launcher',
    (isOpen ? 'opened' : ''),
  ];
  return (
    <div className="floating-menu">
      <div className={`float-menu-items ${isOpen ? "open" : ""}`}>

        <a href={`https://web.whatsapp.com/send/?phone=${widgetSettings?.other_channel && widgetSettings?.other_channel[0].whatsapp}&text=hi`} target="_blank" rel="noopener noreferrer" className="float-menu-item whatsapp">
          <img src={whatsapp} alt="WhatsApp" />
        </a>
        <a href={`https://www.facebook.com/${widgetSettings?.other_channel && widgetSettings?.other_channel[1].messenger}`} target="_blank" rel="noopener noreferrer" className="float-menu-item messenger">
          <img src={messenger} alt="Messenger" />
        </a>
        <a href={`https://www.instagram.com/${widgetSettings?.other_channel && widgetSettings?.other_channel[2].instagram}`} target="_blank" rel="noopener noreferrer" className="float-menu-item instagram">
          <img src={instagram} alt="Instagram" />
        </a>

      </div>

      <button className={classList.join(' ')} onClick={() => setIsOpen(!isOpen)}>
        <img className={'sc-open-icon'} src={launcherIconActive} />
        <ChatIcon iconNo={widgetSettings?.widget_builder?.messageIcon} />
      </button>
    </div>
  );
}
