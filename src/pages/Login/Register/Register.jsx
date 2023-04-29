import React from 'react';
import {Button, Container, Form} from "react-bootstrap";
import {Link} from "react-router-dom";

const Register = () => {
    return (
        <Container className="w-25 mx-auto">
            <h3>Register your account</h3>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Your name</Form.Label>
                    <Form.Control type="text" name="name" placeholder="Enter name" required/>
                </Form.Group>
                
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control type="text" name="photo" placeholder="Enter photo url" required/>
                </Form.Group>
                
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter email" required/>
                </Form.Group>
                
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Password" required />
                </Form.Group>
                
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" name="accept" label="Accept Terms & Conditions" />
                </Form.Group>
                
                <Button variant="primary d-block" type="submit">Login</Button>
                <Form.Text className="text-secondary">
                    Already Have An Account ? <Link to="/login">Login</Link>
                </Form.Text>
                
                <Form.Text className="d-block text-success">
                    We'll never share your email with anyone else.
                </Form.Text>
                
                <Form.Text className="text-danger">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form>
        </Container>
    );
};

export default Register;