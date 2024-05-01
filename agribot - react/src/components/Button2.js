// Button2.js

import React from 'react';
import './Button2.css';

const Button2 = ({ onClick, label }) => {
  return (
    <button className="button2" onClick={onClick}>
      {label}
    </button>
  );
}

export default Button2;
