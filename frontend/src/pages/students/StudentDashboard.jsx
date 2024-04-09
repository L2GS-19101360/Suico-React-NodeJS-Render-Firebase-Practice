import React, { Component } from "react";
import ClockComponent from "../../components/ClockComponent";
import { Navbar, Container, Nav, Button, NavDropdown, Form } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


class StudentDashboard extends Component {

    constructor() {
        super();
        this.state = {
            LAfirstname: sessionStorage.getItem("firstname"),
            LAlastname: sessionStorage.getItem("lastname")
        }
    }

    componentDidMount() {

    }
    componentWillUnmount() {

    }

    render() {
        const profileImage = `https://ui-avatars.com/api/?name=${this.state.LAfirstname}+${this.state.LAlastname}&background=random`

        return (
            <div>
                <Navbar expand="lg" className="bg-body-tertiary">
                    <Container>
                        <Navbar.Brand>L2GS Website</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-between">
                            <Nav>
                                <Nav.Link>Home</Nav.Link>
                            </Nav>
                            <Nav>
                                <ClockComponent />
                            </Nav>
                            <Nav>
                                <img src={profileImage} alt="" />
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <div style={{ padding: "3%" }}>
                    <h1>Student Dashboard</h1>
                </div>
            </div>
        );
    }

}

export default StudentDashboard