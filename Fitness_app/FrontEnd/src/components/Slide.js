import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './slide.css'; 

function SlideShow() {
  return (
    <Carousel style={{marginTop:'20px',width:'90%',margin:'10px auto'}}>
      <Carousel.Item interval={750} className='sli' style={{borderRadius:'100px'}}>
        <img
        
          className="d-block w-100"
          src="/pexels-cesar-galeao-1673528-3253501.jpg"
          alt="First slide"
        ></img>
        <Carousel.Caption style={{backgroundColor:'transparent'}}>
          <h3>Track Your daily goals and fitness</h3>
        </Carousel.Caption>
      </Carousel.Item >
      <Carousel.Item interval={750}>
        <img
          className="d-block w-100"
          src="/pexels-janetrangdoan-1099680.jpg"
          alt="Second slide"
        />
        <Carousel.Caption  style={{backgroundColor:'transparent'}}>
          <h3>Calculate nutrition and diet</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={750}>
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Third slide"
        />
        <Carousel.Caption  style={{backgroundColor:'transparent'}}>
          <h3>Set trackers to maintain health</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default SlideShow;
