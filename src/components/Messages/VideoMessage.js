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
        <p className="date">{moment(props.send_timestamp).format('DD MMMM YYYY - hh:mm a')}</p>
      </div>
    </>
  );
};

export default VideoMessage;
