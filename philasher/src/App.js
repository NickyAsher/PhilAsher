import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Stack from 'react-bootstrap/Stack';


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


function App() {
  return (
    <div className="App">
      <TheNavBar/>
      <section className='ParallaxImage Image1'>
      </section>
      <section>
        <div className='MainContent'>
         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </div>
      </section>
      <section className='ParallaxImage Image2'>
      </section>
    </div>
  );
}

export default App;
