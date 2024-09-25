import React from 'react';
import FileIcon from './../icons/FileIcon';


const VideoMessage = (props) => {
  
  return (
    <>
      <div className="sc-message--video">
        <video controls>
          <source src={props.data.media_url} type="video/mp4" />
          <source src={props.data.media_url} type="video/ogg" />
            Your browser does not support the video tag.
        </video>
        <p className="date">Mar 01 2024 - 12:26 PM </p>
      </div>
    </>
  );
};

export default VideoMessage;
