import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { MdLocalOffer } from "react-icons/md";


function About  () {
  return (
   <>
    <Navbar/> 
   <div className="about-content">
    <span className='vision'>Our Vision</span>
    <p className='about-text'>Luminia Gallery is more than just a platform—it's a celebration of creativity and a home for artists and art lovers alike. Our vision is to provide a dynamic space where talented creators from around the globe can showcase their work and connect with a vibrant community of enthusiasts.</p>
   <h1 className='offer'>What We Offer <MdLocalOffer /></h1>
   <ul>
    <li><span className="bold">Inspiration:</span> Explore a diverse range of artworks across various mediums, from paintings to  art, photography to sculpture.</li>
    <li><span className="bold">Community:</span> Join a supportive network of artists, collectors, and art enthusiasts who share your passion for creativity and expression.</li>
    <li><span className="bold">Opportunity:</span> Whether you're a seasoned artist or just starting out, Luminia Gallery offers opportunities to exhibit your work, gain exposure, and connect with potential buyers and collaborators.</li>
   </ul>
   <h2 className='serve'>Who We Serve</h2>
   <p className='serve-text'>Luminia Gallery serves artists of all backgrounds and experience levels who are looking for a platform to showcase their creativity. Whether you create traditional oil paintings, innovative digital art, or captivating photography, Luminia Gallery welcomes you to share your passion with a global audience.</p>
   <p className='serve-text'>Join us in celebrating art in all its forms. Whether you're an artist looking to exhibit your work, a collector searching for your next masterpiece, or simply an art enthusiast exploring new inspirations, Luminia Gallery invites you to be part of our growing community.</p>
   </div>
   <Footer/>
  
   </>
  );
}

export default About;
