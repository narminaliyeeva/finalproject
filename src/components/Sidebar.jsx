import React from 'react';
import {
  MDBCarousel,
  MDBCarouselItem,
  MDBCarouselCaption
} from 'mdb-react-ui-kit';

const Sidebar = () => (
  <MDBCarousel showControls showIndicators>
  
      <MDBCarouselItem itemId={1}>
        <img src='https://mdbootstrap.com/img/Photos/Slides/img%20(23).webp' alt="First slide" className="d-block w-100" />
        <MDBCarouselCaption>
         <h1 className='sidebarh'>In the Depths of the Soul</h1>
        </MDBCarouselCaption>
      </MDBCarouselItem>
      <MDBCarouselItem itemId={2}>
        <img src='https://mdbootstrap.com/img/Photos/Slides/img%20(22).webp' alt="Second slide" className="d-block w-100" />
        <MDBCarouselCaption>
        
        <h1 className='sidebarh'>Rhythms of the Earth</h1>
        </MDBCarouselCaption>
      </MDBCarouselItem>
      <MDBCarouselItem itemId={3}>
        <img src='https://mdbootstrap.com/img/Photos/Slides/img%20(15).webp' alt="Third slide" className="d-block w-100" />
        <MDBCarouselCaption>
          <h1 className='sidebarh'>The Triumph of Courage</h1>
          
        </MDBCarouselCaption>
      </MDBCarouselItem>
    
  </MDBCarousel>
);

export default Sidebar;
