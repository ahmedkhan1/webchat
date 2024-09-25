import React from 'react';
import FileIcon from './../icons/FileIcon';


const FileMessage = (props) => {


  
  
  return (
    <>
    
    <a className="sc-message--file" href={props.data.media_url} download={props.data.media_url}>
      
      
      <img src={props.data.media_url} />
      <p className="date">Mar 01 2024 - 12:26 PM </p>
      {props.data.mi}
    </a>
    </>
  );
};

export default FileMessage;
