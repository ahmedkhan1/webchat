import React from 'react';
import FileIcon from './../icons/FileIcon';


const VideoMessage = (props) => {
  
  return (
    <>
    
    <video width="200" height="150" controls>
      <source src={props.data.media_url} type="video/mp4" />
      <source src={props.data.media_url} type="video/ogg" />
        Your browser does not support the video tag.
    </video>
    </>
  );
};

export default VideoMessage;
