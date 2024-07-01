import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import { PiHeartLight } from "react-icons/pi";
import { Link } from 'react-router-dom'
import axios from 'axios';

function More() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:8000/more')
    .then(res => setData(res.data));
  }, [])
  return (
    <>
    <Navbar/>
    <section className='photos'>
          <div className="container">
            <div className="row first ">

            {data?.map(item => (
            <div key={item.id} className="col-lg-3 col-md-6 col-sm-12 photo">
              <img src={item.image} className='rphoto' />
              <h6 className='image-content'>{item.content}</h6>
              
                <button className="like-btn">
                {item.likesCount}
                <PiHeartLight className='like' />
              </button>
            </div>
          ))}

          </div>
          </div>
        </section>
  
  
    </>
  )
}

export default More