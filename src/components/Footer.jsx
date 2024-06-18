import React from 'react'
import { FaEnvelope } from "react-icons/fa";
import { MdPhoneForwarded } from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import Home from '../pages/Home';


function Footer() {
  return (
    <section className="about">
      <div className="container">
        <div className="row text-center">
          <div className="col-lg-4 text-start ">
            <h4>About Us</h4>
            <span className='txt'>We're Tilia, a team of photographers & videographers. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium. Est sale definitiones id. Ut quo quem harum munere, eu labore voluptatum mei.</span>
          </div>
          <div className="col-lg-4  text-start ">
            <h4>Contact Us</h4>
            <p className='txt'> <FaMapMarkerAlt /> 40 Park Ave, Brooklyn, New York</p>
            <p className='txt'> <MdPhoneForwarded /> 1-800-111-2222</p>
            <p className='txt'> <FaEnvelope /> contact@example.com</p>
            <p></p>

          </div>
          <div className="col-lg-4 text-start ">
            <h4 >Follow</h4>
            <Link to='/' className='txt'>
              <p className='txt'> <FaInstagramSquare /> Instagram</p>
              <p className='txt'> <FaFacebook />       Facebook</p>
              <p className='txt'> <FaTwitter />             Twitter</p>
              <p className='txt'> <FaYoutube />        Youtube</p></Link>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer