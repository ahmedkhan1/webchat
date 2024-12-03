import React from 'react';
import Linkify from 'react-linkify';
import moment from "moment";
import { commonMethods } from '../../helper';

const TextMessage = (props) => {
  let msg = props?.data || props?.message?.data;
  msg = msg.replaceAll('\\\\n','<br />');
  let translatedResponse = msg.split('/+-/Translation/+-/');
  if(translatedResponse.length === 2){
    msg = translatedResponse[1];
  } 

  msg = commonMethods.stripResponseHtml(props?.data?.from_name,msg)
  return <div className="sc-message--text">{
    <Linkify properties={{ target: '_blank' }}>
      <h5 style={{maxWidth: "16rem"}}>
      <span dangerouslySetInnerHTML={{__html: msg}}></span>
      </h5>
      <p className="date">{moment(props.send_timestamp).format('DD MMMM YYYY - hh:mm a')}</p>
    </Linkify>
  }</div>;
};

export default TextMessage;
