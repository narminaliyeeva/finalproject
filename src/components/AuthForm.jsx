import React, { useState } from 'react';
import { GoogleLoginButton, FacebookLoginButton, TwitterLoginButton } from "react-social-login-buttons";
import RegisterForm from './RegisterForm';  


const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState(null);

  const toggleForm = () => {
    setIsLogin(!isLogin);
    setEmail('');
    setPassword('');
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    
    // Sadə email və parol yoxlaması
    const validEmail = 'narmin@gmail.com';
    const validPassword = '12345678';

    if (email === validEmail && password === validPassword) {
      const username = email.split('@')[0];
      setUser(username);
      setEmail('');
      setPassword('');
      alert('Log in finished')
    } else {
      alert('Invalid email or password');
    }
  };

  return (
    <div className="auth-form">
      {user ? (
        <h2>Hi {user}!</h2>
      ) : (
        <>
          <h2>{isLogin ? 'Login to your account' : 'Create a new account'}</h2>
          {isLogin ? (
            <form onSubmit={handleLoginSubmit}>
              <div>
                <input 
                  type="email" 
                  placeholder="Enter Email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required 
                />
              </div>
              <div>
                <input 
                  type="password" 
                  placeholder="Enter Password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required 
                />
              </div>
              <div className="form-options">
                <label>
                  Remember me 
                  <input type="checkbox" /> 
                </label>
                <a href="#forgot-password">Forgot Password</a>
              </div>
              <button type="submit">Login</button>
            </form>
          ) : (
            <RegisterForm />
          )}
          <div className="toggle-form">
            <button onClick={toggleForm}>
              {isLogin ? 'Switch to Register' : 'Switch to Login'}
            </button>
          </div>
          <div className="social-login">
            <FacebookLoginButton onClick={() => alert("Facebook")}/>
            <TwitterLoginButton onClick={() => alert("Twitter")}/>
            <GoogleLoginButton onClick={() => alert("Google")}/>
          </div>
        </>
      )}
    </div>
  );
};

export default AuthForm;
