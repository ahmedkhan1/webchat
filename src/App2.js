import React, { useState, useCallback,useEffect } from 'react';
//import './App.css';
//import {Launcher} from 'react-chat-window'
import {Launcher} from './Launcher'
import { socket } from './socket';
import { v4 as uuid } from "uuid";
function App({domElement}) {

   const name = domElement.getAttribute('name')
   const initialName = name.substring(0,1)

   const color = domElement.getAttribute('color')
   const org = domElement.getAttribute('org')
   const [messageList, setMessageList] = useState([]);
   const [open, setOpen] = useState(false);

   const [isConnected, setIsConnected] = useState(socket.connected);
  const [fooEvents, setFooEvents] = useState([]);

  const onMessageWasSent = useCallback((message) => {
    message.org = org
    message.number = localStorage.getItem('sessionId');
    socket.emit("send-msg",message);
    setMessageList((prevMessageList) => [...prevMessageList, message]);
  }, []);
const id1 = uuid();
const sessionId = id1
    if(!localStorage.getItem('sessionId')){
        localStorage.setItem('sessionId', sessionId);
    }
  useEffect(() => {
    // if(!isConnected){
    //     socket.connect()
    // }
    

    function onConnect() {
      setIsConnected(true);
    }

    function onDisconnect() {
      setIsConnected(false);
    }

    


    function onFooEventRec(value) {
     
      recMsg(value);
      
    }

    function onFooEventCon(value) {
      console.log(value)
      console.log("Ddd")
      
    }
    
  

    socket.on('connect', onConnect);
    socket.on('disconnect', onDisconnect);
    socket.on('rec-msg', onFooEventRec);
    //socket.on('connection:sid', onFooEventCon);


    return () => {
      socket.off('connect', onConnect);
      socket.off('disconnect', onDisconnect);
      socket.off('rec-msg', onFooEventRec);
    };

   
  }, []);

  // const sendMessage = useCallback((text) => {
  //   if (text.length > 0) {

  //     setMessageList((prevMessageList) => [
  //       ...prevMessageList,
  //       {
  //         author: 'me',
  //         type: 'text',
  //         org:org,
  //         data: { text },
  //       },
  //     ]);
  //   }
  // }, []);

  const recMsg = (text) => {
     
       
        setMessageList((prevMessageList) => [
        ...prevMessageList,
        {
          author: 'them',
          type: 'text',
          org:org,
          data: { text },
        },
      ]);
  }
  const onFilesSelected = (fileList) => {

   
     const objectURL = window.URL.createObjectURL(fileList[0]);
     setMessageList((prevMessageList) => [
        ...prevMessageList,
        {
          author: 'me',
          type: 'file',
           data: {
          url: objectURL,
          fileName: fileList[0].name
        }
        },
      ]);
    

  }

  return (
    <div className="App">

     <style>{` .sc-launcher, .sc-message--dtext, .sc-header {
    background: ${color} !important;
}
 `}</style>
      <Launcher
        agentProfile={{
          teamName: name,
          imageUrl: 'https://placehold.co/50x50?text=' + initialName,
        }}
        onFilesSelected={onFilesSelected}
        onMessageWasSent={onMessageWasSent}
        messageList={messageList}
        showEmoji
        handleClick={() => setOpen(!open)}
        isOpen={open}
      />
    </div>
  );
}

export default App;
