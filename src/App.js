import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
// import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import './App.css';

function App() {
  return (
    // <Navbar bg="light" expand="lg">
    //   <Container>
    //     <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>

    //     <Navbar.Toggle aria-controls="basic-navbar-nav" />

    //     <Navbar.Collapse id="basic-navbar-nav">
    //       <Nav className="me-auto">
    //         <Nav.Link href="#home">Home</Nav.Link>
    //         <Nav.Link href="#link">Link</Nav.Link>

    //         <NavDropdown title="Dropdown" id="basic-nav-dropdown">
    //           <NavDropdown.Item href="#action">Action</NavDropdown.Item>
    //           <NavDropdown.Item href="#another">Another action</NavDropdown.Item>
    //         </NavDropdown>
    //       </Nav>
    //     </Navbar.Collapse>
    //   </Container>
    // </Navbar>
    <>
    <Navbar />
    <Hero />
    </>
  );
}

export default App;
