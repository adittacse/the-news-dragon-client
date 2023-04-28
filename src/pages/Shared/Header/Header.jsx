import React, {useContext} from 'react';
import "./Header.css";
import logo from "../../../assets/logo.png";
import moment from 'moment';
import {Button, Container} from "react-bootstrap";
import Marquee from "react-fast-marquee";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from "react-router-dom";
import {AuthContext} from "../../../providers/AuthProvider.jsx";
import {FaUserAlt, FaUserCircle} from "react-icons/all.js";

const Header = () => {
    const {user} = useContext(AuthContext);
    
    return (
        <Container>
            <div className="text-center">
                <img src={logo} alt=""/>
                <p className="text-secondary"><small>Journalism Without Fear or Favour</small></p>
                <p className="text-secondary">{moment().format("dddd, MMMM D, YYYY")}</p>
            </div>
            <div className="d-flex bg-secondary bg-opacity-10 mb-3 p-2">
                <Button variant="danger">Latest</Button>
                <Marquee speed={40} pauseOnHover={true} className="text-danger">
                    I can be a React component, multiple React components, or just some text.
                </Marquee>
            </div>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Nav.Link href="/"><Link to="/">Home</Link></Nav.Link>
                            <Nav.Link href="/about">About</Nav.Link>
                            <Nav.Link href="/career">Career</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets">
                                <FaUserCircle style={{fontSize: "2rem"}}></FaUserCircle>
                            </Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">
                                { user ?
                                        <Button variant="secondary">Logout</Button>
                                        : <Link to="/login">
                                            <Button variant="secondary">Login</Button>
                                        </Link>
                                }
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default Header;