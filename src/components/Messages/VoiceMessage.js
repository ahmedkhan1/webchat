import React from 'react';
import FileIcon from './../icons/FileIcon';


const VoiceMessage = (props) => {
  
  return (
    <>
    
    
    <audio controls>
      <source src={props.data.media_url} type="audio/ogg" />
      <source src={props.data.media_url} type="audio/mpeg" />
    Your browser does not support the audio element.
    </audio>
    </>
  );
};

export default VoiceMessage;
