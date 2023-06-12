import React from 'react';
import Logo from '../assets/logo.svg';

function Home() {
  return (
    <div className="main-container">
      <img className="logo" src={Logo} alt="company logo" />
      <p className="main-text">Welcome to</p>
      <h1 className="main-title">Infinity Dream Park</h1>
      <p className="secondary-text">An Amusement and Adventure Park</p>
      <a className="main-button" href="/login">Login</a>
    </div>
  );
}

export default Home;
