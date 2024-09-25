import React from 'react';
import FileIcon from './../icons/FileIcon';


const FileMessage = (props) => {


  
  
  return (
    <>
    
    <a className="sc-message--file" href={props.data.media_url} download={props.data.media_url}>
      
      
      <img src={props.data.media_url} width="200" height="150" />
      {props.data.mi}
    </a>
    </>
  );
};

export default FileMessage;
