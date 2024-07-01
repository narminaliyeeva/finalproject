import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { SiMaterialdesign } from "react-icons/si";
import { GiBootPrints } from "react-icons/gi";
import { FaGripfire } from "react-icons/fa";
import { FaSeedling } from "react-icons/fa";
import Navbar from '../components/Navbar'
import Footer from '../components/Footer';
import { PiHeartLight } from "react-icons/pi";
import { FaRegLightbulb } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { IoIosAddCircleOutline } from "react-icons/io";
import { MdOutlineAddPhotoAlternate } from "react-icons/md";
import { IoMdAdd } from "react-icons/io";
import Sidebar from '../components/Sidebar';
import axios from 'axios';


function Home() {

  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:8000/posts')
    .then(res => setData(res.data));
  }, [])

  return (
    <>
      <Navbar />
      <Sidebar />


      <section className="parallax">
        <div className="container">
          <div className="row text-start">
            <div className="col-lg-3 col-md-6 block-icons">
              <SiMaterialdesign className="block" />
              <h2>Art</h2>
              <span>Discover the intricacies of art! Lumina Gallery offers you unique and inspiring artworks. Witness the creativity of artists and the harmony of colors and forms.
              </span></div>
            <div className="col-lg-3 col-md-6 block-icons">
              <FaSeedling className="block" />

              <h2>Portraits</h2>
              <span>Uncover the allure of portraits! At Lumina Gallery, you can view stunning portraits captured by the finest portrait photographers. Learn the stories behind each portrait.
              </span></div>
            <div className="col-lg-3 col-md-6 block-icons">
              <FaGripfire className="block" />
              <h2>Fashion</h2>
              <span>Explore the most innovative trends in the world of fashion! Be captivated by creative and aesthetic photographs taken by fashion photographers at Lumina Gallery. Discover the subtleties of the fashion world.
              </span></div>
            <div className="col-lg-3 col-md-6 block-icons">
              <GiBootPrints className="block" />
              <h2>Editorial</h2>
              <span>Engage with thought-provoking articles that explore contemporary issues and cultural trends. Our editorial content provides deep insights and diverse perspectives on topics that matter. </span></div>
          </div>
        </div>
        <Link to='/add'><button className='addbtn'> <IoMdAdd className='addicon' /></button></Link>
      </section>
      <section className="advice">
        <div className="container">
          <div className="row text-center recommended">
            <div className="col-lg-6 col-md-12">
              <h1 >Recommended for you  </h1>
            </div>
            <div className="col-lg-6 col-md-12">
              <Link to='/more'><button className='bookbtn'>View more</button></Link>
            </div>
          </div>


        </div>


        <section className='photos'>
          <div className="container">
            <div className="row  ">

            {data?.map(item => (
            <div key={item.id} className="col-lg-3 col-md-6 col-sm-12 photo">
              <img src={item.image} className='rphoto' />
              <p className='image-content'>{item.content}</p>
              <Link to='/more'>
               <button className='view-btn'>View more</button>
              </Link>
                <button className="like-btn">
                {item.likesCount}
                <PiHeartLight className='like' />
              </button>
            </div>
          ))}

          </div>
          </div>
        </section>
      </section>
      <Footer />

    </>
  )
}

export default Home 