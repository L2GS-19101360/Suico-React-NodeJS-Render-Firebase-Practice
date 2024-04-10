import React, { Component } from "react";
import ClockComponent from "../components/ClockComponent";
import { Navbar, Container, Nav, Button, NavDropdown, Form } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import axios from "axios";

class LoginPage extends Component {

    constructor() {
        super();
        this.toRegisterPage = this.toRegisterPage.bind(this);
        this.togglePasswordVisibility = this.togglePasswordVisibility.bind(this);
        this.loginUsers = this.loginUsers.bind(this)
        this.state = {
            showPassword: false,

            enterEmail: "",
            enterPassword: ""
        }
    }

    componentDidMount() {

    }
    componentWillUnmount() {

    }

    toRegisterPage() {
        this.props.history.push('RegisterPage');
    }

    togglePasswordVisibility() {
        this.setState(prevState => ({
            showPassword: !prevState.showPassword
        }));
    }

    async loginUsers() {
        event.preventDefault();

        console.log(this.state.enterEmail + this.state.enterPassword);

        try {
            const data = {
                email: this.state.enterEmail,
                password: this.state.enterPassword
            }
            axios.post(
                'https://suico-react-nodejs-render-firebase-hj4t.onrender.com/api/users/loginUser', data
            ).then(
                (response) => {
                    console.log("Server Response", response.data.user);

                    sessionStorage.setItem("firstname", response.data.user.firstname);
                    sessionStorage.setItem("lastname", response.data.user.lastname);
                    sessionStorage.setItem("email", response.data.user.email);
                    sessionStorage.setItem("password", response.data.user.password);
                    sessionStorage.setItem("role", response.data.user.role);

                    if (response.data.user.role === "student") {
                        this.props.history.push('/StudentDashboard');
                    } else if (response.data.user.role === "teacher") {
                        this.props.history.push('/TeacherDashboard');
                    } else {
                        this.props.history.push('/AdminDashboard');
                    }
                }
            ).catch(
                (error) => {
                    console.log(error);
                }
            );
        } catch (error) {
            console.log(error);
        }
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
                                    <Nav.Link><Button variant="secondary" disabled>Login Account</Button></Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link><Button variant="primary" onClick={this.toRegisterPage}>Register Account</Button></Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <div style={{ padding: "3%" }}>
                    <h1>Login Account Page</h1>
                    <div style={{ width: "35%", height: "50%", backgroundColor: "white", padding: "3%", textAlign: "center" }}>
                        <Form>

                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Email Address</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="Enter Email Address"
                                    value={this.state.enterEmail}
                                    onChange={(e) => { this.setState({ enterEmail: e.target.value }) }} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Password</Form.Label><br />
                                <span style={{ alignItems: "center", display: "inline-flex", width: "100%" }}>
                                    <Form.Control
                                        type={this.state.showPassword ? "text" : "password"}
                                        placeholder="Enter Password"
                                        value={this.state.enterPassword}
                                        onChange={(e) => { this.setState({ enterPassword: e.target.value }) }} />
                                    <FontAwesomeIcon icon={this.state.showPassword ? faEyeSlash : faEye} style={{ fontSize: "20px", padding: "2%", cursor: "pointer" }} onClick={this.togglePasswordVisibility} />
                                </span>
                            </Form.Group><br /><br /><br />

                            <Button variant="secondary" onClick={this.loginUsers} type="submit">Login Account</Button>
                        </Form>
                    </div>
                </div>
            </div>
        );
    }

}

export default LoginPage