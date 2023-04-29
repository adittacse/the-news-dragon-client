import React from 'react';
import "./Header.css";
import logo from "../../../assets/logo.png";
import moment from 'moment';
import {Button, Container} from "react-bootstrap";
import Marquee from "react-fast-marquee";

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
        </Container>
    );
};

export default Header;