import React, { Component } from "react";
import ClockComponent from "../components/ClockComponent";
import { Navbar, Container, Nav, Button, NavDropdown, Form, InputGroup } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

class RegisterPage extends Component {

    constructor() {
        super();
        this.toLoginPage = this.toLoginPage.bind(this);
        this.togglePasswordVisibility = this.togglePasswordVisibility.bind(this);
        this.toggleRePasswordVisibility = this.toggleRePasswordVisibility.bind(this);
        this.registerUsers = this.registerUsers.bind(this)
        this.state = {
            showPassword: false,
            reshowPassword: false,

            users: [],

            newId: "",
            newFirstname: "",
            newLastname: "",
            newEmail: "",
            newPassword: "",
            rePassword: "",
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

    async registerUsers() {
        event.preventDefault();

        const email = this.state.newEmail + "@gmail.com"

        try {
            const response = await axios.get('https://suico-react-nodejs-render-firebase-hj4t.onrender.com/api/users');

            // console.log(response.data.length)

            this.setState({ newId: parseInt(response.data.length, 10) + 1 }, () => {
                if (this.state.newPassword === this.state.rePassword) {
                    console.log(this.state.newFirstname + this.state.newLastname + email + this.state.newPassword);

                    const data = {
                        // id: this.state.newId,
                        firstname: this.state.newFirstname,
                        lastname: this.state.newLastname,
                        email: email,
                        password: this.state.newPassword,
                        role: "student"
                    }

                    axios.post(
                        'https://suico-react-nodejs-render-firebase-hj4t.onrender.com/api/users/registerUser', data
                    ).then(
                        (response) => {
                            console.log("Server Response", response.data);

                            sessionStorage.setItem("id", response.data.user.userId);
                            sessionStorage.setItem("firstname", data.firstname);
                            sessionStorage.setItem("lastname", data.lastname);
                            sessionStorage.setItem("email", data.email);
                            sessionStorage.setItem("password", data.password);
                            sessionStorage.setItem("role", data.role);

                            // this.props.history.push('/StudentDashboard');
                        }
                    ).catch(
                        (error) => {
                            console.log(error);
                        }
                    );
                }
            });
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
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter First Name"
                                        value={this.state.newFirstname}
                                        onChange={(e) => { this.setState({ newFirstname: e.target.value }) }} />
                                </Form.Group> &nbsp;

                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter Last Name"
                                        value={this.state.newLastname}
                                        onChange={(e) => { this.setState({ newLastname: e.target.value }) }} />
                                </Form.Group>

                            </div>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">

                                <Form.Label>Email Address</Form.Label>
                                <InputGroup className="mb-3">
                                    <Form.Control
                                        placeholder="Enter Email Address"
                                        aria-label="Enter Email Address"
                                        aria-describedby="basic-addon2"
                                        type="text"
                                        value={this.state.newEmail}
                                        onChange={(e) => { this.setState({ newEmail: e.target.value }) }}
                                    />
                                    <InputGroup.Text id="basic-addon2">@gmail.com</InputGroup.Text>
                                </InputGroup>

                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">

                                <Form.Label>Password</Form.Label><br />
                                <span style={{ alignItems: "center", display: "inline-flex", width: "100%" }}>
                                    <Form.Control
                                        type={this.state.showPassword ? "text" : "password"}
                                        placeholder="Enter Password"
                                        value={this.state.newPassword}
                                        onChange={(e) => { this.setState({ newPassword: e.target.value }) }} />
                                    <FontAwesomeIcon icon={this.state.showPassword ? faEyeSlash : faEye} style={{ fontSize: "20px", padding: "2%", cursor: "pointer" }} onClick={this.togglePasswordVisibility} />
                                </span>

                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">

                                <Form.Label>Re-Enter Password</Form.Label><br />
                                <span style={{ alignItems: "center", display: "inline-flex", width: "100%" }}>
                                    <Form.Control
                                        type={this.state.reshowPassword ? "text" : "password"}
                                        placeholder="Re-Enter Password"
                                        value={this.state.rePassword}
                                        onChange={(e) => { this.setState({ rePassword: e.target.value }) }} />
                                    <FontAwesomeIcon icon={this.state.reshowPassword ? faEyeSlash : faEye} style={{ fontSize: "20px", padding: "2%", cursor: "pointer" }} onClick={this.toggleRePasswordVisibility} />
                                </span>

                            </Form.Group><br />
                            <Button variant="primary" onClick={this.registerUsers} type="submit">Register Account</Button>
                        </Form>
                    </div>
                </div>
            </div>
        );
    }

}

export default RegisterPage;
