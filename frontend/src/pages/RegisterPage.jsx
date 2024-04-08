import React, { Component } from "react";
import ClockComponent from "../components/ClockComponent";
import { Navbar, Container, Nav, Button, NavDropdown, Form, InputGroup } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

class RegisterPage extends Component {

    constructor() {
        super();
        this.toLoginPage = this.toLoginPage.bind(this);
        this.togglePasswordVisibility = this.togglePasswordVisibility.bind(this);
        this.toggleRePasswordVisibility = this.toggleRePasswordVisibility.bind(this); // Added
        this.state = {
            showPassword: false,
            reshowPassword: false
        }
    }

    componentDidMount() {

    }
    componentWillUnmount() {

    }

    toLoginPage() {
        this.props.history.push('LoginPage');
    }

    togglePasswordVisibility() {
        this.setState(prevState => ({
            showPassword: !prevState.showPassword
        }));
    }
    toggleRePasswordVisibility() {
        this.setState(prevState => ({
            reshowPassword: !prevState.reshowPassword
        }));
    }

    render() {
        return (
            <div>
                <Navbar expand="lg" className="bg-body-tertiary">
                    <Container>
                        <Navbar.Brand>L2GS Website</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-between">
                            <Nav>
                                <Nav.Link href="/">Home</Nav.Link>
                            </Nav>
                            <Nav>
                                <ClockComponent />
                            </Nav>
                            <Nav>
                                <Nav.Item>
                                    <Nav.Link><Button variant="secondary" onClick={this.toLoginPage}>Login Account</Button></Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link><Button variant="primary" disabled>Register Account</Button></Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <div style={{ padding: "3%" }}>
                    <h1>Register Account Page</h1>
                    <div style={{ width: "35%", height: "50%", backgroundColor: "white", padding: "3%", textAlign: "center" }}>
                        <Form>
                            <div style={{ alignItems: "center", display: "inline-flex", width: "100%" }}>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>First Name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter First Name" />
                                </Form.Group> &nbsp;
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Last Name" />
                                </Form.Group>
                            </div>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Email Address</Form.Label>
                                <InputGroup className="mb-3">
                                    <Form.Control
                                        placeholder="Enter Email Address"
                                        aria-label="Enter Email Address"
                                        aria-describedby="basic-addon2"
                                    />
                                    <InputGroup.Text id="basic-addon2">@gmail.com</InputGroup.Text>
                                </InputGroup>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Password</Form.Label><br />
                                <span style={{ alignItems: "center", display: "inline-flex", width: "100%" }}>
                                    <Form.Control type={this.state.showPassword ? "text" : "password"} placeholder="Enter Password" />
                                    <FontAwesomeIcon icon={this.state.showPassword ? faEyeSlash : faEye} style={{ fontSize: "20px", padding: "2%", cursor: "pointer" }} onClick={this.togglePasswordVisibility} />
                                </span>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Re-Enter Password</Form.Label><br />
                                <span style={{ alignItems: "center", display: "inline-flex", width: "100%" }}>
                                    <Form.Control type={this.state.reshowPassword ? "text" : "password"} placeholder="Re-Enter Password" />
                                    <FontAwesomeIcon icon={this.state.reshowPassword ? faEyeSlash : faEye} style={{ fontSize: "20px", padding: "2%", cursor: "pointer" }} onClick={this.toggleRePasswordVisibility} />
                                </span>
                            </Form.Group><br />
                            <Button variant="primary">Register Account</Button>
                        </Form>
                    </div>
                </div>
            </div>
        );
    }

}

export default RegisterPage;
