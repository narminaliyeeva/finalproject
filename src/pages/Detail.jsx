import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../components/Navbar';
import { PiHeartLight } from "react-icons/pi";

const Detail = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:8000/more/${id}`)
      .then(res => setItem(res.data));
  }, [id]);

  if (!item) return <p>Loading...</p>;

  return (
    <>
      <Navbar />
      <div className="detail-page">
        <img src={item.image} className='rphoto' alt="Content" />
        <h1>{item.content}</h1>
        <p>{item.description}</p>
        <div className="card-stats">
          <p>Content Likes: {item.likesCount}</p>
          <button className="like-btn">
            <PiHeartLight className='like' />
          </button>
        </div>
      </div>
    </>
  );
};

export default Detail;
