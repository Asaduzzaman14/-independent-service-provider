import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import logo from '../../images/logo/logo.webp'
import './Header.css'

const Header = () => {

    const [user] = useAuthState(auth)

    const handelSignOut = () => {
        signOut(auth)
    }

    return (
        <div>
            <>
                <Navbar collapseOnSelect expand="lg" sticky='top' variant="dark" className='navbar'>
                    <>
                        <Navbar.Brand as={Link} to="/"><img className='logo' src={logo} alt="" /></Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                                {/* <Nav.Link href="home#services">Services</Nav.Link>
                                <Nav.Link href="home#experts">Experts</Nav.Link>
                                <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                </NavDropdown> */}
                            </Nav>
                            <Nav>
                                <Nav.Link as={Link} to="/home">Home</Nav.Link>
                                <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
                                <Nav.Link as={Link} to="/about">About</Nav.Link>
                                <Nav.Link as={Link} to="/contuct">Contuct</Nav.Link>
                                {/* <Nav.Link as={Link} to="/signin">SignIn</Nav.Link> */}


                                {user ? <button className=' sign-out border-0 rounded  text-white px-3' onClick={handelSignOut}>signout</button>
                                    :
                                    <Nav.Link as={Link} to="/login">LogIn</Nav.Link>
                                }
                            </Nav>
                        </Navbar.Collapse>
                    </>
                </Navbar>

            </>
        </div>
    );
};

export default Header;