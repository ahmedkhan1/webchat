import React from 'react';
import Linkify from 'react-linkify';
import moment from "moment";
import { commonMethods } from '../../helper';

const TextMessage = (props) => {
   let msg = props.data
   msg = msg.replaceAll('\\\\n','<br />');
   msg = commonMethods.stripResponseHtml(props?.data?.from_name,msg)
  return <div className="sc-message--text">{
    <Linkify properties={{ target: '_blank' }}>
      <h5>
      <span dangerouslySetInnerHTML={{__html: msg}}></span>
      </h5>
      <p className="date">{moment(props.send_timestamp).format('DD MMMM YYYY - hh:mm a')}</p>
    </Linkify>
  }</div>;
};

export default TextMessage;
