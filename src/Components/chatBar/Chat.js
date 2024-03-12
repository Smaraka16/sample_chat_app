import * as React from "react";
import UsersList from "./ChatUser"
import ChatMessageBox from './ChatBox'
import "./chat.css";

const ChatRenderer = () => {
  return (
    <div className="app_chat_main">
      <div className="app_chat_users">
        <UsersList />
      </div>
      <div className="app_chat_message_box">
          <ChatMessageBox />
      </div>
    </div>
  );
};

export default ChatRenderer;
