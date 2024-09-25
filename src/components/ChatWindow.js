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
        <div>
          <div>We are Online</div>
          <div>{widgetSettings?.widget_builder?.reply_time}</div>
          <button type="button" onClick={() => {
              localStorage.setItem('start', 1);
              setStart(1)
          }}>
            {widgetSettings?.widget_builder?.start_conversation_text}
          </button>
        </div>
      ) : (
          <>
          {!formSubmit ? 

              <>

              <div>Form</div>
              {widgetSettings?.pre_chat_form?.form?.map(item => {


                  return (
                      <div>
                      <div>{item.label}</div>
                      <div>
                        <input type={item.type} name={item.key} placeholder={item.place_holder} />
                      </div>
                      </div>
                  )


              })}
              <button type="button" onClick={() => {
                  localStorage.setItem('form_submit', 1);
                  setFormSubmit(1)
              }}>
                {widgetSettings?.widget_builder?.start_conversation_text}
              </button>
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
