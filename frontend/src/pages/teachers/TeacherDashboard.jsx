import React, { Component } from "react";
import ClockComponent from "../../components/ClockComponent";
import { Navbar, Container, Nav, Button, NavDropdown, Form } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class TeacherDashboard extends Component {

    constructor() {
        super();
    }

    componentDidMount() {

    }
    componentWillUnmount() {

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
                                <Nav.Link>Home</Nav.Link>
                            </Nav>
                            <Nav>
                                <ClockComponent />
                            </Nav>
                            <Nav>
                                
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <div style={{ padding: "3%" }}>
                    <h1>Teacher Dashboard</h1>
                </div>
            </div>
        );
    }

}

export default TeacherDashboard