import React from 'react';
import Linkify from 'react-linkify';


const DocumentMessage = (props) => {
  const PrintDocIcon = ({type}) => {

        if(type == 'application/pdf'){ 
                return <img src={require('../../assets/file/pdf.png')} />             
        }

        if((type == 'application/vnd.ms-excel' || type == 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet')){ 
                return <img src={require('../../assets/file/excel.png')} />             
        }

        if((type == 'text/csv' )){ 
                return <img src={require('../../assets/file/csv.png')} />             
        }

        if((type == 'application/msword' || type == 'application/vnd.openxmlformats-officedocument.wordprocessingml.document')){ 
                return <img src={require('../../assets/file/doc.png')} />             
        }

        if((type == 'application/zip')){ 
                return <img src={require('../../assets/file/zip.png')} />             
        }

        if((type == 'application/vnd.ms-powerpoint')){ 
                return <img src={require('../../assets/file/ppt.png')} />             
        }

         if((type == 'video/mp4')){ 
                return <img src={require('../../assets/file/music.png')} />             
        }

                       

                          

        return <img src={require('../../assets/file/gala_file.png')} />
                          

    
 }
  return (


    <div className="sc-message--text">
      <PrintDocIcon type={props.data.media_mime_type} /> 
      
      {props.data.media_name}
    </div>

    );
};

export default DocumentMessage;
