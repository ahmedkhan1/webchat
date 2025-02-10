import React from 'react';
import Linkify from 'react-linkify';
import moment from "moment";
import { commonMethods } from '../../helper';

const TextMessage = (props) => {
  let msg = props?.data || props?.message?.data;
  if(!msg){
    return null;
  }

  msg = msg
    .replace(/^\s+/, "")
    .replace(/\s+$/, "")
    .replace(/\r\n/g, "<br />")
    .replace(/<p>/g, "")
    .replace(/<\/p>/g, "\\\\n")
    .replace(/<br \/>/g, "\\\\n")
    .replace(/<\/div>/g, "\\\\n")
    //.replace(/<br>/g, "")
    .replace(/<strong>&nbsp;/g, "*")
    .replace(/&nbsp;<\/strong>/g, "*")
    .replace(/<em>&nbsp;/g, "_")
    .replace(/&nbsp;<\/em>/g, "_")
    .replace(/<strong>/g, "*")
    .replace(/<\/strong>/g, "*")
    .replace(/<em>/g, "_")
    .replace(/<\/em>/g, "_")
    .replace(/&nbsp;/g, " ")
    .replace(/<strong[^>]*>/g, "*")
    .replace(/<em[^>]*>/g, "_");
    
  msg = msg.replaceAll('<br>','');
  msg = msg.replaceAll('\\\\n','<br />');
  msg = msg.replaceAll('\\n','<br />');



  let translatedResponse = msg.split('/+-/Translation/+-/');
  if(translatedResponse.length === 2){
    msg = translatedResponse[1];
  } 

  let firstName = (localStorage.getItem("form_submit"))? localStorage.getItem("form_submit").split(' ')[0] : "";

  const name = (props?.data?.from_name)? props?.data?.from_name : firstName;
  msg = commonMethods.stripResponseHtml(name, msg)
  return <div className={(props?.media_wa_type === "300")? "agent-assignment-mgs" : "sc-message--text"}>{
    <Linkify properties={{ target: '_blank' }}>
      <h5 style={{maxWidth: "16rem"}} className={(props?.media_wa_type === "300")? "agent-assignment" : ""}>
      <span dangerouslySetInnerHTML={{__html: msg}}></span>
      </h5>
      {
        props?.media_wa_type !== "300" &&
        <p className="date">{moment(props.send_timestamp).format('DD MMMM YYYY - hh:mm a')}</p>
      }
    </Linkify>
  }</div>;
};

export default TextMessage;
