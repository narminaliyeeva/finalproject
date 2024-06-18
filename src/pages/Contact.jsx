import React from 'react'
import Navbar from '../components/Navbar'
import { BsEnvelopeAt } from "react-icons/bs";
import Footer from '../components/Footer';
function Contact() {
  return (
    <>
    <Navbar/>
 <section className="contact">
    <div className="container">
        <div className="row text-center gradient">
            <div className="col-lg-12 question">
                <h2>Have some questions?</h2>
            </div>
            <div className="row" >
                <div className="col-lg-6"><BsEnvelopeAt  className='envlope'/></div>
                <div className="col-lg-6 inputs">
                    <input type="text" placeholder='Pleased enter your name' />
                    <input type="text" placeholder='Please enter your surname' />
                    <input type="email" placeholder='Please enter your E-mail'  />
                    <textarea name="value" id="textarea" placeholder='Your questions...'></textarea>
                    <button className='send'>Send message</button>
                            
                </div>
            </div>
        </div>
    </div>
 </section>
    <Footer/>
    </>
  )
}

export default Contact