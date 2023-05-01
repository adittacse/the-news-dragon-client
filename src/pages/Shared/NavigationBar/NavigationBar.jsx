import React, {useContext} from 'react';
import {Button, Container} from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {Link} from "react-router-dom";
import {AuthContext} from "../../../providers/AuthProvider.jsx";
import {FaUserCircle} from "react-icons/all.js";

const NavigationBar = () => {
    const {user, logOut} = useContext(AuthContext);
    
    const handleLogOut = () => {
        logOut()
            .then( () => {})
            .catch( error => {
                console.error(error);
            });
    }
    
    return (
        <Container>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Link to="/category/0">Home</Link>
                            <Nav.Link href="#about">About</Nav.Link>
                            <Nav.Link href="#career">Career</Nav.Link>
                        </Nav>
                        <Nav>
                            {
                                user && <FaUserCircle style={{fontSize: "2rem"}}></FaUserCircle>
                            }
                            { user ?
                                <Button onClick={handleLogOut} variant="secondary">Logout</Button>
                                : <Link to="/login">
                                    <Button variant="secondary">Login</Button>
                                </Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default NavigationBar;