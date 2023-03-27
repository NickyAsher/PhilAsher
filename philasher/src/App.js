import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Stack from 'react-bootstrap/Stack';


function TheNavBar(){
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Stack gap={0}>
          <Navbar.Brand href="#home">Phil Asher Building and Joinery</Navbar.Brand>
          <Nav className="me-auto">
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
    </div>
  );
}

export default App;
