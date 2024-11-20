import React, { useState, useCallback, useEffect, useRef } from "react";
//import './App.css';
//import {Launcher} from 'react-chat-window'
import { Launcher } from "./Launcher";
//import { socket } from './socket';
import { v4 as uuid } from "uuid";
import axios from "axios";
import { useInterval } from "./components/helpers/useInterval";
import { fetchWrapper } from "./components/helpers";
import ErrorPage from "./components/ErrorPage";
import { commonMethods } from "./helper";
import WebSocketComponent from "./components/websocket";
function App({ domElement }) {
  const name = "Eocean";
  const initialName = name.substring(0, 1);
  const socket = useRef(null);
  const [isConnected, setIsConnected] = useState(false);
  const [error, setError] = useState(false);

  //const [formData, setFormData] = useState([]);

  const [messageList, setMessageList] = useState([]);
  const [open, setOpen] = useState(false);
  const [org, setOrg] = useState(false);
  const [loading, setLoading] = useState(false);

  const [orgSettings, setOrgSettings] = useState({});
  const [fooEvents, setFooEvents] = useState([]);

  const tokenKey = domElement.getAttribute("property-id");

  // const onMessageWasSent = useCallback((message) => {
  //   message.org = org
  //   message.number = localStorage.getItem('sessionId');
  //   socket.emit("send-msg",message);
  //   setMessageList((prevMessageList) => [...prevMessageList, message]);
  // }, []);
  const id1 = uuid();
  const sessionId = id1;
  let menuData = [];
  let formStart = false;
  let formData = [];
  let feedBackMenuData = false;
  let saveFormData = [];
  let sessionTriggerData = {};
  let apiTrigger = false;
  let formStep = 1;
  if (!localStorage.getItem("sessionId")) {
    localStorage.setItem("sessionId", sessionId);
  }

  //Prod
  //const backendUrl = 'https://7rpgggrlvh.execute-api.us-east-1.amazonaws.com/dev'
  // const socketUrl = 'wss://4d8ghnqckf.execute-api.us-east-1.amazonaws.com/production';
  //const x_api_id = 'HoWDoSfC7y1rxywh98h1J94A9k9INlRi9L8qsZ91';

//   // Stg
  const backendUrl =
    "https://bu4qbf7zu9.execute-api.us-east-1.amazonaws.com/dev";
  const x_api_id = "43KXt44PjCa7axCTLVLZb60FLrIAyA5l4YBhugmd";
  // const socketUrl =
  //   "wss://obz6kgfz3f.execute-api.us-east-1.amazonaws.com/production";

//   Local
  // const x_api_id = 'd41d8cd98f00b204e9800998ecf8427e'
  // const backendUrl = 'http://localhost:3000/dev'
  const socketUrl = 'wss://obz6kgfz3f.execute-api.us-east-1.amazonaws.com/production';
  // const socketUrl = 'wss://localhost:3000/dev'  
  useEffect(() => {
    if (tokenKey == "" || !tokenKey) {
      setError(true);
    } else {
      loadOrg(); //get org_unit using propety-id // get bot_trigger, menu, msgs using the bot id n settigs widget 

      loadList(); // get old messages of user using session id 
      onConnect();

      return () => {
        // onConnect();
          // Close socket properly if needed
          socket.current?.close();
      };
    }
  }, []);

  // Use useEffect to set an interval to call loadListNew every 5 seconds
  useEffect(() => {
    if (localStorage.getItem("sessionId")) {
      // Initialize interval for every 5 seconds
      const intervalId = setInterval(() => {
        loadListNew();
      }, 3000);
      // Cleanup interval when the component unmounts
      return () => clearInterval(intervalId);
    }
  }, [org, sessionId]); // Include dependencies if they are changing

  const loadBotFile = async (widget_settings) => { //load bot menu using bot id
    const bot_id = JSON.parse(widget_settings)?.chat_bot?.bot_id;
    const url = `${backendUrl}/trigger-list?id=${bot_id}`;
    const token = {};
    const data = await fetchWrapper.get(url, token);

    const jsonData = data;

    localStorage.setItem("bot_data", JSON.stringify(jsonData));
  };

  const loadOrg = async () => {  // load org_unit on page load using property id
    const url = `${backendUrl}/get-org-by-key`;

    const token = {};
    setLoading(true);
    const postData = { token: tokenKey };
    const data = await fetchWrapper.post(url, token, postData);

    if (!data.data) {
      setError(true);
    } else {
      localStorage.setItem("widget_settings", data.data.widget_settings);
      localStorage.setItem("org", data.data.ORG_UNIT_ID);

      setOrg(data.data.ORG_UNIT_ID);

      setOrgSettings(JSON.parse(data.data.widget_settings));
      setLoading(false);
      loadBotFile(data.data.widget_settings);
    }

    //loadPrivateUser();
  };

  const loadList = async () => { // load messages for the current session 
    if (localStorage.getItem("org")) {
      let number = localStorage.getItem("sessionId");

      const url = `${backendUrl}/get-message?number=${number}`;

      const postData = {
        msg_channel: "web",

        number: number,
        org_unit_id: localStorage.getItem("org"),
      };
      //setLoading(true)
      const token = {};

      const data = await fetchWrapper.post(url, token, postData);
      //setLoading(false);

      const datax = data.reverse();
      localStorage.setItem("message", JSON.stringify(datax));
      setMessageList(datax);

      //loadPrivateUser();
    } else {
      localStorage.setItem("message", JSON.stringify([]));
    }
  };
  
  // useInterval(() => {

  //         loadListNew();
  //         //scrollViewRef.current.scrollToEnd({ animated: true })
  //      }, 15000);

  const loadListNew = async () => {
    let number = localStorage.getItem("sessionId");
    
    const chat = {};
    
    const lastId = messageList[messageList.length - 1]?._id;
    //console.log("messageList :::" , messageList);
    console.log("load new message running::::" , number , lastId);
    
    if (lastId) {
      const url = `${backendUrl}/get-message-new?number=${number}`;

      const postData = {
        msg_channel: "web",

        number: number,
        last_msg_id: lastId,
        org_unit_id: org,
      };
      //console.log(postData)

      const token = {};
      const dataxAll = await fetchWrapper.post(url, token, postData);
      //const datax = dataxAll.reverse()
      if (dataxAll.length > 0) {
        const newVal = [...messageList, ...dataxAll];

        setMessageList(newVal);
      }
    } else {
      console.log("refresh");
      // storage.clearAll()
       loadList()
    }
  };
  const onSocketMessage = useCallback((dataStr) => {
    const data = JSON.parse(dataStr);
    console.log(data);
    if (data.msg.feedback) {
      botResponseTemplate("feedback");
    } else {
      if (localStorage.getItem("message")) {
        const oldMsg = JSON.parse(localStorage.getItem("message"));

        const newVal = [...oldMsg, data.msg];
        localStorage.setItem("message", JSON.stringify(newVal));
        setMessageList(newVal);
      } else {
        setMessageList(data.msg);
      }
    }
  }, []);
  const onSocketOpen = useCallback(() => {
    console.log("socket Open");
  }, []);

  const onConnect = useCallback(() => {
    if (socket.current?.readyState !== WebSocket.OPEN) {
      const user_id = localStorage.getItem("sessionId")  + "-agent";
      const user_name = "web";
      const URL = `${socketUrl}/?user_name=${user_name}&user_id=${user_id}`;

      socket.current = new WebSocket(URL);

      socket.current.addEventListener("open", onSocketOpen);
      socket.current.addEventListener("close", onSocketClose);
      socket.current.addEventListener("message", (event) => {
        onSocketMessage(event.data);
      });
    }
  }, []);

  const onSocketClose = useCallback(() => {
    console.log("socket Close");
    onConnect();
  }, []);

  const onSendPrivateMessage = useCallback((message) => { // THIS FUNCTIONS RUNS WHEN EVER THE TEXT MESSAGE HAS BEEN SENT 
    const msgData = {
      data: message.data.text,
      key_from_me: 0,
      media_wa_type: 0,
    };

    const oldMsg = JSON.parse(localStorage.getItem("message"));

    const newVal = [...oldMsg, msgData];

    localStorage.setItem("message", JSON.stringify(newVal));
    setMessageList(newVal);

    if (!localStorage.getItem("conversation_id")) {
      let uuidConversation = uuid();
      uuidConversation = uuidConversation.replaceAll("-", "");
      localStorage.setItem("conversation_id", uuidConversation);
    }

    let data = JSON.stringify({
      msg: message.data.text,
      number: localStorage.getItem("sessionId"), // CONSIDER IT AS KEY REMOTE ID
      wa_type: "0",
      msg_channel: "web",
      org_unit_id: localStorage.getItem("org"),
      from: localStorage.getItem("form_submit"), //RIGHT NOW IN FORM ONLY YHE NAME HAS BEEN SAVED SO THIS KEY WILL RETURN THE NAME ONLY
      conversation_id: localStorage.getItem("conversation_id"),
    });

    const requestOptions = {
      method: "post",
      headers: {},
    };

    requestOptions.headers["Content-Type"] = "application/json";
    requestOptions.headers["x-api-key"] = x_api_id;
    requestOptions.body = data;

    fetch(`${backendUrl}/rec-message`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if (message.data.text == "exit" || message.data.text == "Exit") {

          // step 1 feedback template will be sent to the user and the entry for feedback logs need to be inserted in db 
          // and chat will be closed so that the user can re-initiate the chat as well 
          
          // step 2 detect the feedback response and call sp 
          // step 3 send thankyou template for feedback response

          const msgData = {
            data: "Thank you for contacting. We would love to see you again. <br><br>Please Type Hi to re-initiate this chat.",
            media_url: "",
            key_from_me: 1,
            media_wa_type: 0,
          };
          mggSend(msgData);

          localStorage.removeItem("routeAgent");
          localStorage.removeItem("conversation_id");

          return false;
        }

        if (feedBackMenuData) {
          const msgData = {
            data: feedBackMenuData[message.data.text - 1]?.text
              ? feedBackMenuData[message.data.text - 1]?.text
              : "",
            media_url: "",
            key_from_me: 1,
            media_wa_type: 0,
          };
          mggSend(msgData);
          feedBackMenuData = false;

          return false;
        }

        if (!localStorage.getItem("routeAgent")) { // THIS will run when the chat has not been routed to the agent yet (before chat routed messages handled here) 
          botResponse(message.data.text);
        }

        // setMessageList((prevMessageList) => [...prevMessageList, result.data]);

        // const oldMsg = JSON.parse(localStorage.getItem("message"))

        //  const newVal = [...oldMsg,result.data]

        //  localStorage.setItem("message",JSON.stringify(newVal))
        //  setMessageList(newVal);
      });
  }, []);

  const botResponseTemplate = (text) => {
    feedBackMenuData = [
      { text: "Poor" },
      { text: "Average" },
      { text: "Great" },
    ];
    const buildMenuData = buildMenu(feedBackMenuData);
    const responseData =
      "Your feedback help us improve our service and support.<br><br>Please take a minute to rate your experience with our representative today!<br>";
    const response = responseData + buildMenuData;
    const msgData = {
      data: response,
      media_url: "",
      key_from_me: 1,
      media_wa_type: 0,
    };
    // mggSend(msgData);
  };
  const buildResponse = (response, menus) => {
    let msgData = {};
    response.map((item) => {
      
      if (item.type == "media" && item.mediaType == "IMAGE") {
        msgData = {
          data: "",
          media_url: item.url,
          key_from_me: 1,
          media_wa_type: 1,
        };
        mggSend(msgData);
      }

      if (item.type == "text" && item.msgType == "InteractiveButton") {
        let response = item.response + "<br>";
        const buildMenuData = buildMenu(menus);
        response = response + buildMenuData;
        msgData = {
          data: response,
          media_url: item.url,
          key_from_me: 1,
          media_wa_type: 0,
        };
        mggSend(msgData);
      }

      if (item.type == "text" && item.msgType == "InteractiveList") {
        let response = item.response + "<br>";
        const buildMenuData = buildMenu(menus);
        response = response + buildMenuData;
        msgData = {
          data: response,
          media_url: item.url,
          key_from_me: 1,
          media_wa_type: 0,
        };
        mggSend(msgData);
      }

      if (item.type == "text" && item.msgType == "SimpleText") {
        let response = item.response + "<br>";
        const buildMenuData = buildMenu(menus);
        response = response + buildMenuData;
        msgData = {
          data: response,
          media_url: item.url,
          key_from_me: 1,
          media_wa_type: 0,
        };
        mggSend(msgData);
      }

      if (item.type == "loopback") {
        const dataJson = JSON.parse(localStorage.getItem("bot_data")).data;
        const loopbackId = item.loopBackId;
        console.log(item);
        const triggerStart = dataJson.filter((rs) => rs.id == loopbackId);
        menuData = triggerStart[0].menus;
        localStorage.setItem("menuData",JSON.stringify(menuData));
        buildResponse(triggerStart[0].botResponses, triggerStart[0].menus);
      }
      if (item.type == "text" && item.routeToAgent) {
        localStorage.setItem("routeAgent", true);
      }
    });
  };
  const buildResponseOld = (item) => {
    let msgData = {};

    console.log(item);
    if (item.type == "media") {
      msgData = {
        data: "",
        media_url: item.url,
        key_from_me: 1,
        media_wa_type: 1,
      };
      mggSend(msgData);
    }

    if ((item.type = "TEXT")) {
      let response = item.response + "<br>";
      response = commonMethods.stripResponseHtml(localStorage.getItem("form_submit") || "Customer", response);
      // const buildMenuData = buildMenu(item.menus);
      //response = response + buildMenuData;  // all text messages related to bot will be treated here
      msgData = {
        data: response,

        key_from_me: 1,
        media_wa_type: 0,
      };
      mggSend(msgData, item.routeToAgent);
      if (item.routeToAgent) {
        localStorage.setItem("routeAgent", true);
      }
    }

    if (item.type == "loopback") {
      const dataJson = JSON.parse(localStorage.getItem("bot_data")).data;
      const loopbackId = item.loopBackId;
      console.log(item);
      const triggerStart = dataJson.filter((rs) => rs.id == loopbackId);
      menuData = triggerStart[0].menus;
      localStorage.setItem("menuData",JSON.stringify(menuData));
      buildResponse(triggerStart[0].botResponses, triggerStart[0].menus);
    }

    if (item.loopBackTriggerId != "") {
      const dataJson = JSON.parse(localStorage.getItem("bot_data")).data;
      const loopbackId = item.loopBackTriggerId;

      const triggerStart = dataJson.filter((rs) => rs.id == loopbackId);
      console.log(triggerStart);
      menuData = triggerStart[0].menus;
      localStorage.setItem("menuData",JSON.stringify(menuData));
      buildResponseOld(triggerStart[0]);
    }
  };
  const buildMenu = (menus) => {
    let menuItem = "";
    let aa = 0;
    menus.map((item) => {
      aa = aa + 1;
      menuItem =
        menuItem + `<span class="int-menu" >${aa} - ${item.text}</span><br />`;
    });

    return menuItem;
  };
  function clickMe(trigger_id) {
    alert(trigger_id);
  }

  const sendBotMessage = (messageData, route_to_agent) => {
    if (!localStorage.getItem("conversation_id")) {
      let uuidConversation = uuid();
      uuidConversation = uuidConversation.replaceAll("-", "");
      localStorage.setItem("conversation_id", uuidConversation);
    }

    let data = JSON.stringify({
      msg: messageData.data,
      number: localStorage.getItem("sessionId"),
      wa_type: "0",
      msg_channel: "web",
      org_unit_id: localStorage.getItem("org"),
      from: localStorage.getItem("form_submit"),
      conversation_id: localStorage.getItem("conversation_id"),
      key_from_me: messageData.key_from_me,
      route_to_agent: route_to_agent,
    });

    const requestOptions = {
      method: "POST",
      headers: {},
    };

    requestOptions.headers["Content-Type"] = "application/json";
    requestOptions.headers["x-api-key"] = x_api_id;
    requestOptions.body = data;

    fetch(`${backendUrl}/send-bot-message`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        // setMessageList((prevMessageList) => [...prevMessageList, result.data]);
        // const oldMsg = JSON.parse(localStorage.getItem("message"))
        //  const newVal = [...oldMsg,result.data]
        //  localStorage.setItem("message",JSON.stringify(newVal))
        //  setMessageList(newVal);
      }).catch((err)=>{
          console.log(err);
      })
  };
  const mggSend = (msg, route_to_agent = false) => {
    const oldMsg = JSON.parse(localStorage.getItem("message"));

    const newVal = [...oldMsg, msg];

    localStorage.setItem("message", JSON.stringify(newVal));
    setMessageList(newVal);
    sendBotMessage(msg, route_to_agent);
  };
  const buildForm = async (triggerData) => {
    let msgData = {};
    msgData = {
      data: triggerData.formStartText,

      key_from_me: 1,
      media_wa_type: 0,
    };

    const form_id = triggerData.form_id;
    const url = `${backendUrl}/form/form-by-id?form_id=${form_id}`;
    const token = {};
    sessionTriggerData = triggerData;
    const data = await fetchWrapper.get(url, token);
    formData = JSON.parse(data.data.form_data);
    console.log("form data ::: " , data.data.form_data);
    
    formStart = true;
    mggSend(msgData);

    startForm();
  };
  const startForm = () => {
    let msgData = {};
    msgData = {
      data: formData[formStep - 1].label,

      key_from_me: 1,
      media_wa_type: 0,
    };

    mggSend(msgData);
  };
  const apiCall = async (triggerData, msg) => {
    //sessionTriggerData = triggerData

    const url = `${backendUrl}/bot-api?id=${triggerData.api_id}&param=${msg}`;
    const token = {};
    const data = await fetchWrapper.get(url, token);
    const apiData = triggerData.apiData;
    if (data) {
      apiData.map((rsData, index) => {
        const dataValue = rsData.dataValue;
        const rs = rsData.dataValue;
        let resonseData = data.data;
        let cField = resonseData[rs.conditionLabel];
        if (Array.isArray(resonseData)) {
          resonseData = resonseData[0];
          cField = resonseData[dataValue.conditionLabel];
        }
        let inner = rs.conditionLabel.split(".");
        if (inner.length == 1) {
          cField = resonseData[inner[0]];
        } else {
          if (resonseData[inner[0]]) {
            cField = resonseData[inner[0]][inner[1]];
          }
        }

        if (cField == rs.conditionValue && triggerData.conditionType == "C") {
          let msgData = {};
          msgData = {
            data: rs.description,

            key_from_me: 1,
            media_wa_type: 0,
          };

          mggSend(msgData);
          apiTrigger = false;
        }
      });
    }
    apiTrigger = false;
  };

  const botResponse = (msg) => {
    if (!localStorage.getItem("routeAgent")) {
      const dataJson = JSON.parse(localStorage.getItem("bot_data")).data; // all the data related to bot triggers, menu, etc. 
      let responseData;
      let msgData = {};

      if (apiTrigger) {
        apiCall(apiTrigger, msg);
      }
      if (formStart) {
        if (formStep == formData.length) {
          const msgData = {
            data: sessionTriggerData.formEndText,

            key_from_me: 1,
            media_wa_type: 0,
          };
          mggSend(msgData);

          formStart = false;
          formData = [];
          formStep = 1;
          saveFormData = [];
          return false;
        }
        saveFormData.push({ key: formData[formStep - 1].label, value: msg });
        formStep = formStep + 1;
        startForm();

        return false;
      }
      if (msg?.toLowerCase() == "hi" || msg == "M") {
        const triggerStart = dataJson.filter((rs) => rs.startTrigger == true);

        if (triggerStart[0]?.botResponses) {
          menuData = triggerStart[0].menus;
          buildResponse(triggerStart[0].botResponses, triggerStart[0].menus);
        } else {
          menuData = triggerStart[0].menus;
          buildResponseOld(triggerStart[0]);
        }
        localStorage.setItem("menuData",JSON.stringify(menuData));
        return false;
      } else {
        if(!menuData.length && localStorage.getItem("menuData").length){
          menuData = JSON.parse(localStorage.getItem("menuData"))
        }
        const triggerId = menuData[msg - 1]?.toTriggerId;
        const triggerData = dataJson.filter((rs) => rs.id == triggerId)[0];

        if (!triggerData) {
          return false;
        }

        if (triggerData?.triggerType == "F") {
          buildForm(triggerData);
        } else {
          if (triggerData?.botResponses) {
            if (triggerData?.triggerType == "A") {
              apiTrigger = triggerData;
            }
            responseData = triggerData.botResponses;
            menuData = triggerData.menus;
            buildResponse(responseData, triggerData.menus);
          } else {
            menuData = triggerData.menus;
            buildResponseOld(triggerData);
          }
          localStorage.setItem("menuData",JSON.stringify(menuData));
        }

        return false;

        //return false;
      }

      msgData.data = msgData.data.replace(
        "{{Name}}",
        localStorage.getItem("form_submit")
      );

      console.log(localStorage.getItem("form_submit"));

      const oldMsg = JSON.parse(localStorage.getItem("message"));

      const newVal = [...oldMsg, msgData];

      localStorage.setItem("message", JSON.stringify(newVal));
      setMessageList(newVal);

      let data2 = JSON.stringify({
        msg: msg,
        number: localStorage.getItem("sessionId"),
        wa_type: "0",
        msg_channel: "web",
        org_unit_id: org,
        from: localStorage.getItem("form_submit"),
      });

      return false;
    }
  };

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
    let mediaTypeValue = 9;

    if (fileList[0].type == "image/png") {
      mediaTypeValue = 1;
    }
    if (fileList[0].type == "image/jpeg") {
      mediaTypeValue = 1;
    }
    if (fileList[0].type == "image/jpg") {
      mediaTypeValue = 1;
    }
    if (fileList[0].type == "video/mp4") {
      mediaTypeValue = 3;
    }
    if (fileList[0].type == "audio/mpeg") {
      mediaTypeValue = 2;
    }

    const objectURL = fileList[0];

    const to = localStorage.getItem("sessionId");

    const ffData = {
      uri: objectURL,
      type: fileList[0].type,
      name: fileList[0].name,
    };

    var formdata = new FormData();

    formdata.append("file", objectURL);
    formdata.append("name", objectURL.name);
    formdata.append("type", objectURL.type);

    formdata.append("to", to);
    formdata.append("msg_channel", "web");
    formdata.append("media_type", mediaTypeValue);
    formdata.append("conversation_id", localStorage.getItem("conversation_id"));

    formdata.append("org_unit_id", org);

    var requestOptions = {
      method: "POST",
      headers: {
        "content-type": "multipart/form-data",
        "x-api-key": x_api_id,
      },
      body: formdata,
      redirect: "follow",
    };

    const url = `${backendUrl}/rec-media`;

    const config = {
      headers: {
        "content-type": "multipart/form-data",
        "x-api-key": x_api_id,
      },
    };
    axios.post(url, formdata, config).then((response) => {
      loadListNew();
      console.log(response);
      //loadListNew()

      // const oldMsg = JSON.parse(localStorage.getItem("message"))

      //                const newVal = [...oldMsg,response.data]

      //                localStorage.setItem("message",JSON.stringify(newVal))
      //                setMessageList(newVal);
    });

    // fetch(`${url}`, requestOptions)
    // .then(response => response.json())
    // .then(result => {
    //     //console.log(result.data.key_from_me)

    //     // setListMsg([result.data,...listMsg])

    //     // const newVal = [result.data].concat(listMsg)

    //     // storage.set('chat', JSON.stringify(newVal))

    // })
    // .catch(error => console.log('error', error));

    return false;

    setMessageList((prevMessageList) => [
      ...prevMessageList,
      {
        author: "me",
        type: "file",
        data: {
          url: objectURL,
          fileName: fileList[0].name,
        },
      },
    ]);
  };

  return (
    <div className="App">
      <style>{` .sc-launcher, .sc-message--dtext, .sc-header {
            background: ${orgSettings?.widget_builder?.widget_color} !important;
        }
         `}</style>

      {error && (
        <ErrorPage
          isOpen={open}
          handleClick={() => setOpen(!open)}
          clickMe={clickMe}
        />
      )}
      {/* <WebSocketComponent socketUrl={socketUrl}/> */}
      {!loading && !error && (
        <Launcher
          agentProfile={{
            teamName: org.org_name_prm,
            imageUrl:
              "https://placehold.co/50x50?text=" +
              org?.org_name_prm?.substring(0, 1),
          }}
          onFilesSelected={onFilesSelected}
          onMessageWasSent={onSendPrivateMessage}
          messageList={messageList}
          showEmoji
          handleClick={() => setOpen(!open)}
          widgetSettings={orgSettings}
          isOpen={open}
          clickMe={clickMe}
        />
      )}
    </div>
  );
}

export default App;
