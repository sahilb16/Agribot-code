import React from 'react';
import './ChatPage.css';

const ChatMessage = ({ message, isUser }) => {
  return (
    <div className={`message ${isUser ? 'user' : 'bot'}`}>
      <p>{message}</p>
    </div>
  );
}

export default ChatMessage;
