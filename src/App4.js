import React, { useState, useCallback,useEffect,useRef } from 'react';
//import './App.css';
//import {Launcher} from 'react-chat-window'
import {Launcher} from './Launcher'
//import { socket } from './socket';
import { v4 as uuid } from "uuid";
import axios from 'axios'
function App({domElement}) {
    const URL = 'wss://0jlvdeflh4.execute-api.us-east-1.amazonaws.com/dev/';
   const name = domElement.getAttribute('name')
   const initialName = name.substring(0,1)
   const socket = useRef(null);
    const [isConnected, setIsConnected] = useState(false);
   const color = domElement.getAttribute('color')
   const org = domElement.getAttribute('org')
   const [messageList, setMessageList] = useState([]);
   const [open, setOpen] = useState(false);

 
  const [fooEvents, setFooEvents] = useState([]);

  // const onMessageWasSent = useCallback((message) => {
  //   message.org = org
  //   message.number = localStorage.getItem('sessionId');
  //   socket.emit("send-msg",message);
  //   setMessageList((prevMessageList) => [...prevMessageList, message]);
  // }, []);
const id1 = uuid();
const sessionId = id1
    if(!localStorage.getItem('sessionId')){
        localStorage.setItem('sessionId', sessionId);
    }


     useInterval(() => {

        
         loadListNew();
         //scrollViewRef.current.scrollToEnd({ animated: true })
      }, 3000);
  useEffect(() => {
    // if(!isConnected){
    //     socket.connect()
    // }
    

    // function onConnect() {
    //   setIsConnected(true);
    // }

    function onDisconnect() {
      setIsConnected(false);
    }



    // socket.on('connect', onConnect);
    // socket.on('disconnect', onDisconnect);
    // socket.on('rec-msg', onFooEventRec);
    //socket.on('connection:sid', onFooEventCon);


    return () => {
        onConnect()
      
    };

   
  }, []);


 const onSocketOpen = useCallback(() => {
      setIsConnected(true);
      
      const name = localStorage.getItem('sessionId') ;
      console.log(name)
      socket.current?.send(JSON.stringify({ action: 'setName', name }));
    }, []);


    
    function onFooEventCon(value) {
      console.log(value)
      console.log("Ddd")
      
    }
    
   const onConnect = useCallback(() => {

    if (socket.current?.readyState !== WebSocket.OPEN) {
      socket.current = new WebSocket(URL);

      socket.current.addEventListener('open', onSocketOpen);
      socket.current.addEventListener('close', onSocketClose);
      socket.current.addEventListener('message', (event) => {
        onSocketMessage(event.data);
      });
    }
  }, []);



   const onSendPrivateMessage = useCallback((message) => {

    console.log(message)
    setMessageList((prevMessageList) => [...prevMessageList, message]);



    let data = JSON.stringify({
                "msg": message.data.text,
                "number": localStorage.getItem("sessionId"),
                "wa_type": "0",
                "msg_channel": "web",
                "org_unit_id": "eocean"
              });

    const requestOptions = {
            method:'post',
            headers:{}
        };
        
            requestOptions.headers['Content-Type'] = 'application/json';
            requestOptions.body = data;
      
      fetch(`https://29sd3x064a.execute-api.us-east-1.amazonaws.com/dev/rec-message`, requestOptions)

      .then(response => response.json())
            .then(result => {
               

              
          const nameAgent = localStorage.getItem('sessionId') + "-agent" ;
       console.log(nameAgent)
          //socket.current?.send(JSON.stringify({ action: 'sendPrivate', message:JSON.stringify(result),to:nameAgent }));
                //  setListMsg([result.data,...listMsg])

                //  const newVal = [result.data].concat(listMsg)
          

                // storage.set('chat', JSON.stringify(newVal))
            })

   

       

             
    // message.org = org
    // message.number = localStorage.getItem('sessionId');
    // socket.current?.send(JSON.stringify({
    //   action: 'sendPrivate',
    //   message,
    //   to,
    // }));
  }, []);


     const onSocketClose = useCallback(() => {
     
    setIsConnected(false);
    
  }, []);



  const onSocketMessage = useCallback((dataStr) => {
    const data = JSON.parse(dataStr);
    const mm = {
          author: 'them',
          type: 'text',
          org:org,
          data:  {text:data.privateMessage},
        }
    setMessageList((prevMessageList) => [...prevMessageList, mm]);



    
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
        onMessageWasSent={onSendPrivateMessage}
        messageList={messageList}
        showEmoji
        handleClick={() => setOpen(!open)}
        isOpen={open}
      />
    </div>
  );
}

export default App;
