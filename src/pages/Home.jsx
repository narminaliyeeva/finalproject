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


function Home() {
  return (
    <>
      <Navbar />
      <section className='fparallax'>
        <h1>Lorem.</h1>
      </section>
      <section className="parallax">
        <div className="container">
          <div className="row text-start">
            <div className="col-lg-3 col-md-6">
              <SiMaterialdesign className="block" />
              <h2>Art</h2>
              <span>Est sale definitiones id. Ut quo quem harum munere, eu labore voluptatum mei.</span></div>
            <div className="col-lg-3 col-md-6">
              <GiBootPrints className="block" />
              <h2>Portraits</h2>
              <span>Est sale definitiones id. Ut quo quem harum munere, eu labore voluptatum mei.</span></div>
            <div className="col-lg-3 col-md-6">
              <FaGripfire className="block" />
              <h2>Fashion</h2>
              <span>Est sale definitiones id. Ut quo quem harum munere, eu labore voluptatum mei.</span></div>
            <div className="col-lg-3 col-md-6">
              <FaSeedling className="block" />
              <h2>Editorial</h2>
              <span>Est sale definitiones id. Ut quo quem harum munere, eu labore voluptatum mei.</span></div>
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
              <button className='bookbtn'>Wiew more</button>
            </div>
          </div>

        
        </div> 

      
    <section className='photos'>
    <div className="container">
         <div className="row first ">
            <div className="col-lg-3 col-md-6 col-sm-12  photo ph1"><img src="9.jpg"  className='rphoto' alt="" /></div>
            <div className="col-lg-3 col-md-6 col-sm-12  photo ph2"><img src="10.jpg" className='rphoto '  alt="" /></div>
            <div className="col-lg-3 col-md-6 col-sm-12  photo ph3"><img src="2.jpg"  className='rphoto' alt="" /></div>
            <div className="col-lg-3 col-md-6 col-sm-12  photo ph4"><img src="8.jpg"  className='rphoto' alt="" /></div>
          </div>
          <div className="row second">
            <div className="col-lg-4 photo ph5"><img src="6.jpg" className='rphoto'  alt="" /></div>
            <div className="col-lg-4 photo ph6"><img src="11.jpg"  className='rphoto' alt="" /></div>
            <div className="col-lg-4 photo ph7"><img src="3.jpg" className='rphoto'  alt="" /></div>
          </div>
         </div>
    </section>
    </section>
    <Footer/>

    </>
  )
}

export default Home 