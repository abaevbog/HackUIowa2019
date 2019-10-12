import React, { Component } from 'react';
import "./Login.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

class Login extends Component{

    constructor(props){
        super(props);
    }

    render(){
        return (
            <div>
                <div className = "header">
                    <text>Welcome to Vickrey Auctions</text>
                </div>
                <div>
                    <Button>Sign Up</Button>
                    <Button>Log In</Button>
                </div>
                <div class="col-sm">
                <div className = "SignUp">
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Agree to the Terms of Service" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                        </Form>
                    
                </div>
                </div>
            </div>
        );
    }
}

export default Login;
