import React from 'react';
import Linkify from 'react-linkify';


const TextMessage = (props) => {
   let msg = props.data
   msg = msg.replaceAll('\\\\n','<br />')
  return <div className="sc-message--text">{
    <Linkify properties={{ target: '_blank' }}>
      <h5>
      <span dangerouslySetInnerHTML={{__html: msg}}></span>
      </h5>
      <p className="date">Mar 01 2024 - 12:26 PM </p>
    </Linkify>
  }</div>;
};

export default TextMessage;
