import React from 'react';
import {Button, ListGroup} from "react-bootstrap";
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import QZone from "../QZone/QZone.jsx";
import bg from "../../../assets/bg.png";

const RightNav = () => {
    return (
        <div>
            <div className="mb-4">
                <h4 className="mb-3">Login With</h4>
                <Button className="mb-2" variant="outline-primary"><FaGoogle /> Login With Google</Button>
                <Button variant="outline-dark"><FaGithub /> Login With Github</Button>
            </div>
            <div>
                <h4 className="mb-3">Find Us On</h4>
                <ListGroup>
                    <ListGroup.Item><FaFacebook className="me-2" />Facebook</ListGroup.Item>
                    <ListGroup.Item><FaTwitter className="me-2" />Twitter</ListGroup.Item>
                    <ListGroup.Item><FaInstagram className="me-2" />Instagram</ListGroup.Item>
                </ListGroup>
            </div>
            <QZone></QZone>
            <div className="text-center text-white mt-4" style={{backgroundImage: `url(${bg})`}}>
                <h2 className="pt-5 px-4">Create an Amazing Newspaper</h2>
                <p className="mt-5 px-4">Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
                <Button variant="danger" className="mt-5 mb-5">Lean More</Button>
            </div>
        </div>
    );
};

export default RightNav;