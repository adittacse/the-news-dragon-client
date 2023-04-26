import React from 'react';
import {Button} from "react-bootstrap";
import { FaGoogle, FaGithub } from "react-icons/fa";

const RightNav = () => {
    return (
        <div>
            <h4>Login With</h4>
            <Button className="mb-2" variant="outline-primary"><FaGoogle /> Login With Google</Button>
            <Button variant="outline-dark"><FaGithub /> Login With Github</Button>
        </div>
    );
};

export default RightNav;