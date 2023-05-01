import React from 'react';
import {Link} from "react-router-dom";
import {Container} from "react-bootstrap";

const Terms = () => {
    return (
        <Container>
            <h2>Our Terms & Conditions</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur consequuntur culpa dicta dolore doloribus, magni praesentium quasi ratione reiciendis rerum similique soluta? Commodi dignissimos dolor fuga illum iure iusto temporibus.</p>
            <p>Go Back To <Link to="/register">Register</Link></p>
        </Container>
    );
};

export default Terms;