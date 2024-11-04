import React from 'react';
import FileIcon from './../icons/FileIcon';
import moment from "moment";

const FileMessage = (props) => {


  
  
  return (
    <>
    
    <a className="sc-message--file" href={props.data.media_url} download={props.data.media_url}>
      
      
      <img src={props.data.media_url} />
      <p className="date">{moment(props.send_timestamp).format('DD MMMM YYYY - hh:mm a')}</p>
      {props.data.mi}
    </a>
    </>
  );
};

export default FileMessage;
