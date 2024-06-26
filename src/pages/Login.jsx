import React from 'react';
import AuthForm from '../components/AuthForm';
import Navbar from '../components/Navbar';



const Login = () => {
  return (
    <div className="admin">
      <Navbar/>
      <AuthForm />
    </div>
  );
};

export default Login;
