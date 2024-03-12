import React, { useState, useRef } from "react";

import SendIcon from "@mui/icons-material/Send";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import FileCopyIcon from "@mui/icons-material/FileCopyOutlined";
import SpeedDialAction from "@mui/material/SpeedDialAction";

import { MessageList } from "react-chat-elements";
import "react-chat-elements/dist/main.css";

const actions = [{ icon: <FileCopyIcon />, name: "Upload" }];

const ChatMessageBox = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const fileInputRef = useRef(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
    } else {
      console.warn("No file selected!");
    }
    console.log(selectedFile);
  };

  const handleIconClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="app_chat_message_box_input">
      <div className="app_chat_message_content">
        <div className="app_chat_messages">
          <div className="app_chat_receiver_message">
            <div className="app_chat_receiver_name">
              <h6>Smarak</h6>
            </div>
            <div className="app_chat_message_content">
              {"Hey how are you ??"}
            </div>
          </div>
          <div className="app_chat_receiver_message">
            <div className="app_chat_receiver_name">
              <h6>Smarak</h6>
            </div>
            <div className="app_chat_message_content">
              {"Hey how are you??"}
            </div>
          </div>
          <div className="app_chat_receiver_message">
            <div className="app_chat_receiver_name">
              <h6>Smarak</h6>
            </div>
            <div className="app_chat_message_content">
              {"Hey how are you ??"}
            </div>
          </div>
          <div className="app_chat_sender_message">
            <div className="app_chat_message_content">
              {"I am Doing Fine ."}
            </div>
          </div>
          <div className="app_chat_sender_message">
            <div className="app_chat_message_content">
              {"I am Doing Fine ."}
            </div>
          </div>
          <div className="app_chat_sender_message">
            <div className="app_chat_message_content">
              {"I am Doing Fine ."}
            </div>
          </div>
        </div>
      </div>
      <div className="app_speed_dial">
        <input
          type="file"
          ref={fileInputRef}
          style={{ display: "none" }}
          onChange={handleFileChange}
        />
        <SpeedDial
          ariaLabel="SpeedDial basic example"
          sx={{ position: "absolute", bottom: 70, right: 16 }}
          icon={<SpeedDialIcon />}
        >
          {actions.map((action) => (
            <SpeedDialAction
              key={action.name}
              icon={action.icon}
              tooltipTitle={action.name}
              onClick={handleIconClick}
            />
          ))}
        </SpeedDial>
      </div>
      <div className="app_chat_message_input">
        <input
          className="app_chat_input"
          placeholder="Type a message"
          type="text"
        />
        <SendIcon className="app_chat_send_btn" />
      </div>
    </div>
  );
};

export default ChatMessageBox;
