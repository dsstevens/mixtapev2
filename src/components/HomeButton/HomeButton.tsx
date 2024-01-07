import './HomeButton.css';
import React from 'react';
import { Link } from 'react-router-dom';

const HomeButton = () => {
  return (
    <Link to="/" className="home-button">Home</Link>
  );
};

export default HomeButton;
