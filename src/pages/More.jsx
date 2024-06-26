import React from 'react'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'

function More() {
  return (
    <>
    <Navbar/>
    <div className="morephotos">
    <section className='photos'>
    <div className="container">
         <div className="row first ">
            <div className="col-lg-3 col-md-6 col-sm-12  photo ph1"><img src="9.jpg"  className='rphoto' alt="" /> </div>
            <div className="col-lg-3 col-md-6 col-sm-12  photo ph2"><img src="10.jpg" className='rphoto '  alt="" /></div>
            <div className="col-lg-3 col-md-6 col-sm-12  photo ph3"><img src="2.jpg"  className='rphoto' alt="" /></div>
            <div className="col-lg-3 col-md-6 col-sm-12  photo ph4"><img src="8.jpg"  className='rphoto' alt="" /></div>
          </div>
          <div className="row second">
            <div className="col-lg-3 col-md-6 col-sm-12 photo ph5"><img src="6.jpg" className='rphoto'  alt="" /></div>
            <div className="col-lg-3 col-md-6 col-sm-12 photo ph6"><img src="11.jpg"  className='rphoto' alt="" /></div>
            <div className="col-lg-3 col-md-6 col-sm-12 photo ph7"><img src="3.jpg" className='rphoto'  alt="" /></div>
            <div className="col-lg-3 col-md-6 col-sm-12 photo ph8"><img src="2.jpg" className='rphoto'  alt="" /></div>
          </div>
         
         </div>
    </section>
    </div>
    </>
  )
}

export default More