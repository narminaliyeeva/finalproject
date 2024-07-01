import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';

const UserProfile = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:8000/profile')
    .then(res => setData(res.data));
  }, [])

  return (
    <>
      <Navbar />
      {data.map(data => (
      <div key={data.id} className="user-profile-card">
        <div className="card-header">
          <div>
            <img className="profile-picture" src="user.jpg" alt="Profil" />
          </div>
        </div>
       
        <div   className="card-body">
          <h2 className='user-name'>{data.username}</h2>
          <div className="card-stats">
           
            <div className='content-likes'>
              
              <p >Content</p>
              <span>{data.content}</span>
           
              <p>Likes</p>
              <h6 className='likes-count'>{data.likesCount}</h6>
              </div>

              <div>
             
              <img  src={data.image} className='profile-image'/>
              </div>
             
            </div>
          </div>
      
          {/* <img src={data.image}  className='user-share-images' /> */}
        </div>
      ))}
    </>
  );
};

export default UserProfile;
