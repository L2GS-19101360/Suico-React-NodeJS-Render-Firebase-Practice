import React, { Component } from "react";
import ClockComponent from "../../components/ClockComponent";
import { Navbar, Container, Nav, Button, NavDropdown, Form } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AdminSidebar from '../../components/admins/AdminSidebar'

class ApproveTeachers extends Component {

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
                                
                            </Nav>
                            <Nav>
                                <ClockComponent />
                            </Nav>
                            <Nav>
                                <AdminSidebar />
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <div style={{ padding: "1%" }}>
                    <h1>Approve Teacher Page</h1>
                </div>
            </div>
        );
    }

}

export default ApproveTeachers