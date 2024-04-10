import React, { Component } from "react";
import { Navbar, Container, Nav, Button, NavDropdown, Form, Offcanvas, OffcanvasBody } from 'react-bootstrap'
import ClockComponent from "../ClockComponent";
import StudentSetting from "../../pages/students/StudentSetting";
import { Link } from 'react-router-dom'

class StudentSidebar extends Component {

    constructor() {
        super();
        this.state = {
            LAfirstname: sessionStorage.getItem("firstname"),
            LAlastname: sessionStorage.getItem("lastname"),

            show: false,
        }
    }

    componentDidMount() {

    }
    componentWillUnmount() {

    }

    handleClose = () => {
        this.setState({ show: false });
    }

    handleShow = () => {
        this.setState({ show: true });
    }
    handleLogout = () => {
        sessionStorage.clear();
        window.location.href = "/";
    }

    render() {
        const profileImage = [
            `https://ui-avatars.com/api/?name=${this.state.LAfirstname}+${this.state.LAlastname}&background=random`,
            `https://ui-avatars.com/api/?name=${this.state.LAfirstname}+${this.state.LAlastname}&background=random&size=128`,
        ]

        return (
            <div>
                <img src={profileImage[0]} alt="" onClick={this.handleShow} style={{ cursor: "pointer" }} />

                <Offcanvas show={this.state.show} onHide={this.handleClose} placement="end">
                    <Offcanvas.Header>
                        <div>
                            <ClockComponent />
                            <h3>Student Sidebar Menu</h3>
                        </div>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <div style={{textAlign: "center"}}>
                            <img src={profileImage[1]} alt="" onClick={this.handleShow} /><br/>
                            <h5>{this.state.LAfirstname} {this.state.LAlastname}</h5><br/><br/><br/>
                            <Link to='/StudentSetting' style={{textDecoration: "none", color: "black"}}><h5>User Setting Page</h5></Link><br/><br/><br/><br/>
                            <Button variant="danger" onClick={this.handleLogout}>Logout Account</Button>
                        </div>
                    </Offcanvas.Body>
                </Offcanvas>
            </div>
        );
    }

}

export default StudentSidebar