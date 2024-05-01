import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Routes instead of Switch
import HomePage from './components/HomePage';
import ChatPage from './components/ChatPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} /> {/* Use element prop instead of component */}
          <Route path="/chat" element={<ChatPage />} /> {/* Use element prop instead of component */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
