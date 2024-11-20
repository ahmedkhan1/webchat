import React, { Component } from 'react';
import TextMessage from './TextMessage';
import EmojiMessage from './EmojiMessage';
import FileMessage from './FileMessage';
import VideoMessage from './VideoMessage';
import VoiceMessage from './VoiceMessage';
import DocumentMessage from './DocumentMessage';

import chatIconUrl from './../../assets/chat-icon.svg';


class Message extends Component {

  _renderMessageOfType(typex) {

    const type = typex.toString()
    switch(type) {
    case '0':
      return <TextMessage clickMe={this.props.clickMe} {...this.props.message} />;
    case 'ai-0':
      return <TextMessage clickMe={this.props.clickMe} {...this.props.message} />;
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
      return <DocumentMessage data={this.props.message} />;
    default:
      console.error(`Attempting to load message with unsupported file type '${type}'`);
      console.log(this.props)
    }
  }

  render () {

     
    let contentClassList = [
      'sc-message--content',
      (this.props.message.key_from_me === 0 ? 'sent' : 'received')
    ];
    return (
      <div className="sc-message">
        <div className={contentClassList.join(' ')}>
        
          {this._renderMessageOfType(this.props.message.media_wa_type)}
         
        </div>
      </div>);
  }
}

export default Message;
