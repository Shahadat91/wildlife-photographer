import { signOut } from "firebase/auth";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";

const Header = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

 const  handleSignOut =()=>{
   signOut(auth);
   navigate('/signin');
 }
  return (
    <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark" fixed="top">
      <Container>
        <Navbar.Brand as={Link} to="/">Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="home#services">Services</Nav.Link>
            <Nav.Link as={Link} to="/blogs">Blogs</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link as={Link} to="/aboutme">About Me</Nav.Link>
            {
              user?
              <button onClick={handleSignOut} className="btn btn-primary">Sign Out</button>
              :
              <Nav.Link as={Link} to="/signin">
              Sign In
            </Nav.Link>
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
