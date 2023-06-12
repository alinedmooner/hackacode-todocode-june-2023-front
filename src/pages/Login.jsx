import React from 'react';
import Logo from '../assets/logo.svg';

function Login() {
  return (
    <div className="form-container">
      <img className="logo" src={Logo} alt="company logo" />
      <h1 className="main-title">Infinity Dream Park</h1>
      <h2 className="main-text">Welcome back</h2>
      <form className="main-container" action="" method="">
        <label htmlFor="user-name">
          Username
          <input type="text" id="user-name" placeholder="johndoe" />
        </label>
        <label htmlFor="text">
          Password
          <input type="password" id="password" placeholder="********" />
        </label>
        <button className="" type="submit">Sign In</button>
      </form>
      <a className="forgot-password" href="a">Forgot password?</a>
    </div>
  );
}

export default Login;
