import React, { Component } from 'react';
import "./Login.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

class Login extends Component{

    constructor(props){
        super(props);
    }
    
    registerUser() {
      console.log("This will make a call to Blockstack API");
    }

    render(){
        return (
            <div>
                <div className = "header">
                    <text>Sign up for Vickrey Auctions</text>
                </div>
                <div class="col-12 col-md-4 offset-md-4">
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
                    <Button variant="primary" onClick={this.registerUser}>
                        Submit
                    </Button>
                    </Form>
              </div>
            </div>
        );
    }
}

export default Login;
