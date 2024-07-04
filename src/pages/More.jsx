import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import { PiHeartLight } from "react-icons/pi";
import axios from 'axios';

function More() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios.get('http://localhost:8000/more')
      .then(res => setData(res.data));
  }, []);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const filteredData = data.filter(item =>
    item.content.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Navbar />
      <div className="sortsearch">
        <input
          type="text"
          placeholder="search . . ."
          value={search}
          onChange={handleSearch}
        />
      </div>
      <section className='photos'>
        <div className="container">
          <div className="row first">
            {filteredData.map(item => (
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
  );
}

export default More;
