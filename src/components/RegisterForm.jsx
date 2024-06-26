import React from 'react';

const RegisterForm = () => {
  return (
    <div className="register-form">
      <h2>Create a new account</h2>
      <form> 
        <div>
          <input type="text" placeholder="Enter Name" required />
        </div>
        <div>
          <input type="email" placeholder="Enter Email" required />
        </div>
        <div>
          <input type="password" placeholder="Enter Password" required />
        </div>
        <div>
          <input type="password" placeholder="Confirm Password" required />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegisterForm;
