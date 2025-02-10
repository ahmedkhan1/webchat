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
import reachBSHelper from "./components/helpers/britishReach";
import notification from "./assets/sounds/notification.mp3";
import SessionModal from "./components/modals/SessionModal";
import CloseModal from "./components/modals/CloseModal";
import WhatsAppRedirect from "./components/WhatsAppRedirect/WhatsAppRedirect";
import bgImage from "./assets/bgImage.png";

let messageSound = null;
// let inactiveTimer = 5;
// let extensionTimer = 5;

let inactiveTimer = 180;
let extensionTimer = 120;

// Styles
const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 30px",
    backgroundColor: "#2a3d66",
    color: "white",
    position: "sticky",
    top: 0,
    zIndex: 1000,
  },
  navTitle: {
    fontSize: "1.8rem",
  },
  navLinks: {
    listStyle: "none",
    display: "flex",
    gap: "20px",
  },
  hero: {
    position: "relative",
    height: "400px",
    overflow: "hidden",
  },
  heroImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  heroText: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    textAlign: "center",
    color: "white",
    textShadow: "2px 2px 10px rgba(0, 0, 0, 0.7)",
  },
  heroButton: {
    padding: "10px 20px",
    marginTop: "15px",
    fontSize: "1rem",
    backgroundColor: "#ffcc00",
    color: "#003366",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },

  section: {
    padding: "50px 20px",
    textAlign: "center",
  },
  sectionAlt: {
    padding: "50px 20px",
    backgroundColor: "#f4f4f4",
    textAlign: "center",
  },
  image: {
    width: "100%",
    marginTop: "20px",
    borderRadius: "10px",
  },
  gallery: {
    display: "flex",
    gap: "10px",
    justifyContent: "center",
    marginTop: "20px",
  },
  eventList: {
    listStyle: "none",
    padding: 0,
  },
  contactForm: {
    marginTop: "20px",
  },
  input: {
    width: "80%",
    padding: "10px",
    marginBottom: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  textarea: {
    width: "80%",
    height: "100px",
    padding: "10px",
    marginBottom: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  button: {
    padding: "10px 20px",
    fontSize: "1rem",
    backgroundColor: "#003366",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  footer: {
    backgroundColor: "#2a3d66",
    color: "white",
    textAlign: "center",
    padding: "15px 10px",
  },
  socialLinks: {
    fontWeight: "bold",
    color: "#ffcc00",
  },
};



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
  const [audioSrc, setAudioSrc] = useState(notification);

  const [orgSettings, setOrgSettings] = useState({});
  const [officeHours, setOfficeHours] = useState({});
  const [fooEvents, setFooEvents] = useState([]);
  const [openWhatsAppRedirect, setOpenWhatsAppRedirect] = useState(false);
  // const [isModalOpen, setIsModalOpen] = useState(false);

  const tokenKey = domElement.getAttribute("property-id");
  const [formSubmit, setFormSubmit] = useState(
    localStorage.getItem("form_submit")
  );

  const audioRef = useRef(null);

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
  // const backendUrl = 'http://localhost:3000/dev'
  // const backendUrl = 'https://7rpgggrlvh.execute-api.us-east-1.amazonaws.com/dev'
  //  const socketUrl = 'wss://4d8ghnqckf.execute-api.us-east-1.amazonaws.com/production';
  // const x_api_id = 'HoWDoSfC7y1rxywh98h1J94A9k9INlRi9L8qsZ91';

  //   // Stg
  const backendUrl =
    "https://bu4qbf7zu9.execute-api.us-east-1.amazonaws.com/dev";
  const x_api_id = "43KXt44PjCa7axCTLVLZb60FLrIAyA5l4YBhugmd";
  const socketUrl =
    "wss://obz6kgfz3f.execute-api.us-east-1.amazonaws.com/production";

  //   Local
  // const x_api_id = 'd41d8cd98f00b204e9800998ecf8427e'
  // const backendUrl = 'http://localhost:3000/dev'
  // const socketUrl = "wss://obz6kgfz3f.execute-api.us-east-1.amazonaws.com/production";
  
  const [isTimerModalOpen, setIsTimerModalOpen] = useState(false);
  const [inactivityTimer, setInactivityTimer] = useState(inactiveTimer); // 3 minutes for inactivity
  const [modalTimer, setModalTimer] = useState(extensionTimer); // 2 minutes for modal countdown
  const [isSessionEnded, setIsSessionEnded] = useState((localStorage.getItem("phone_number") !== null)? false : true); // Tracks whether the session has ended


  // Inactivity Timer Countdown
  useEffect(() => {
    if (isSessionEnded) return; // Stop timer if the session has ended


    if (inactivityTimer <= 0) {
      if (!isTimerModalOpen) {
        setIsTimerModalOpen(true); // Open modal when inactivity reaches 0
      }
      return;
    }

    const inactivityCountdown = setInterval(() => {
      setInactivityTimer((prevTimer) => prevTimer - 1);
    }, 1000);

    return () => clearInterval(inactivityCountdown);
  }, [inactivityTimer, isTimerModalOpen, isSessionEnded]);

  // Modal Timer Countdown
  useEffect(() => {
    if (!isTimerModalOpen || isSessionEnded) return; // Stop modal timer if session has ended

    if (modalTimer <= 0) {
      setLoading(true);
      setIsTimerModalOpen(false); // Close modal when modal timer reaches 0
      setIsSessionEnded(true); // Mark session as ended
      localStorage.clear();


      setTimeout(()=>{
        setLoading(false);
        setOpen(!open);
      }, 5)

      if (tokenKey == "" || !tokenKey) {
        setError(true);
      } else {
        loadOrg(); //get org_unit using propety-id // get bot_trigger, menu, msgs using the bot id n settigs widget
  
        loadList(); // get old messages of user using session id
        socket.current?.close();
      }

      return;
    }

    const modalCountdown = setInterval(() => {
      setModalTimer((prevTimer) => prevTimer - 1);
    }, 1000);

    return () => clearInterval(modalCountdown);
  }, [modalTimer, isTimerModalOpen, isSessionEnded]);

  // Reset both timers when user extends the session
  const handleExtendSession = () => {
    setInactivityTimer(inactiveTimer); // Reset inactivity timer to 3 minutes
    setModalTimer(extensionTimer); // Reset modal timer to 2 minutes
    setIsTimerModalOpen(false); // Close the modal
    setIsSessionEnded(false); // Reset session ended state
  };


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
        if(localStorage.getItem('routeAgent')){
            loadListNew();
        }
        
      }, 3500);
      // Cleanup interval when the component unmounts
      return () => clearInterval(intervalId);
    }
  }, [org, sessionId, formSubmit]); // Include dependencies if they are changing


  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleConfirmCloseChat = () => {
    setIsModalOpen(false);

    setLoading(true);
    setIsTimerModalOpen(false); // Close modal when modal timer reaches 0
    setIsSessionEnded(true); // Mark session as ended
    localStorage.clear();

    setTimeout(()=>{
      setLoading(false);
      setOpen(!open);
      setMessageList([]);
      if (tokenKey == "" || !tokenKey) {
        setError(true);
      } else {
        loadOrg(); //get org_unit using propety-id // get bot_trigger, menu, msgs using the bot id n settigs widget
        loadList(); // get old messages of user using session id
        socket.current?.close();
      }
    }, 5)

  };

  const loadBotFile = async (widget_settings) => {
    //load bot menu using bot id
    const bot_id = JSON.parse(widget_settings)?.chat_bot?.bot_id;
    const url = `${backendUrl}/trigger-list?id=${bot_id}`;
    const token = {};
    const data = await fetchWrapper.get(url, token);

    const jsonData = data;

    localStorage.setItem("bot_data", JSON.stringify(jsonData));
  };

  const loadOrg = async () => {
    // load org_unit on page load using property id
    const url = `${backendUrl}/get-org-by-key`;

    const token = {};
    setLoading(true);
    
    const postData = { token: tokenKey, msg_channel: 'web' };
    const data = await fetchWrapper.post(url, token, postData);

    if (!data.data) {
      setError(true);
    } else {
      localStorage.setItem("widget_settings", data.data.widget_settings);
      localStorage.setItem("org", data.data.ORG_UNIT_ID);

      setOrg(data.data.ORG_UNIT_ID);
      const widgetSettings = JSON.parse(data.data.widget_settings);
      console.log(widgetSettings);
      setOrgSettings(widgetSettings);
      debugger;
      const timeInMinutes = widgetSettings.chat_bot.chatTimeout;
      const timeInSeconds = (timeInMinutes)? (Number(timeInMinutes) * 60) : 180;
      setInactivityTimer(timeInSeconds)
      setOfficeHours(data.data.office_hour);
      setLoading(false);
      loadBotFile(data.data.widget_settings);
    }

    //loadPrivateUser();
  };

  const loadList = async () => {
    debugger;

    // load messages for the current session
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

      const datax = data?.reverse();
      debugger;
      if(datax && datax.length > 0){
        if(data[datax.length-1].key_from_me === 1 && localStorage.getItem("sound") === "true"){
          try{
            await audioRef.current.play();
          } catch(err){
            console.log(err);
          }
        }

        localStorage.setItem("message", JSON.stringify(datax));
        setMessageList(datax);
      }

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
    
    const lastId = messageList[messageList?.length - 1]?._id;
    //console.log("messageList :::" , messageList);

    if (lastId && org) {
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
      
      console.log(dataxAll);
      if (dataxAll && dataxAll.length > 0) {
        
        // Try to play a silent sound to trigger browser permissions
        debugger;
        for(const data of dataxAll){
          console.log(data.key_from_me === 1, localStorage.getItem("sound"));
          if(data.key_from_me === 1 && localStorage.getItem("sound") === "true"){
            try{
              await audioRef.current.play();
            } catch(err){
              console.log(err);
            }
          }
        }
        
        const newVal = [...messageList, ...dataxAll];
        localStorage.setItem("message", JSON.stringify(newVal));
        setMessageList(newVal);
      }
    } else {
      if (
        localStorage.getItem("form_submit") &&
        localStorage.getItem("conversation_id")
      ) {
        // storage.clearAll()
        loadList();
      }
    }
  };
  const onSocketMessage = useCallback((dataStr) => {
    const data = JSON.parse(dataStr);
    console.log(data);
    if (data?.msg?.feedback) {
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
    // if (socket.current?.readyState !== WebSocket.OPEN) {
    //   const user_id = localStorage.getItem("sessionId") + "-agent";
    //   const user_name = "web";
    //   const URL = `${socketUrl}/?user_name=${user_name}&user_id=${user_id}`;

    //   socket.current = new WebSocket(URL);

    //   socket.current.addEventListener("open", onSocketOpen);
    //   socket.current.addEventListener("close", onSocketClose);
    //   socket.current.addEventListener("message", (event) => {
    //     onSocketMessage(event.data);
    //   });
    // }
  }, []);

  const onSocketClose = useCallback(() => {
    console.log("socket Close");
    onConnect();
  }, []);

  const checkFeedbackTemplate = (data) => {
    if (!data[data.length - 4]) return false;
    let lastMsg = data[data.length - 4];
    let lastMsg2 = data[data.length - 2];
    if (
      (lastMsg?.data?.includes("Poor") &&
        lastMsg?.data?.includes("Great") &&
        lastMsg?.data?.includes("Average")) ||
      (lastMsg2?.data?.includes("Poor") &&
        lastMsg2?.data?.includes("Great") &&
        lastMsg2?.data?.includes("Average"))
    ) {
      feedBackMenuData = true;
      return true;
    }
    return false;
  };

  const checkSpamUnblock = (data) => {
    if (!data[data.length - 3]) return false;
    let lastMsg = data[data.length - 3];
    if (lastMsg?.data?.includes("marked the conversation unblocked")) {
      return true;
    }
    return false;
  };

  const onSendPrivateMessage = useCallback((message, wa_type=0) => {
    handleExtendSession();
    
    const msgData = {
      data: message.data.text,
      key_from_me: 0,
      media_wa_type: (wa_type)? 0 : wa_type,
    };

    messageSound = message.messageSound;

    let route_to_agent = false;
    const oldMsg = JSON.parse(localStorage.getItem("message"));

    const newVal = [...oldMsg, msgData];
    if(!localStorage.getItem('routeAgent')){
       localStorage.setItem("message", JSON.stringify(newVal));
       setMessageList(newVal);
    }
    
    if (!checkFeedbackTemplate(newVal) && checkSpamUnblock(newVal)) {
      localStorage.removeItem("routeAgent");
      localStorage.removeItem("conversation_id");
    }

    if (localStorage.getItem("routeAgent")) {
      route_to_agent = localStorage.getItem("routeAgent");
    }

    if (!localStorage.getItem("conversation_id")) {
      let uuidConversation = uuid();
      uuidConversation = uuidConversation.replaceAll("-", "");
      localStorage.setItem("conversation_id", uuidConversation);
    }

    let data = JSON.stringify({
      msg: message.data.text,
      number: localStorage.getItem("sessionId"),
      wa_type: "0",
      msg_channel: "web",
      org_unit_id: localStorage.getItem("org"),
      from: localStorage.getItem("form_submit"),
      conversation_id: localStorage.getItem("conversation_id"),
      isFeedback: checkFeedbackTemplate(newVal),
      isRouteToAgent: route_to_agent,
    });

    const requestOptions = {
      method: "post",
      headers: {},
    };

    requestOptions.headers["Content-Type"] = "application/json";
    requestOptions.headers["x-api-key"] = x_api_id;
    requestOptions.body = data;


    if (!localStorage.getItem("routeAgent")) {
      if (
        localStorage.getItem("widget_settings") &&
        JSON.parse(localStorage.getItem("widget_settings"))?.chat_bot
          ?.enabled_chatbot === false
      ) {
        const msgData = {
          data: "<p>Please wait, one of our agents will contact you shortly.</p><p><br></p><p>Type <strong>Exit</strong> to end the conversation at any time.</p>",
          key_from_me: 1,
          media_wa_type: 0,
        };
        sendBotMessage(msgData, true);
        // localStorage.setItem("routeAgent", true);
      } else {
        
        botResponse(message.data.text);
        sendBotMessage(msgData, false);
      }
    }
    
    if (localStorage.getItem("routeAgent")) {
      fetch(`${backendUrl}/rec-message`, requestOptions)
        .then((response) => response.json())
        .then(async(result) => {
          
          try {
            loadListNew();
          } catch (error) {}

          if (
            message.data.text?.toLowerCase() == "exit" ||
            message.data.text == "Exit"
          ) {
            // step 1 feedback template will be sent to the user and the entry for feedback logs need to be inserted in db
            // and chat will be closed so that the user can re-initiate the chat as well

            // step 2 detect the feedback response and call sp
            // step 3 send thankyou template for feedback response


            // const requestObject = {
            //   org: localStorage.getItem("org"),
            //   userMessage: message.data.text,
            // }
    
            // if(requestObject.org === "eoceanchatbot"){
            //   const dataJson = JSON.parse(localStorage.getItem("bot_data")).data; // all the data related to bot triggers, menu, etc.
            //   await gptResponse(requestObject, dataJson, "", "");
            // }


            const msgData = {
              data: "Thank you for contacting us. We would love to see you again.<br><br>Please type *Hi* to re-initiate this chat.",
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
            feedBackMenuData = false;
            localStorage.removeItem("routeAgent");
            localStorage.removeItem("conversation_id");
          }
          // if (feedBackMenuData) {
          //   const msgData = {
          //     data:"Thank you for your valuable feedback. We would love to see you again.<br><br>Please type *Hi* to re-initiate this chat.",
          //     media_url: "",
          //     key_from_me: 1,
          //     media_wa_type: 0,
          //   };
          //   mggSend(msgData);
          //   feedBackMenuData = false;
          //   localStorage.removeItem("routeAgent");
          //   localStorage.removeItem("conversation_id");
          //   return false;
          // }

          // setMessageList((prevMessageList) => [...prevMessageList, result.data]);

          // const oldMsg = JSON.parse(localStorage.getItem("message"))

          //  const newVal = [...oldMsg,result.data]

          //  localStorage.setItem("message",JSON.stringify(newVal))
          //  setMessageList(newVal);
        });
    }
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
  const buildResponse = async(response, menus,routeToAgent = false) => {
    let msgData = {};
    debugger;
    for(const item of response){

      if (item.type == "media" && item.mediaType == "DOCUMENT") {
        const url = (item.urls)? item.urls[0] : item.url; 
        msgData = {
          data: "",
          media_url: url,
          key_from_me: 1,
          media_wa_type: 9,
          media_mime_type: "application/pdf",
          media_name: item.type,
          caption: item.caption,
        };
        debugger;
        mggSend(msgData);
      } else if (item.type == "media" && item.mediaType == "IMAGE") {
        await delay(2 * 1000);
        msgData = {
          data: "",
          media_url: item.url,
          key_from_me: 1,
          media_wa_type: 1,
        };
        mggSend(msgData);
      } else if (item.type.toLowerCase() == "text" && item.msgType == "InteractiveButton") {
        await delay(2 * 1000);
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
      } else if (item.type.toLowerCase() == "text" && item.msgType == "InteractiveList") {
        await delay(2 * 1000);
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
      } else if ((item.type.toLowerCase() == "text" && item.msgType == "SimpleText") || item.type.toLowerCase() == "text") {
        await delay(2 * 1000);
        let response = item.response + "<br>";
        const buildMenuData = buildMenu(menus);
        response = response + buildMenuData;
        msgData = {
          data: response,
          media_url: item.url,
          key_from_me: 1,
          media_wa_type: 0,
        };
        mggSend(msgData,routeToAgent);
      } else if (item.type == "loopback") {
        await delay(2 * 1000);
        const dataJson = JSON.parse(localStorage.getItem("bot_data")).data;
        const loopbackId = item.loopBackId;
        console.log(item);
        const triggerStart = dataJson.filter((rs) => rs.id == loopbackId);
        menuData = triggerStart[0].menus;
        localStorage.setItem("menuData", JSON.stringify(menuData));

        buildResponse((triggerStart && triggerStart[0].botResponses || triggerStart), triggerStart[0].menus);
      }
    }


      // if (item.type == "text" && item.routeToAgent) {
      //   localStorage.setItem("routeAgent", true);
      // }
  };
  const buildResponseOld = (item) => {
    let msgData = {};

    console.log(item);
    if (item.type == "media") {
      const url = (item.urls)? item.urls[0] : item.url; 
      msgData = {
        data: "",
        media_url: url,
        key_from_me: 1,
        media_wa_type: 1,
      };
      mggSend(msgData);
    }
    
    console.log(item);
    if (item.type.toLowerCase() == "document") {
      const url = (item.urls)? item.urls[0] : item.url; 
      msgData = {
        data: "",
        media_url: url,
        key_from_me: 1,
        media_wa_type: 9,
        media_mime_type: "application/pdf",
        media_name: item.type,
        caption: item.caption,
      };
      debugger;
      mggSend(msgData);
    }

    if ((item.type == "TEXT")) {
      let response = item.response + "<br>";
      response = commonMethods.stripResponseHtml(
        localStorage.getItem("form_submit") || "Customer",
        response
      );
      const buildMenuData = buildMenu(item.menus);
      response = response + buildMenuData;  // all text messages related to bot will be treated here
      msgData = {
        data: response,

        key_from_me: 1,
        media_wa_type: 0,
      };
      mggSend(msgData, item.routeToAgent);
      // if (item.routeToAgent) {
      //   localStorage.setItem("routeAgent", true);
      // }
    }

    if (item.type == "loopback") {
      const dataJson = JSON.parse(localStorage.getItem("bot_data")).data;
      const loopbackId = item.loopBackId;
      console.log(item);
      const triggerStart = dataJson.filter((rs) => rs.id == loopbackId);
      menuData = triggerStart[0].menus;
      localStorage.setItem("menuData", JSON.stringify(menuData));
      buildResponse(triggerStart[0].botResponses, triggerStart[0].menus);
    }

    if (item.loopBackTriggerId != "") {
      const dataJson = JSON.parse(localStorage.getItem("bot_data")).data;
      const loopbackId = item.loopBackTriggerId;

      const triggerStart = dataJson.filter((rs) => rs.id == loopbackId);
      console.log(triggerStart);
      menuData = triggerStart[0].menus;
      localStorage.setItem("menuData", JSON.stringify(menuData));
      buildResponseOld(triggerStart[0]);
    }
  };
  const buildMenu = (menus) => {
    let menuItem = "";
    let aa = 0;
    if(menus && !menus.length) return "";
    
    menus.map((item) => {
      if(!item.text.includes("_") && !item.text.includes("Finish") && !item.text.includes("End conversation") && item.text !== "."){
        aa = aa + 1;
        menuItem =
          menuItem + `<span class="int-menu" >${aa} - ${item.text}</span><br />`;
      }
    });

    if(menuItem){
      menuItem = `<div class='menu-list'>${menuItem}</div>`;
    }
    return menuItem;
  };

  function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  function clickMe(trigger_id) {
    alert(trigger_id);
  }

  const sendBotMessage = (messageData, route_to_agent) => {
    if (!localStorage.getItem("conversation_id")) {
      let uuidConversation = uuid();
      uuidConversation = uuidConversation.replaceAll("-", "");
      localStorage.setItem("conversation_id", uuidConversation);
    }

    let data = {
      msg: messageData.data,
      number: localStorage.getItem("sessionId"),
      wa_type: (messageData.media_wa_type === 9)?  messageData.media_wa_type : "0",
      msg_channel: "web",
      org_unit_id: localStorage.getItem("org"),
      from: localStorage.getItem("form_submit"),
      conversation_id: localStorage.getItem("conversation_id"),
      key_from_me: messageData.key_from_me,
      route_to_agent: route_to_agent,
      media_mime_type: messageData.media_mime_type,
      caption: messageData.caption,

    };

    if(messageData.media_wa_type === 9){
      data['media_name'] = messageData.media_name;
      data['media_url'] = messageData.media_url;
    }
    data = JSON.stringify(data);
    debugger;

    const requestOptions = {
      method: "POST",
      headers: {},
    };

    requestOptions.headers["Content-Type"] = "application/json";
    requestOptions.headers["x-api-key"] = x_api_id;
    requestOptions.body = data;

    
    fetch(`${backendUrl}/send-bot-message`, requestOptions)
    .then((response) => response.json())
    .then(async(result) => {
      try {
        
          // await loadListNew();
        } catch (error) {}
        // setMessageList((prevMessageList) => [...prevMessageList, result.data]);
        // const oldMsg = JSON.parse(localStorage.getItem("message"))
        //  const newVal = [...oldMsg,result.data]
        //  localStorage.setItem("message",JSON.stringify(newVal))
        //  setMessageList(newVal);
        // if (result?.data?.outofOffice) {
        //   localStorage.removeItem("routeAgent");
        // }
        if (result?.route_to_agent) {
          localStorage.setItem("routeAgent", true);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const mggSend = (msg, route_to_agent = false) => {
   
    // For bot conversation

    if(!localStorage.getItem('routeAgent')){
        
        const oldMsg = JSON.parse(localStorage.getItem("message"));
        const newVal = [...oldMsg, msg];

        localStorage.setItem("message", JSON.stringify(newVal));
        setMessageList(newVal);

    }
   
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

  const botResponse = async(msg) => {
    if (!localStorage.getItem("routeAgent")) {
      const dataJson = (localStorage.getItem("bot_data"))?JSON.parse(localStorage.getItem("bot_data")).data : []; // all the data related to bot triggers, menu, etc.
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
      if (msg?.toLowerCase() == "hi" || msg?.toLowerCase() == "m") {
        const triggerStart = dataJson.filter((rs) => rs.startTrigger == true);
        if (triggerStart[0]?.botResponses) {
          menuData = triggerStart[0].menus;
          buildResponse(triggerStart[0].botResponses, triggerStart[0].menus, triggerStart[0]?.routeToAgent);
        } else {
          menuData = triggerStart[0].menus;
          buildResponseOld(triggerStart[0]);
        }
        localStorage.setItem("menuData", JSON.stringify(menuData));
        return false;
      } else {
        if (!menuData.length && localStorage.getItem("menuData").length) {
          menuData = JSON.parse(localStorage.getItem("menuData"));
        }

        menuData = menuData.filter(item => !item.text.includes("_") && !item.text.includes("Finish") && !item.text.includes("End conversation"));
        const triggerId = (menuData && menuData.length > 1)? menuData[msg - 1]?.toTriggerId
        : menuData[0]?.toTriggerId;
        let triggerData = dataJson.filter((rs) => rs.id == triggerId)[0];

        const requestObject = {
          org: localStorage.getItem("org"),
          userMessage: msg,
        }

        if(!triggerData || !triggerData.loopBackTriggerId && !triggerData.caption && triggerData.response === "" && !triggerData.botResponses){
          if(requestObject.org === "eoceanchatbot" || requestObject.org === "eoceantest"){
            await gptResponse(requestObject, dataJson, "", "");
          }
          return false;
        }

        if (triggerData?.triggerType == "F") {
          buildForm(triggerData);
        } else {

          // ...Client helpers will appear here
          if(requestObject.org === "eoceanchatbot"){
            const { stopFlow, updatedTrigger } = await reachBSHelper.handleCustomTrigger(requestObject, triggerData, backendUrl);
            if(stopFlow) return;
            updatedTrigger && (triggerData = updatedTrigger);
          }

          if (triggerData?.botResponses) {
            if (triggerData?.triggerType == "A") {
              apiTrigger = triggerData;
            }
            responseData = triggerData.botResponses;
            menuData = (triggerData && triggerData.menus)? triggerData.menus: [];
            buildResponse(responseData, triggerData.menus,triggerData?.routeToAgent);
          } else {
            menuData = (triggerData && triggerData.menus)? triggerData.menus: [];
            buildResponseOld(triggerData);
          }
          localStorage.setItem("menuData", JSON.stringify(menuData));
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

  const gptResponse = async (requestObject, jsonBody, currentTrigger, matchedTrigger) => {
    try {
        console.log('Entering conversationalGPT()');
        console.log(`https://eoceanwaba.com:3050/chat-gpt/final-reply?org=${requestObject.org}`);

        //CallGPTAPI Request Config
        let config = {
            method: 'post',
            url: "https://eoceanwaba.com:3050/chat-gpt/final-reply?org="+requestObject.org,
            // url: "https://eoceanwaba.com:3050/chat-gpt/final-reply?org=eoceanchatbot",
            headers: { 
                'Content-Type': 'application/json'
            },
            data: { question: requestObject.userMessage }
        };

        const response = await axios.request(config);
        debugger;
        let isSuccess = response.data;

        if(isSuccess.status == 200) {
          if(requestObject.org.includes("eoceanchatbot") || requestObject.org.includes("eoceantest")) {
            const userMessage = requestObject.userMessage.toLowerCase();
            if( userMessage === 'i want to speak to sales experts?' ||
              userMessage === 'how can I talk to your sales agents' ||
              userMessage.includes('chat with an agent')  ||
              userMessage.includes('speak with an agent')  ||
              userMessage.includes('speak to an agent')
            ) {
              let msgData = {
                data: userMessage,
                key_from_me: 1,
                media_wa_type: 0,
              };
              mggSend(msgData, true);
            } else {
              let triggerId = "";
              const gptResponse = isSuccess.message;
              console.log(gptResponse);
              
              if(gptResponse.includes("ADMISSION_QUERY")){
                  triggerId = "b9601_t42ef744c1-5c1d-4a39-bbe3-8bcc82a37646";
              } else if(gptResponse.includes("ENROLLMENT_PROCESS")){
                  triggerId = "b9601_t5b5a2fe37-456f-4c9f-7f51-1be03a0c8a75";
              } else if(gptResponse.includes("FEE_DISCOUNTS")){
                  triggerId = "b9601_t6d14739d0-244e-47b4-4910-1797c04eef62";
              } else if(gptResponse.includes("BOOK_A_SCHOOL_TOUR")){
                  triggerId = "b9601_t77d08ed94-d942-41dc-26f6-e24c9fa92871";
              } else if(gptResponse.includes("SCHOOL_LOCATION")){
                  triggerId = "b9601_t80c5961d4-de62-4f07-3367-b63b99831fb9";
              } else if(gptResponse.includes("APPLY_FOR_A_JOB")){
                  triggerId = "b9601_t9bb5510d7-8794-419c-55c0-0a5f308795aa";
              } else if(gptResponse.includes("PARENT_PORTAL")){
                  triggerId = "b9601_t105f901e91-96e9-4c11-b008-1aa825a4b333";
              }

              if(triggerId) {
                debugger;
                const trigger = jsonBody.find(res=> res.id === triggerId);
                if (trigger?.botResponses) {
                  menuData = trigger.menus;
                  buildResponse(trigger.botResponses, trigger.menus);
                } else {
                  menuData = trigger.menus;
                  buildResponseOld(trigger);
                }

              } else {
                buildResponseOld({
                  response: gptResponse,
                  type: "text",
                  routeToAgent: false,
                });
              }
            }
          }
        } else {
            console.log('CallGPTAPI Failed: ');
        }
    } catch (err) {
       console.error('CallGPTAPI Error: ' + err.message.toString());
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
    const dataJson = JSON.parse(localStorage.getItem("bot_data")).data; // all the data related to bot triggers, menu, etc.
    let responseData;
    let msgData = {};
    
    if (!menuData.length && localStorage.getItem("menuData").length) {
      menuData = JSON.parse(localStorage.getItem("menuData"));
    }

    menuData = menuData.filter(item => !item.text.includes("_") && !item.text.includes("Finish") && !item.text.includes("End conversation"));
    const triggerId = menuData && menuData[0]?.toTriggerId || "";
    let triggerData = dataJson.filter((rs) => rs.id == triggerId)[0];

    const requestObject = {
      org: localStorage.getItem("org"),
      userMessage: dataJson,
    }


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
    axios.post(url, formdata, config).then(async(response) => {
      loadListNew();

      // ...Client helpers will appear here
      // if(requestObject.org === "eoceanchatbot"){
      //   const { stopFlow, updatedTrigger } = await reachBSHelper.handleCustomTrigger(requestObject, triggerData, backendUrl);
      //   if(stopFlow) return;
      //   updatedTrigger && (triggerData = updatedTrigger);
      // }

      if(triggerId){
        if (triggerData?.botResponses) {
          if (triggerData?.triggerType == "A") {
            apiTrigger = triggerData;
          }
          responseData = triggerData.botResponses;
          menuData = triggerData.menus;
          buildResponse(responseData, triggerData.menus,triggerData?.routeToAgent);
        } else {
          menuData = triggerData.menus;
          buildResponseOld(triggerData);
        }
        localStorage.setItem("menuData", JSON.stringify(menuData));
      }

    });
    return false;
  };

  return (
    <div className="App"
    >
      <style>{` .sc-launcher, .sc-message--dtext, .sc-header, .webchat-widget {
            background: ${orgSettings?.widget_builder?.widget_color} !important;
        }
         `}
      </style>

      {error && (
        <ErrorPage
          isOpen={open}
          handleClick={() => setOpen(!open)}
          clickMe={clickMe}
        />
      )}


      <audio id="audio" src={audioSrc} ref={audioRef}></audio>
      <CloseModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onConfirm={handleConfirmCloseChat}
      />

      {/* <WebSocketComponent socketUrl={socketUrl}/> */}
      {isTimerModalOpen && (
        <SessionModal
          isOpen={isTimerModalOpen}
          onExtendSession={handleExtendSession}
          onClose={() => setIsTimerModalOpen(false)}
          modalTimer={modalTimer} // Pass modal timer to the modal
        />
      )}

      {
        openWhatsAppRedirect &&
        <WhatsAppRedirect
          onBack={()=> setOpenWhatsAppRedirect((prev)=> !prev)}
          widgetSettings={orgSettings}
        />
      }

      {!loading && !error && (
        <Launcher
          agentProfile={{
            teamName: org.org_name_prm,
            imageUrl: orgSettings?.widget_builder?.logo,
          }}
          workingHours={officeHours}
          onFilesSelected={onFilesSelected}
          onMessageWasSent={onSendPrivateMessage}
          messageList={messageList}
          showEmoji
          handleClick={() => setOpen(!open)}
          widgetSettings={orgSettings}
          isOpen={open}
          clickMe={clickMe}
          onClose={()=>setIsModalOpen(true)}
          startConnection={onConnect()}
          openWhatsAppRedirect={()=> setOpenWhatsAppRedirect(true)}
        />
      )}
    </div>
  );
}

export default App;
