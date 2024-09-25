import PropTypes from 'prop-types';
import React, { useCallback,useState } from 'react';
import MessageList from './MessageList';
import UserInput from './UserInput';
import Header from './Header';

const ChatWindow = ({ 
  agentProfile, 
  isOpen, 
  onClose, 
  onFilesSelected, 
  onUserInputSubmit, 
  showEmoji, 
  messageList = [], 
  widgetSettings 
}) => {
  const [start, setStart] = useState(localStorage.getItem('start'));
  const [formSubmit, setFormSubmit] = useState(localStorage.getItem('form_submit'));
  const handleUserInputSubmit = useCallback((message) => {
    onUserInputSubmit(message);
  }, [onUserInputSubmit]);

  const handleFilesSelected = useCallback((filesList) => {
    onFilesSelected && onFilesSelected(filesList);
  }, [onFilesSelected]);

  const classList = [
    'sc-chat-window',
    isOpen ? 'opened' : 'closed'
  ];

  return (
    <div className={classList.join(' ')}>
      <Header
        teamName={agentProfile.teamName}
        imageUrl={agentProfile.imageUrl}
        onClose={onClose}
        widgetSettings={widgetSettings}
      />
      {!start ? (
        <div className="we_online_section">
          <div className="text_section">
            <h3>We are Online</h3>
            <p>{widgetSettings?.widget_builder?.reply_time}</p>
            <button className="btn btn_conversation" type="button" onClick={() => {
                localStorage.setItem('start', 1);
                setStart(1)
            }}>
              {widgetSettings?.widget_builder?.start_conversation_text}
            </button>
          </div>
        </div>
      ) : (
          <>
          {!formSubmit ? 

              <>
              <div className="we_online_section">
                
                {widgetSettings?.pre_chat_form?.form?.map(item => {


                    return (
                        <div className="field_section">
                        
                          <input type={item.type} name={item.key} placeholder={item.place_holder} />
                        
                        </div>
                    )


                })}
                <button className="btn_conversation" type="button" onClick={() => {
                    localStorage.setItem('form_submit', 1);
                    setFormSubmit(1)
                }}>
                  {widgetSettings?.widget_builder?.start_conversation_text}
                </button>
              </div>
              </>

          :


               <>
          <MessageList
            messages={messageList}
            imageUrl={agentProfile.imageUrl}
          />
          <UserInput
            onSubmit={handleUserInputSubmit}
            onFilesSelected={handleFilesSelected}
            showEmoji={showEmoji}
          />
        </>

         }
         </>
       
      )}
    </div>
  );
};

ChatWindow.propTypes = {
  agentProfile: PropTypes.object.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onFilesSelected: PropTypes.func,
  onUserInputSubmit: PropTypes.func.isRequired,
  showEmoji: PropTypes.bool,
  messageList: PropTypes.array,
  widgetSettings: PropTypes.object
};

export default ChatWindow;
