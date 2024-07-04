import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../components/Navbar';

const UserProfile = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/profile')
      .then(res => setData(res.data));
  }, []);

  return (
    <>
      <Navbar />
      <div className="user-list">
        <h2>User Profiles</h2>
        <ul>
          {data?.map(data => (
            <li key={data.id}>
              <Link to={`/userprofile/${data.id}`}>{data.username}</Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default UserProfile;
