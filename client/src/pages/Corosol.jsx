import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

import i1 from "../assets/i1.jpg"
import i2 from "../assets/i2.jpg"
import i3 from "../assets/i3.jpg"
import i4 from "../assets/i4.jpg"
import i5 from "../assets/i5.jpg"

const Corosol = () => {
  return (
    <>
     <Carousel>
      <Carousel.Item>
       <img src={i1} style={{height:"550px", width:"100%"}}/>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
      <img src={i2} style={{height:"550px", width:"100%"}} />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
      <img src={i3} style={{height:"550px", width:"100%"}} />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
      <img src={i4} style={{height:"550px", width:"100%"}} />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={i5}  style={{height:"550px", width:"100%"}}/>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      
      



    </Carousel>
    
    </>
  )
}

export default Corosol