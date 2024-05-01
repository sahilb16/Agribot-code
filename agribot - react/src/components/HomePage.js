import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';
import Button2 from './Button2';
//import background from '../public/images/background.jpg';

const HomePage = () => {
  return (
    <div className="home-container">
      <div className="content">
        <h1>Welcome to Agribot</h1>
        <p>Chatbot for agriculture related issues</p>
        <Link to="/chat">
            <Button2 label="Try now" />
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
