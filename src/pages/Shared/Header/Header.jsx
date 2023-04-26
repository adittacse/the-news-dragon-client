import React from 'react';
import "./Header.css";
import logo from "../../../assets/logo.png";
import moment from 'moment';
import {Button, Container} from "react-bootstrap";
import Marquee from "react-fast-marquee";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
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
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/about">About</Nav.Link>
                            <Nav.Link href="/career">Career</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets">Profile</Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">
                                <Button variant="secondary">Login</Button>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default Header;