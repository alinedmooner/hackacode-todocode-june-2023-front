import React from 'react';

function Login() {
  return (
    <div>
      <img src="" alt="Logo" />
      <h1>Infinity Dream Park</h1>
      <h2>Welcome back</h2>
      <form action="" method="">
        <label htmlFor="user-name">
          Username
          <input type="text" id="user-name" placeholder="johndoe" />
        </label>
        <label htmlFor="text">
          Password
          <input type="password" id="password" placeholder="********" />
        </label>
        <button type="submit">Sign In</button>
      </form>
      <a href="a">Forgot password?</a>
    </div>
  );
}

export default Login;
