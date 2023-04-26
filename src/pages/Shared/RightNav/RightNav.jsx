import React from 'react';
import {Button, ListGroup} from "react-bootstrap";
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

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
        </div>
    );
};

export default RightNav;