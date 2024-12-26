import PropTypes from "prop-types";
import React, { useCallback, useState } from "react";
import MessageList from "./MessageList";
import UserInput from "./UserInput";
import Header from "./Header";
import { fetchWrapper } from "./helpers";
import EoceanIcon from '../assets/eocean.png';

const ChatWindow = ({
  agentProfile,
  isOpen,
  onClose,
  onFilesSelected,
  onUserInputSubmit,
  showEmoji,
  messageList = [],
  widgetSettings,
  clickMe,
}) => {
  const [start, setStart] = useState(localStorage.getItem("start"));
  const [formSubmit, setFormSubmit] = useState(
    localStorage.getItem("form_submit")
  );
  const handleUserInputSubmit = useCallback(
    (message) => {
      onUserInputSubmit(message);
    },
    [onUserInputSubmit]
  );

  const handleFilesSelected = useCallback(
    (filesList) => {
      onFilesSelected && onFilesSelected(filesList);
    },
    [onFilesSelected]
  );

  const classList = ["sc-chat-window", isOpen ? "opened" : "closed"];

    // Example: Send the filtered data to your API
  const saveUserInfo = async (data) => {
    // Prod 
    const backendUrl = 'https://7rpgggrlvh.execute-api.us-east-1.amazonaws.com/dev';
    // QA 
    // const backendUrl =  "https://bu4qbf7zu9.execute-api.us-east-1.amazonaws.com/dev";
    try {
      const result = await fetchWrapper.post(`${backendUrl}/saveUserInfo`, {}, data);
      // const response = await fetch(`${backendUrl}/saveUserInfo`, {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify(data),
      // });
      // const result = await response.json();
      console.log('API response:', result);
    } catch (error) {
      console.error('Error saving user info:', error);
    }
  };

  const handleSubmit = (event) => {
    const formData = new FormData(event.currentTarget);
    event.preventDefault();
    const formVal = [];
    for (let [key, value] of formData.entries()) {
      formVal[key] = value;
    }
    console.log(":::form values:::",formVal);
    
    const requiredSubstrings = {
      // 'name' maps to
      name: "name",  
      username: "name",  
      profile_name : "name",

      // 'email' maps to 
      email: "email",  
      customer_email: "email",
      user_email: "email",

      // 'phone' maps to 'contact_number'
      phone: "phone_number",
      contact_number: "phone_number",
      number: "phone_number",  
      phone_number : "phone_number",

      // 'address' maps to 'customer_address'
      address: "address",
      customer_address: "address"
    };;

   // Initialize an object to hold the data to send
    const dataToSend = {
        id: localStorage.getItem("sessionId"),
        org_unit_id:localStorage.getItem("org")     
    };

    // Iterate over the form data and check if the key includes any of the required substrings
    for (let [key, value] of formData.entries()) {
      // Check if any required substring is included in the key (case-insensitive check)
      for (let [substring, backendKey] of Object.entries(requiredSubstrings)) {
        if (key.toLowerCase().includes(substring)) {
          dataToSend[backendKey] = value;
          break;  // Once we match the substring, no need to check further substrings
        }
      }
    }


    localStorage.setItem("form_submit", formVal["name"]);
    // form submit for basic details
    // info will be saved here for name,email,etc 
    setFormSubmit(1);
    try {
      saveUserInfo(dataToSend)
    } catch (error) {
        console.log("error saving user info");
    }
  };

  

  return (
    <div className={classList.join(" ")}>
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
            {widgetSettings?.widget_builder?.reply_time && widgetSettings?.widget_builder?.reply_time.toString().length > 0 && (
              <p>We typically reply in {widgetSettings?.widget_builder?.reply_time}</p>
            )}            <button
              className="btn btn_conversation"
              style={{
                backgroundColor: widgetSettings?.widget_builder?.widget_color,
              }}
              type="button"
              onClick={() => {
                localStorage.setItem("start", 1);
                setStart(1);
              }}
            >
              {widgetSettings?.widget_builder?.start_conversation_text}
            </button>
           <div className="poweredBy_footer" style={{ marginTop: "10px"}}>
             <img src={EoceanIcon} alt="eocean logo" width={20} height={20}/>
             <p style={{paddingLeft:5 , paddingTop:6 , fontSize:"12px"}}>Powered by eOcean</p>
           </div>
          </div>
        </div>
      ) : (
        <>
          {!formSubmit ? (
            <>
              <div className="we_online_section">
                <form onSubmit={handleSubmit}>
                  <div style={{ marginBottom: 10 }}>
                    <b>{widgetSettings?.pre_chat_form?.message}</b>
                  </div>
                  {widgetSettings?.pre_chat_form?.form?.map((item) => {
                    return item.display !== '0' ? ( // Check if the input should be displayed
                      <div className="field_section" key={item.key}>
                        <input
                          type={item.type}
                          name={item.key}
                          required={item?.required === '1'}
                          placeholder={item.place_holder}
                          maxLength={30} // Default to 100 characters if maxLength is not specified
                        />
                      </div>
                    ) : null; 
                  })}
                  <button
                    className="btn_conversation"
                    style={{
                      backgroundColor:
                        widgetSettings?.widget_builder?.widget_color,
                    }}
                    type="submit"
                    onCldick={() => {
                      //localStorage.setItem('form_submit', 1);
                      //setFormSubmit(1)
                    }}
                  >
                    {widgetSettings?.widget_builder?.start_conversation_text}
                  </button>
                </form>
                  <div className="poweredBy_footer">
                    <img src={EoceanIcon} alt="eocean logo" width={20} height={20} />
                    <p style={{ paddingLeft: 5 }}>Powered by eOcean</p>
                  </div>
              </div>
            </>
          ) : (
            <>
              <MessageList
                messages={messageList}
                imageUrl={agentProfile.imageUrl}
                clickMe={clickMe}
              />
              <UserInput
                onSubmit={handleUserInputSubmit}
                onFilesSelected={handleFilesSelected}
                showEmoji={showEmoji}
              />
              <div className="poweredBy_footer">
                    <img src={EoceanIcon} alt="eocean logo" width={20} height={20} />
                    <p style={{ paddingLeft: 5 }}>Powered by eOcean</p>
                  </div>
            </>
          )}
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
  widgetSettings: PropTypes.object,
};

export default ChatWindow;
