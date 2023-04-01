import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Stack from 'react-bootstrap/Stack';
import Carousel from 'react-bootstrap/Carousel';


function TheNavBar(){
  return (
    <Navbar bg="dark" variant="dark" fixed="top">
      <Container>
        <Stack gap={0}>
          <Navbar.Brand href="#home">Phil Asher Building and Joinery</Navbar.Brand>
          <Nav className="m-auto">
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Stack>
      </Container>  
    </Navbar>
  )
}

function ProjectCarousel(){
  return (
    <Carousel bg="dark" variant="dark">
      <Carousel.Item>
        <img
            className="ProjectImage"
            src="images\IMG-20220227-WA0019.jpg"
            alt="First slide"
        />
        <Carousel.Caption>
          <h3>Pizza Oven</h3>
          <p>A custom-designed redbrick Pizza Oven, with accompanying outdoor kitchen/bar utilities</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
            className="ProjectImage"
            src="images\IMG-20220227-WA0007.jpg"
            alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Bespoke walk-in wardrobe</h3>
          <p>Handmade walk-in wardrobe designed to maximize storage while maintaining the looks and feel of the property</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}


function App() {
  return (
    <div className="App">
      <TheNavBar/>
      <section className='ParallaxImage Image1'></section>
      <section>
        <div className='ParallaxHeader'>
          <p><b>Bespoke building work & Joinery</b></p>
        </div>
      </section>
      <section className='ParallaxImage Image2'></section>
      <section>
        <div className='ParallaxHeader'>
          <p><b>Kitchens</b></p>
        </div>
      </section>
      <section className='ParallaxImage Image3'></section>
      <section>
        <div className='ParallaxHeader'>
          <p><b>Driveways</b></p>
        </div>
      </section>
      <section className='ParallaxImage Image4'></section>
      <section>
        <div className='MainContent' id='about'>
          <h2><b>About</b></h2>
          <p>A self-employed builder with decades of experience.<br/>Services ranging from simple repairs, to kitchen fittings, to even bespoke building projects.<br/>Based in Lymm, operating within the Cheshire - South Manchester Area</p>
          <br/>
        </div>
      </section>
      <ProjectCarousel/>
    </div>
  );
}

export default App;
