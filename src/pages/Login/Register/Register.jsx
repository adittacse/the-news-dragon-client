import React, {useContext, useState} from 'react';
import {Button, Container, Form} from "react-bootstrap";
import {Link} from "react-router-dom";
import {AuthContext} from "../../../providers/AuthProvider.jsx";

const Register = () => {
    const [success, setSuccess] = useState("");
    const [error, setError] = useState("");
    const {createUser, userUpdateProfile} = useContext(AuthContext);
    const [accepted, setAccepted] = useState(false);
   
    const handleUpdateName = (user, data) => {
        userUpdateProfile(user, {
            displayName: data,
        })
            .then( () => {
                console.log("User updated");
            })
            .catch(error => {
                setError(error.message);
            });
    }
    
    const handleUpdatePhoto = (user, data) => {
        userUpdateProfile(user, {
            photoURL: data,
        })
            .then( () => {
                console.log("User updated");
            })
            .catch(error => {
                setError(error.message);
            });
    }
    
    const handleRegister = (event) => {
        event.preventDefault();
        setSuccess("");
        setError("");
        
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        
        createUser(email, password)
            .then(result => {
                const createdUser = result.user;
                handleUpdateName(createdUser, name);
                handleUpdatePhoto(createdUser, photo);
                setSuccess("User has been created");
            })
            .catch(error => {
                setError(error.message);
            });
    }
    
    const handleAccepted = (event) => {
        setAccepted(event.target.checked);
    }
    
    return (
        <Container className="w-25 mx-auto">
            <h3>Register your account</h3>
            <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="name">
                    <Form.Label>Your name</Form.Label>
                    <Form.Control type="text" name="name" placeholder="Enter name" required/>
                </Form.Group>
                
                <Form.Group className="mb-3" controlId="photo">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control type="text" name="photo" placeholder="Enter photo url" required/>
                </Form.Group>
                
                <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter email" required/>
                </Form.Group>
                
                <Form.Group className="mb-3" controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Password" required />
                </Form.Group>
                
                <Form.Group className="mb-3" controlId="checkbox">
                    <Form.Check onClick={handleAccepted} type="checkbox" name="accept"
                                label={<>Accept <Link to="/terms">Terms & Conditions</Link></>} />
                </Form.Group>
                
                <Button variant="primary d-block" type="submit" disabled={!accepted}>Register</Button>
                <Form.Text className="text-secondary">
                    Already Have An Account ? <Link to="/login">Login</Link>
                </Form.Text>
                
                <Form.Text className="d-block text-success">{success}</Form.Text>
                
                <Form.Text className="text-danger">{error}</Form.Text>
            </Form>
        </Container>
    );
};

export default Register;