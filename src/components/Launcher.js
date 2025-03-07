import PropTypes from 'prop-types';
import React, { Component } from 'react';
import ChatWindow from './ChatWindow';
import launcherIcon from './../assets/tdesign_chat.png';
import launcherIconActive from './../assets/mingcute_close-fill.png';
import ChatIcon from './ChatIcons';
import ChannelsMenu from './ChannelsMenu/ChannelsMenu';

class Launcher extends React.PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      launcherIcon,
      isOpen: false
    };
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.mute) { return; }
    const nextMessage = nextProps.messageList[nextProps.messageList.length - 1];
    const isIncoming = (nextMessage || {}).author === 'them';
    const isNew = nextProps.messageList.length > this.props.messageList.length;
    console.log("Isnew", this.props);
    if (isIncoming && isNew || isNew && nextMessage.key_from_me === 1 && localStorage.getItem("sound") === "true") {
      this.playIncomingMessageSound();
    }
  }

  async playIncomingMessageSound() {
    try{
      var audio = new Audio("https://eoceanwabaqa.com/sound/notification.mp3");
      await audio.play();
    } catch(err){
      console.log(err);
    }
  }
  handleWebchatMenu() {
    this.handleClick();
  }
  handleClick() {
    if (this.props.handleClick !== undefined) {
      if(this.props.isOpen) {
        this.props.onClose();
      } else{
        this.props.handleClick();
      }
    } else {
      this.setState({
        isOpen: !this.state.isOpen,
      });
    }
  }
  handleWidgetBtn() {
    this.props.handleClick();
  }
  render() {
    const isOpen = this.props.hasOwnProperty('isOpen') ? this.props.isOpen : this.state.isOpen;
    const classList = [
      'sc-launcher',
      (isOpen ? 'opened' : ''),
    ];
    return (
      <div id="sc-launcher">
        {/* Load Floading Channel menu if other channels exist */}
        {
          this.props.widgetSettings && this.props.widgetSettings?.other_channel ? 
          <ChannelsMenu 
            isWebChannelOpen={isOpen}
            widgetSettings={this.props.widgetSettings}
            handleWebchatMenu={this.handleWidgetBtn.bind(this)}
          />
          :
          <div className={classList.join(' ')} onClick={this.handleWidgetBtn.bind(this)}>
            <MessageCount count={this.props.newMessagesCount} isOpen={isOpen} />
            <img className={'sc-open-icon'} src={launcherIconActive} />

            <ChatIcon iconNo={this.props.widgetSettings?.widget_builder?.messageIcon} />

            <p>{this.props.widgetSettings?.widget_builder?.bubble_type == 1 &&

                this.props.widgetSettings.widget_builder.bubble_text
            }</p>
          </div>
        }

        <ChatWindow
          workingHours={this.props.workingHours}
          messageList={this.props.messageList}
          onUserInputSubmit={this.props.onMessageWasSent}
          onFilesSelected={this.props.onFilesSelected}
          agentProfile={this.props.agentProfile}
          isOpen={isOpen}
          onClose={this.props.onClose}
          showEmoji={this.props.showEmoji}
          widgetSettings={this.props.widgetSettings}
          clickMe={this.props.clickMe}
          onSendPrivateMessage={this.props.onMessageWasSent}
          startConnection={()=>this.props.startConnection}
          openWhatsAppRedirect={this.props.openWhatsAppRedirect}
        />
      </div>
    );
  }
}

const MessageCount = (props) => {
  if (props.count === 0 || props.isOpen === true) { return null; }
  return (
    <div className={'sc-new-messages-count'}>
      {props.count}
    </div>
  );
};

Launcher.propTypes = {
  onMessageWasReceived: PropTypes.func,
  onMessageWasSent: PropTypes.func,
  newMessagesCount: PropTypes.number,
  isOpen: PropTypes.bool,
  handleClick: PropTypes.func,
  messageList: PropTypes.arrayOf(PropTypes.object),
  mute: PropTypes.bool,
  showEmoji: PropTypes.bool,
  startConnection: PropTypes.func,
};

Launcher.defaultProps = {
  newMessagesCount: 0,
  showEmoji: true
};

export default Launcher;
