import React, { Component } from 'react';
import TextMessage from './TextMessage';
import EmojiMessage from './EmojiMessage';
import FileMessage from './FileMessage';
import VideoMessage from './VideoMessage';
import VoiceMessage from './VoiceMessage';
import DocumentMessage from './DocumentMessage';

import chatIconUrl from './../../assets/chat-icon.svg';
import bot from './../../assets/bot-icon.png';


class Message extends Component {
  constructor(){
    super();
    this.state = {
        name : (localStorage.getItem("form_submit"))? localStorage.getItem("form_submit").charAt(0) : ""
    }
  }

  _renderMessageOfType(typex) {
    
    const type = typex.toString()
    
    switch(type) {
    case '0':
      return <TextMessage clickMe={this.props.clickMe} {...this.props.message} />;
    case 'ai-0':
      if (this.props.message?.responded_by?.toLowerCase() !== "ai assistant") {
        return <TextMessage clickMe={this.props.clickMe} {...this.props.message} />;
      }
      break; 
    case '19':
      return <TextMessage clickMe={this.props.clickMe} {...this.props.message} />;
    case 'emoji':
      return <EmojiMessage {...this.props.message} />;
    case '1':
      return <FileMessage data={this.props.message} />;
    case '3':
      return <VideoMessage data={this.props.message} />;
    case '2':
      return <VoiceMessage data={this.props.message} />;
    case '9':
      this.props.message.data = this.props?.message?.caption;
      return (<div className='document-msg'>
        <DocumentMessage data={this.props.message} />
        <TextMessage clickMe={this.props.clickMe} {...this.props.message} />      
      </ div>
      );
    // case '300':
      // return <TextMessage clickMe={this.props.clickMe} {...this.props.message} />;

    default:
      console.error(`Attempting to load message with unsupported file type '${type}'`);
      //console.log(this.props)
    }
  }

  render () {
    let contentClassList = [
      'sc-message--content',
      (this.props.message.key_from_me === 0 ? 'sent' : 'received')
    ];

    if(this.props.message.key_from_me === 0){
      return (
        <div className="sc-message" key={this.props.message._id}>
          <div className={contentClassList.join(' ')}>
          
            {this._renderMessageOfType(this.props.message.media_wa_type)}
          
          </div>
          <div className='user-profile'>
            <p>{(this.state && this.state.name)? this.state.name : ""}</p>
          </div>
        </div>);
    } else if(this.props.message.media_wa_type === "300"){
      return (
        <div className="sc-message" key={this.props.message._id}>
          <div className={contentClassList.join(' ')}>
          
            {this._renderMessageOfType(this.props.message.media_wa_type)}
          
          </div>
        </div>);
    } {
      return (
        <div className="sc-message" key={this.props.message._id}>
          {
            (this.props.message?.responded_by?.toLowerCase() === "chatbot" || this.props.message.key_from_me === 1)?
            <div className='bot-profile'>
              <img src={bot} />
            </div> 
            :
            <div className='agent-profile'>
                <p>{(this.props.message?.responded_by)? this.props.message?.responded_by?.charAt(0) : ""}</p>
            </div>
          }
          <div className={contentClassList.join(' ')}>
          
            {this._renderMessageOfType(this.props.message.media_wa_type)}
          
          </div>
        </div>);
    }

  }
}

export default Message;
