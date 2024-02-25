import Carousel from 'react-bootstrap/Carousel';
import './HeaderSlider.css'
function HeaderSlider() {
  return (
    <Carousel className='carosusel rounded-carousel'>
      <Carousel.Item >
        <img
          className="d-block w-100 slider-img"
          src="/images/Res-11.jpg"
          alt="First slide"
        />
        <Carousel.Caption style={{coler:'#ccc'}}>
          <h3 style={{coler:'black'}}>professional Templete</h3>
          <p style={{coler:'#cccc'}}>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/Res-12.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Employee Template Resume</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
    
      {/* <Carousel.Item >
        <video controls
          
          className="d-block w-100 control"
          src="/videos/adv-header.mp4"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Employee Template Resume</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item> */}


      
    </Carousel>
  );
}

export default HeaderSlider;