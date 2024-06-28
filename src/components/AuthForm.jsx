import React, { useState } from 'react';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="auth-container">
      <div className="auth-toggle">
        <button onClick={() => setIsLogin(true)} className={isLogin ? "active" : ""}>Login</button>
        <button onClick={() => setIsLogin(false)} className={!isLogin ? "active" : ""}>Register</button>
      </div>
      <div className="auth-form">
        {isLogin ? <LoginForm /> : <RegisterForm />}
      </div>
    </div>
  );
};

export default AuthForm;
