import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <>
      <div className="nav">
      <p className='lumina'>Lumina</p>
       
          <ul>
            <li><Link to='/' className="links">Home</Link></li>
            <li><Link to='/contact' className="links">Contact</Link ></li>
            <li><Link to='/userpofile' className="links">UserProfile</Link></li>
          
          </ul>
        
       <ul>
        <li><Link to='/login' className='links'>Log in </Link></li>
       </ul>
         
      </div>
    </>
  )
}

export default Navbar