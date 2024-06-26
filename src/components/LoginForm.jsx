import React from 'react';
import { GoogleLoginButton, FacebookLoginButton, TwitterLoginButton } from "react-social-login-buttons";

const LoginForm = () => {
  return (
    <div className="login-form">
      <h2>Login to your account</h2>
      <form>
        <div>
          <input type="email" placeholder="Enter Email" required />
        </div>
        <div>
          <input type="password" placeholder="Enter Password" required />
        </div>
        <div>
          <label>
           Remember me <input type="checkbox" /> 
          </label>
          <a href="#forgot-password">Forgot Password</a>
        </div>
        <button type="submit">Login</button>
      </form>
      <div className="social-login">
        <FacebookLoginButton onClick={() => alert("Facebook")}/>
        <TwitterLoginButton onClick={() => alert("Twitter")}/>
        <GoogleLoginButton onClick={() => alert("Google")}/>
      </div>
    </div>
  );
};

export default LoginForm;
