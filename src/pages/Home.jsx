import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { SiMaterialdesign } from "react-icons/si";
import { GiBootPrints } from "react-icons/gi";
import { FaGripfire } from "react-icons/fa";
import { FaSeedling } from "react-icons/fa";
import Navbar from '../components/Navbar'
import Footer from '../components/Footer';
import { FaRegLightbulb } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { IoIosAddCircleOutline } from "react-icons/io";
import { MdOutlineAddPhotoAlternate } from "react-icons/md";
import { IoMdAdd } from "react-icons/io";
import Sidebar from '../components/Sidebar';


function Home() {
  return (
    <>
      <Navbar />
      <Sidebar/>

      
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
              <button className='bookbtn'>View more</button>
            </div>
          </div>

        
        </div> 

      
    <section className='photos'>
    <div className="container">
         <div className="row first ">
            <div className="col-lg-3 col-md-6 col-sm-12  photo ph1"><img src="9.jpg"  className='rphoto' alt="" /> <Link to='/more'><button className='viewmore'>view more</button></Link></div>
            <div className="col-lg-3 col-md-6 col-sm-12  photo ph2"><img src="10.jpg" className='rphoto '  alt="" /><Link to='/more'><button className='viewmore'>view more</button></Link></div>
            <div className="col-lg-3 col-md-6 col-sm-12  photo ph3"><img src="2.jpg"  className='rphoto' alt="" /><Link to='/more'><button className='viewmore'>view more</button></Link></div>
            <div className="col-lg-3 col-md-6 col-sm-12  photo ph4"><img src="8.jpg"  className='rphoto' alt="" /><Link to='/more'><button className='viewmore'>view more</button></Link></div>
          </div>
          <div className="row second">
            <div className="col-lg-3 col-md-6 col-sm-12 photo ph5"><img src="6.jpg" className='rphoto'  alt="" /><Link to='/more'><button className='viewmore'>view more</button></Link></div>
            <div className="col-lg-3 col-md-6 col-sm-12 photo ph6"><img src="11.jpg"  className='rphoto' alt="" /><Link to='/more'><button className='viewmore'>view more</button></Link></div>
            <div className="col-lg-3 col-md-6 col-sm-12 photo ph7"><img src="3.jpg" className='rphoto'  alt="" /><Link to='/more'><button className='viewmore'>view more</button></Link></div>
            <div className="col-lg-3 col-md-6 col-sm-12 photo ph8"><Link to='/more'><button className='viewmore'>view more</button></Link></div>
         
          </div>
         </div>
    </section>
    </section>
    <Footer/>

    </>
  )
}

export default Home 