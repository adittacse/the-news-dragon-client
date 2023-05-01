import React, {useContext} from 'react';
import {Button, Container, Form} from "react-bootstrap";
import {Link} from "react-router-dom";
import {AuthContext} from "../../../providers/AuthProvider.jsx";

const Login = () => {
    const {signIn} = useContext(AuthContext);
    
    const handleSignIn = (event) => {
        event.preventDefault();
        
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        
        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
            })
            .catch(error => {
                console.error(error);
            })
    }
    
    return (
        <Container className="w-25 mx-auto">
            <h3>Login your account</h3>
            <Form onSubmit={handleSignIn}>
                <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter email" required/>
                </Form.Group>
                
                <Form.Group className="mb-3" controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Password" required />
                </Form.Group>
                
                <Button variant="primary d-block" type="submit">Login</Button>
                <Form.Text className="text-secondary">
                    Dont’t Have An Account ? <Link to="/register">Register</Link>
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

export default Login;