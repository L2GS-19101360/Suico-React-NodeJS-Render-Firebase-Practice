import React, { Component } from "react";
import ClockComponent from "../../components/ClockComponent";
import { Navbar, Container, Nav, Button, NavDropdown, Form, Table } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AdminSidebar from '../../components/admins/AdminSidebar'
import axios from "axios";

class ManageUsers extends Component {

    constructor() {
        super();
        this.deleteUser = this.deleteUser.bind(this);
        this.state = {
            users: []
        }
    }

    componentDidMount() {
        axios.get(
            'https://suico-react-nodejs-render-firebase-hj4t.onrender.com/api/users'
        ).then(
            (response) => {
                this.setState({ users: response.data }, () => {
                    console.log(this.state.users)
                });
            }
        ).catch(
            (error) => {
                console.log(error);
            }
        );
    }
    componentWillUnmount() {

    }

    async deleteUser(userId) {
        console.log(userId);
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
                    <h1>Manage Users Page</h1>
                </div>
                <div style={{ textAlign: "center" }}>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th></th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.users.map(user => (
                                <tr key={user.id}>
                                    <td><img src={`https://ui-avatars.com/api/?name=${user.firstname}+${user.lastname}&background=random`} alt="" /></td>
                                    <td>{user.firstname}</td>
                                    <td>{user.lastname}</td>
                                    <td>{user.email}</td>
                                    <td>{user.role}</td>
                                    <td><Button variant="danger" onClick={() => this.deleteUser(user.id)}>Remove User</Button></td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </div>
            </div>
        );
    }

}

export default ManageUsers