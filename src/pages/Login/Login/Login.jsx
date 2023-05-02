import React, {useContext, useState} from 'react';
import {Button, Container, Form} from "react-bootstrap";
import {Link, useLocation, useNavigate} from "react-router-dom";
import {AuthContext} from "../../../providers/AuthProvider.jsx";

const Login = () => {
    const [success, setSuccess] = useState("");
    const [error, setError] = useState("");
    const {signIn} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from.pathname || "/";
    
    const handleSignIn = (event) => {
        event.preventDefault();
        setSuccess("");
        setError("");
        
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        
        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                navigate(from, {replace: true});
            })
            .catch(error => {
                setError("Wrong Credentials");
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
                
                <Form.Text className="d-block text-success">{success}</Form.Text>
                <Form.Text className="text-danger">{error}</Form.Text>
            </Form>
        </Container>
    );
};

export default Login;