import React, { useState, useCallback,useEffect,useRef } from 'react';
//import './App.css';
//import {Launcher} from 'react-chat-window'
import {Launcher} from './Launcher'
//import { socket } from './socket';
import { v4 as uuid } from "uuid";
import axios from 'axios'
import  {useInterval} from './components/helpers/useInterval';
import { fetchWrapper } from './components/helpers';
function App({domElement}) {
    const URL = 'wss://0jlvdeflh4.execute-api.us-east-1.amazonaws.com/dev/';
   const name = "Eocean"
   const initialName = name.substring(0,1)
   const socket = useRef(null);
    const [isConnected, setIsConnected] = useState(false);
   
   const [messageList, setMessageList] = useState([]);
   const [open, setOpen] = useState(false);
    const [org, setOrg] = useState({});
    const [loading, setLoading] = useState(false);

    const [orgSettings, setOrgSettings] = useState({});
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
  
const backendUrl = 'https://29sd3x064a.execute-api.us-east-1.amazonaws.com/dev'

useEffect(() => {
    loadOrg() 
    //  if(!localStorage.getItem('widget_settings')){
    //    loadOrg() 
        
    // }else{
       
    //     setOrg(JSON.parse(localStorage.getItem('org')))
    //     setOrgSettings(JSON.parse(localStorage.getItem('widget_settings')))
    // }
    loadList();
  }, []);

    const loadOrg = async () => {

            const org_unit_id = 'eocean';            
            const url = `${backendUrl}/get-org?org_unit_id=${org_unit_id}`;
            
            
            const token = {}
            setLoading(true)
            const data  = await fetchWrapper.get(url,token)
            


            
            
            
            
            localStorage.setItem("widget_settings",data.data.widget_settings)
            localStorage.setItem("org",JSON.stringify(data.data))
            
            setOrg(data.data)
           
            setOrgSettings(JSON.parse(data.data.widget_settings));
            setLoading(false);
            
           //loadPrivateUser();
            
          
        

      
        
  }

   const loadList = async () => {

      
    
        
            let number = localStorage.getItem("sessionId")
            
            
            const url = `${backendUrl}/get-message?number=${number}`;
            
            const postData ={
              msg_channel:'web',
             
              number:number,
              org_unit_id:'eocean'

            }
            //setLoading(true)
            const token = {}
         
            const data  = await fetchWrapper.post(url,token,postData)
            //setLoading(false);
            


            

             const datax = data.reverse()
            
            setMessageList(datax)
            
           
           //loadPrivateUser();
            
          
        

      
        
  }
 useInterval(() => {

        
         loadListNew();
         //scrollViewRef.current.scrollToEnd({ animated: true })
      }, 3000);

const loadListNew = async () => {

      

      
      
     
     
      let number = localStorage.getItem("sessionId")
     
      const chat = {}
      
      const lastId = messageList[messageList.length - 1]?._id
      if(lastId){
        const url = `${backendUrl}/get-message-new?number=${number}`;
     
        const postData ={
          msg_channel:'web',
         
          number:number,
          last_msg_id:lastId,
          org_unit_id:'eocean'
        }
       //console.log(postData)
       
        const token = {}
        const dataxAll  = await fetchWrapper.post(url,token,postData)
        //const datax = dataxAll.reverse()
         if(dataxAll.length > 0){
             const newVal = [...messageList,...dataxAll]
             
             setMessageList(newVal)
         }
        }else{
          console.log("refresh")
          // storage.clearAll()
          // loadList()
          
        }

      
        
  }



    
   



   const onSendPrivateMessage = useCallback((message) => {

    
    



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
               
                    setMessageList((prevMessageList) => [...prevMessageList, result.data]);
              
         
        
            })

   
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
    background: ${orgSettings?.widget_builder?.widget_color} !important;
}
 `}</style>
    {!loading &&
      <Launcher
        agentProfile={{
          teamName: org.org_name_prm,
          imageUrl: 'https://placehold.co/50x50?text=' + org?.org_name_prm?.substring(0,1),
        }}
        onFilesSelected={onFilesSelected}
        onMessageWasSent={onSendPrivateMessage}
        messageList={messageList}
        showEmoji
        handleClick={() => setOpen(!open)}
        widgetSettings={orgSettings}
        isOpen={open}
      />
  }
    </div>
  );
}

export default App;
