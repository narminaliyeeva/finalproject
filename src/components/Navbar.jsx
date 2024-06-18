import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { SlEnvolopeLetter } from "react-icons/sl";
import { SlArrowRight } from "react-icons/sl";
import Home from '../pages/Home';
import Footer from './Footer';
function Navbar() {
  return (
    <>
      <div className="nav">
      <p className='aurora'>Aurora</p>
       
          <ul>
            
            <li><Link to='/' className="links">Home</Link></li>
            <li><Link className="links">Pages</Link></li>
            <li> <Link to='/admin' className="links" >About</Link></li>
            <li><Link to='/contact' className="links">Contact</Link ></li>
           
          </ul>
          <Link to='/admin'> <button className='bookbtn'>Admin <SlArrowRight className="right" /> </button></Link>
         
      </div>
    </>
  )
}

export default Navbar