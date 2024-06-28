import React from 'react';
import Navbar from '../components/Navbar'

const UserProfile = () => {
  return (

    <>
    <Navbar/>

    <div className="user-profile-card">
      <div className="card-header">
        <div> <img className="profile-picture"  src='2.jpg' /></div>
      </div>
      <div className="card-body">
        <h2>Narmin Aliyeva</h2>
        <p>Georgia</p>
       
        <div className="card-stats">
          
          <div>
            <strong>43</strong>
            <p>Photos</p>
          </div>
          <div>
            <strong>21</strong>
            <p>Likes</p>
          </div>
        </div>
        <button className="show-more-btn">Show more</button>
      </div>
    </div></>
  );
};

export default UserProfile;
