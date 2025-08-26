import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';
import img1 from '../../assets/img1.jpeg'
import img2 from '../../assets/img2.jpeg'
import img3 from '../../assets/download (11).jpeg'

export default function MoviesHeader() {
  return (
    <div style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}} >
        <h1>Our Top Rated Movies</h1>
        <Carousel style={{width:'60%'}} >
      <Carousel.Item>
        <img src={img1} style={{width:'100%',height:"500px"}}  />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
                <img src={img2}style={{width:'100%',height:"500px"}}  />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
                        <img src={img3} style={{width:'100%',height:"500px"}}   />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  )
}
