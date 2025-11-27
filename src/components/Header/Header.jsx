import react, { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import { Image } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../../css/custom.css';

const Header = ({ setPage }) => {

  return (
    <div className='navHeader '>

      <div className='bgPattern '></div>

      <Navbar expand="lg" className=" p-0 w-100 justify-content-center border-bottom border-dark rounded-bottom">

        <Image src="SPIcon2Sheet.png" alt="Sean icon" className="headerImage p-2" />
        <Container className="container-fluid ">
          <Navbar.Brand href="/" className="p-3 nav-underline text-light">Sean Ryan Peters</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav" className="">

            <Nav className="dropdown me-auto  p-2 ">
              <Nav.Link
                className="nav-underline text-light"
                onClick={() => setPage("home")}
                href="/">Home | </Nav.Link>
              <Nav.Link className=" nav-underline p-2 text-light" href="/#LaD">Learning And Development | </Nav.Link>
              <Nav.Link className=" nav-underline p-2 text-light" href="/#Work">Work | </Nav.Link>
              <Nav.Link className=" nav-underline p-2 text-light" href="/#contact">Contact |</Nav.Link>

            </Nav>
          </Navbar.Collapse>
        </Container>

      </Navbar>

    </div >
  );
}

export default Header;