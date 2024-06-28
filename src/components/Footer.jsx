// import React from 'react'
// import { FaEnvelope } from "react-icons/fa";
// import { MdPhoneForwarded } from "react-icons/md";
// import { FaMapMarkerAlt } from "react-icons/fa";
// import {
//   MDBFooter,
//   MDBContainer,
//   MDBCol,
//   MDBRow,
//   MDBIcon,
//   MDBBtn
// } from 'mdb-react-ui-kit';


// function Footer() {
//   return (
//     <section className="about">
//       <div className="container">
//         <div className="row text-center">
//           <div className="col-lg-6 text-start ">
//             <h4>About Us</h4>
//             <span className='txt'>We're Tilia, a team of photographers & videographers. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium. Est sale definitiones id. Ut quo quem harum munere, eu labore voluptatum mei.</span>
//           </div>
//           <div className="col-lg-6  text-start ">
//             <h4>Contact Us</h4>
//             <p className='txt'> <FaMapMarkerAlt /> 40 Park Ave, Brooklyn, New York</p>
//             <p className='txt'> <MdPhoneForwarded /> 1-800-111-2222</p>
//             <p className='txt'> <FaEnvelope /> contact@auroragl.com</p>
//             <p></p>

//           </div>  
         


//     <MDBFooter className='text-center text-white' style={{ backgroundColor: '#f1f1f1' }}>
//       <MDBContainer className='pt-4'>
//         <section className='mb-4'>
//           <MDBBtn
//             rippleColor="dark"
//             color='link'
//             floating
//             size="lg"
//             className='text-dark m-1'
//             href='#!'
//             role='button'
//           >
//             <MDBIcon fab className='fab fa-facebook-f' />
//           </MDBBtn>

//           <MDBBtn
//             rippleColor="dark"
//             color='link'
//             floating
//             size="lg"
//             className='text-dark m-1'
//             href='#!'
//             role='button'
//           >
//             <MDBIcon fab className='fa-twitter' />
//           </MDBBtn>

//           <MDBBtn
//             rippleColor="dark"
//             color='link'
//             floating
//             size="lg"
//             className='text-dark m-1'
//             href='#!'
//             role='button'
//           >
//             <MDBIcon fab className='fa-google' />
//           </MDBBtn>

//           <MDBBtn
//             rippleColor="dark"
//             color='link'
//             floating
//             size="lg"
//             className='text-dark m-1'
//             href='#!'
//             role='button'
//           >
//             <MDBIcon fab className='fa-instagram' />
//           </MDBBtn>

//           <MDBBtn
//             rippleColor="dark"
//             color='link'
//             floating
//             size="lg"
//             className='text-dark m-1'
//             href='#!'
//             role='button'
//           >
//             <MDBIcon fab className='fa-linkedin' />
//           </MDBBtn>

//           <MDBBtn
//             rippleColor="dark"
//             color='link'
//             floating
//             size="lg"
//             className='text-dark m-1'
//             href='#!'
//             role='button'
//           >
//             <MDBIcon fab className='fa-github' />
//           </MDBBtn>
//         </section>
//       </MDBContainer>

//       <div className='text-center text-dark p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
//         © 2024 Copyright:
//         <a className='text-dark' href='https://mdbootstrap.com/'>
//           AuroraGL.com
//         </a>
//       </div>
//     </MDBFooter>
  
          


//         </div>
//       </div>
//     </section>
//   )
// }

// export default Footer

import React from "react"
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";

const Footer = () => <footer className="page-footer font-small blue pt-4">
    <div className="container-fluid text-center text-md-left">
        <div className="row">
            <div className="col-md-4 mt-md-0 mt-3 footer-text">
                <h4 >About Luminia Gallery</h4>
                <p > Luminia Gallery is dedicated to creating a vibrant community where artists and art lovers can connect and inspire each other. Explore a diverse range of artworks and join a supportive network of creatives from around the world.</p>
            </div>

            <hr className="clearfix w-100 d-md-none pb-0"/>

           
            <div className="col-md-4 mb-md-0 mb-3 ">
               
                
                    <div  className="contactus">
                    <h4>Contact</h4>
                    <h5 >Email:info@luminiagl.com</h5>
                    <h5>Phone: +994 50 123 45 67 </h5>
                    <h5>Address: Baku, Azerbaijan</h5>
                   
                    </div>
             
            </div>
            <div className="col-md-4 mb-md-0 mb-3">
                <h5 >Folllow</h5>
               
                    < h4 className="footer-icons"><FaInstagramSquare /></h4>
                    <h4 className="footer-icons"><FaTwitter /></h4>
                    < h4 className="footer-icons"><FaFacebook /></h4>
                    < h4 className="footer-icons"><FaGoogle  /></h4>
                
            </div>

            
        </div>
    </div>

    <div className="footer-copyright text-center py-3">© 2020 Copyright:
        <a href="https://mdbootstrap.com/">Luminiagallery.com</a>
    </div>

</footer>

export default Footer