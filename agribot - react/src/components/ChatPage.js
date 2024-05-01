import React, { useState } from 'react';
import './ChatPage.css';
import Button from './Button';
import Button2 from './Button2';
import ChatMessage from './ChatMessage';
import { Link } from 'react-router-dom';
import axios from 'axios';

const ChatPage = () => {
    const [messages, setMessages] = useState([]);
    const [inputValue, setInputValue] = useState('');
  
    const handleInputChange = (e) => {
      setInputValue(e.target.value);
    };
  
    const handleSubmit = async () => {
        if (inputValue.trim() !== '') {
          const newMessage = { text: inputValue, isUser: true };
          setMessages(prevMessages => [...prevMessages, newMessage]); // Update messages with previous state
          setInputValue('');
          const request = { 'query' : inputValue }
          console.log(request)
          try {
            const response = await axios.post('http://localhost:8000/response/', request );
            const botMessage = { text: response.data.response, isUser: false };
            setMessages(prevMessages => [...prevMessages, botMessage]); // Update messages with previous state
          } 
          catch (error) {
            console.error('Error fetching response:', error);
          }
        }
      };

  return (
    <div className="home-container">
        <div className="chat-container">
            <div className="screen">
            {messages.map((message, index) => (
            <ChatMessage key={index} message={message.text} isUser={message.isUser} />
            ))}
            </div>
            <div className="input-container">
                <input
                type="text"
                placeholder="Enter your query..."
                value={inputValue}
                onChange={handleInputChange}
                onKeyPress={(e) => e.key === 'Enter' && handleSubmit()}
                />
                <Button onClick={handleSubmit} label="Send" />
            </div>
            <div className="navigation">
                <Link to="/">
                <Button2 label="Back to home" />
                </Link>
            </div>
        </div>
    </div>
  );
}

export default ChatPage;
