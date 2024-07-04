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
               
                    < h4 className="footer-icons"> <FaInstagramSquare /></h4>
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