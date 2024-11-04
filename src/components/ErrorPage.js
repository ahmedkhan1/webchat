import React, { useState} from 'react';
import launcherIcon from './../assets/tdesign_chat.png';
import incomingMessageSound from './../assets/sounds/notification.mp3';
import launcherIconActive from './../assets/mingcute_close-fill.png';

const ErrorPage = (props) => {

const [isOpen,setIsOpen] = useState(false)
    

    const classList = [
      'sc-launcher',
      (props.isOpen ? 'opened' : ''),
    ];


      const classList2 = [
    'sc-chat-window',
    props.isOpen ? 'opened' : 'closed'
  ];
    const handleClick = () => {
        setIsOpen(true)
        props.handleClick()
    }
    return (

        <div id="sc-launcher">
        <div className={classList.join(' ')} onClick={ () => handleClick()}>
         
          <img className={'sc-open-icon'} src={launcherIconActive} />
          <img className={'sc-closed-icon'} src={launcherIcon} /> 
          
        </div>

                <div  className={classList2.join(' ')}>
                  
                  <div className="sc-header">
                   
                    <div className="sc-header--team-name"> 
                      <h3>Error</h3>
                      
                    
                    </div>
                   
                   
                  </div>

               
                </div>
        </div>
      )
}

export default ErrorPage;