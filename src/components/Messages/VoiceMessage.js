import React from 'react';
import FileIcon from './../icons/FileIcon';
import Plyr from "plyr-react"
import "plyr-react/plyr.css"

const VoiceMessage = (props) => {
  

  

  return (
    <>
    
    
    <Plyr source={{
              type: "audio",
              // @ts-ignore
              sources: [{ src: props.data.media_url }],
            }}  

           options={{controls:['play','progress','current-time','captions','pip','airplay','play-large'],
           
         }}
             />
        
        
    </>
  );
};

export default VoiceMessage;
