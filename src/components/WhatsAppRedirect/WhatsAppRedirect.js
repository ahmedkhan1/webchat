import React, { useState, useEffect } from "react";
import whatsappLogo from "../../assets/socials/whatsapp.png"; // Replace with actual path
import backIcon from "../../assets/previous.png"; // Replace with actual path
import "./WhatsAppRedirect.css"; // Add custom styling here
import axios from "axios";

const API_URL = process.env.REACT_APP_BACKEND_URl;
// const API_URL = "https://backend.digiconn.co";

const WhatsAppRedirect = ({ onBack, widgetSettings }) => {
  const [qrCodeUrl, setQrCodeUrl] = useState(null); // State to store the QR code URL
  const [loading, setLoading] = useState(true); // State to manage loading state

  useEffect(() => {
    // Simulate an API call to fetch the QR code URL
    const fetchQrCode = async () => {
        setLoading(true); // Set loading to true before fetching
        
        const orgUnitId = localStorage.getItem('org');
        let qrCode = "";
        debugger;
        try{
          const url =  API_URL + "/api/qrcode?orgunit=" + orgUnitId;
          qrCode = await axios.get(url, {});
        } catch(err) {}

        debugger;
        if(qrCode && qrCode?.data?.data?.QR_IMAGE_URL){
          setQrCodeUrl(qrCode?.data?.data?.QR_IMAGE_URL); // Update the QR code URL
          setLoading(false); // Set loading to false after fetching
        } else {
          const orgUnitId = localStorage.getItem('org');
          let url =  API_URL + "/api/qrcode";
          const qrCode =  await axios.post(url, {
            "prefilled_message": "hi",
            "generate_qr_image": "PNG",
            "org_unit_id": orgUnitId
          });
          if(qrCode?.data?.data?.QR_IMAGE_URL){
            setQrCodeUrl(qrCode?.data?.data?.QR_IMAGE_URL); // Update the QR code URL
            setLoading(false); // Set loading to false after fetching
          } 
        }
    };

    fetchQrCode();
  }, []);

  return (
    <div className="whatsapp-redirect">
      <button className="back-button" onClick={() => onBack()}>
        <img src={backIcon} alt="Back" />
      </button>
      <div className="content">
        <img src={whatsappLogo} alt="WhatsApp" className="whatsapp-logo" />
        <h2>Continue on WhatsApp</h2>
        <p>
          Take the conversation to your WhatsApp account. You can return anytime.
        </p>
        <p>
          Scan the QR code and then send the message that appears in your WhatsApp.
        </p>

        {/* Show loader or QR code */}
        {loading ? (
          <div className="loader">Loading QR Code...</div>
        ) : (
          <img src={qrCodeUrl} alt="QR Code" className="qr-code" />
        )}

        <a target={"_blank"} href={`https://web.whatsapp.com/send/?phone=${widgetSettings?.other_channel && widgetSettings?.other_channel[0].whatsapp}&text=Hi`}  className="open-link">
          Open WhatsApp on this device.
        </a>
      </div>
    </div>
  );
};

export default WhatsAppRedirect;
