import React, { Component } from "react";
import ClockComponent from "../../components/ClockComponent";
import { Navbar, Container, Nav, Button, NavDropdown, Form, InputGroup } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import StudentDashboard from "./StudentDashboard";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import axios from "axios";

class StudentSetting extends Component {

    constructor() {
        super();
        this.togglePasswordVisibility = this.togglePasswordVisibility.bind(this);
        this.toggleRePasswordVisibility = this.toggleRePasswordVisibility.bind(this);
        this.updateUser = this.updateUser.bind(this);
        this.state = {
            LAfirstname: sessionStorage.getItem("firstname"),
            LAlastname: sessionStorage.getItem("lastname"),

            showPassword: false,
            reshowPassword: false,

            userId: sessionStorage.getItem("id"),
            prevFirstname: sessionStorage.getItem("firstname"),
            prevLastname: sessionStorage.getItem("lastname"),
            prevEmail: sessionStorage.getItem("email").replace(/@gmail\.com$/, ""),
            prevPassword: sessionStorage.getItem("password"),
            prevRePassword: sessionStorage.getItem("password"),
            userRole: sessionStorage.getItem("role")
        }
    }

    componentDidMount() {

    }
    componentWillUnmount() {

    }

    handleLogout = () => {
        sessionStorage.clear();
        window.location.href = "/";
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

    async updateUser() {
        event.preventDefault();

        const newEmail = this.state.prevEmail + "@gmail.com"

        if (this.state.prevPassword === this.state.prevRePassword) {
            console.log(this.state.userId + this.state.prevFirstname + this.state.prevLastname + newEmail + this.state.prevPassword + this.state.userRole);

            const data = {
                id: this.state.userId,
                firstname: this.state.prevFirstname,
                lastname: this.state.prevLastname,
                email: this.state.prevEmail + "@gmail.com",
                password: this.state.prevPassword,
                role: this.state.userRole
            }

            axios.put(
                `https://suico-react-nodejs-render-firebase-hj4t.onrender.com/api/users/updateUser/${this.state.userId}`, data
            ).then(
                (response) => {
                    console.log("Server Response", response.data);

                    sessionStorage.clear();
                    window.location.href = "/";
                }
            ).catch(
                (error) => {
                    console.log(error);
                }
            );
        }
    }

    render() {
        const profileImage = [
            `https://ui-avatars.com/api/?name=${this.state.LAfirstname}+${this.state.LAlastname}&background=random&size=128`,
        ]

        return (
            <div>
                <Navbar expand="lg" className="bg-body-tertiary">
                    <Container>
                        <Navbar.Brand>L2GS Website</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-between">
                            <Nav>

                            </Nav>
                            <Nav>

                            </Nav>
                            <Nav>

                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <div style={{ display: 'inline-flex' }}>
                    <div style={{ width: '300px', backgroundColor: '#f0f0f0', height: '120vh', padding: '1%' }}>
                        <ClockComponent />
                        Student Settings Page<br /><br /><br /><br />
                        <div style={{ textAlign: 'center' }}>
                            <Link to='/StudentDashboard' style={{ textDecoration: "none", color: "black" }}><h5>Dashboard</h5></Link><br /><br /><br />
                            <Button variant="danger" onClick={this.handleLogout}>Logout Account</Button>
                        </div>
                    </div>
                    <div style={{ width: '175.5vh', backgroundColor: 'white', height: '120vh', padding: '3%' }}>
                        <h1>User Setting</h1>
                        <img src={profileImage[0]} alt="" />
                        <br /><br />
                        <Form>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>First Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder={this.state.prevFirstname}
                                    value={this.state.prevFirstname}
                                    onChange={(e) => { this.setState({ prevFirstname: e.target.value }) }}
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder={this.state.prevLastname}
                                    value={this.state.prevLastname}
                                    onChange={(e) => { this.setState({ prevLastname: e.target.value }) }}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">

                                <Form.Label>Email Address</Form.Label>
                                <InputGroup className="mb-3">
                                    <Form.Control
                                        placeholder={this.state.prevEmail}
                                        type="text"
                                        value={this.state.prevEmail}
                                        onChange={(e) => { this.setState({ prevEmail: e.target.value }) }}
                                    />
                                    <InputGroup.Text id="basic-addon2">@gmail.com</InputGroup.Text>
                                </InputGroup>

                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">

                                <Form.Label>Password</Form.Label>
                                <span style={{ alignItems: "center", display: "inline-flex", width: "100%" }}>
                                    <Form.Control
                                        type={this.state.showPassword ? "text" : "password"}
                                        placeholder={this.state.prevPassword}
                                        value={this.state.prevPassword}
                                        onChange={(e) => { this.setState({ prevPassword: e.target.value }) }}
                                    />
                                    <FontAwesomeIcon icon={this.state.showPassword ? faEyeSlash : faEye} style={{ fontSize: "20px", padding: "2%", cursor: "pointer" }} onClick={this.togglePasswordVisibility} />
                                </span>

                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">

                                <Form.Label>Re-Enter Password</Form.Label>
                                <span style={{ alignItems: "center", display: "inline-flex", width: "100%" }}>
                                    <Form.Control
                                        type={this.state.reshowPassword ? "text" : "password"}
                                        placeholder={this.state.prevRePassword}
                                        value={this.state.prevRePassword}
                                        onChange={(e) => { this.setState({ prevRePassword: e.target.value }) }}
                                    />
                                    <FontAwesomeIcon icon={this.state.reshowPassword ? faEyeSlash : faEye} style={{ fontSize: "20px", padding: "2%", cursor: "pointer" }} onClick={this.toggleRePasswordVisibility} />
                                </span>

                            </Form.Group>
                            <Button variant="warning" type="submit" onClick={this.updateUser}>Register Account</Button>
                        </Form>
                    </div>
                </div>
            </div>
        );
    }

}

export default StudentSetting