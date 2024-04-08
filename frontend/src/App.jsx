import { Component, useState } from 'react'
import './App.css'
import { Navbar, Container, Nav, Button, NavDropdown } from 'react-bootstrap'
import ClockComponent from '../src/components/ClockComponent.jsx'
import Lorenz from '../src/assets/Lorenz.jpg'

class App extends Component {

  constructor() {
    super();
    this.toLoginPage = this.toLoginPage.bind(this);
    this.toRegisterPage = this.toRegisterPage.bind(this);
  }

  componentDidMount() {

  }
  componentWillUnmount() {

  }

  toLoginPage() {
    this.props.history.push('LoginPage');
  }
  toRegisterPage() {
    this.props.history.push('RegisterPage');
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
                  <Nav.Link><Button variant="primary" onClick={this.toRegisterPage}>Register Account</Button></Nav.Link>
                </Nav.Item>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <div style={{ padding: "3%" }}>
          <h1>Welcome to L2GS InfoTechnovations School</h1>
          <p style={{ textAlign: "justify", backgroundColor: "white", padding: "2%" }}>
            Welcome to L2GS InfoTechnovations School, where innovation meets education in the dynamic world of Information Technology! At L2GS InfoTechnovations School, we cultivate the next generation of tech leaders, equipping students with cutting-edge skills, industry expertise, and a passion for pushing the boundaries of what's possible in the digital realm. Step into our vibrant community where creativity thrives, ideas flourish, and technology transforms the future. Join us on a journey of discovery, where every click, code, and connection shapes tomorrow's technological landscape.
          </p>
          <div style={{ textAlign: "center", marginBottom: "20px", marginTop: "20px" }}>
            <Button variant="primary" onClick={this.toRegisterPage}>Join the School</Button>
          </div>
          <p style={{ textAlign: "justify", backgroundColor: "white", padding: "2%" }}>
            "Welcome to L2GS InfoTechnovations School. As the founder, I'm deeply honored to stand before you on this momentous occasion.

            To our esteemed faculty, dedicated staff, supportive parents, and eager students: thank you. Your presence here today signifies not just the inauguration of our school, but the beginning of a journey towards excellence in Information Technology education.

            Together, let's embrace the spirit of innovation, collaboration, and curiosity that defines our institution. Here, in the heart of L2GS InfoTechnovations School, let's dare to dream, explore, and shape the future of technology together.

            Thank you, and welcome to L2GS InfoTechnovations School."
          </p><br />

          <img src={Lorenz} alt="" height={150} width={150} style={{ border: "1px solid black" }} /><br />
          Lorenz Gil G. Suico, Founder of L2GS InfoTechnovations School
        </div>
      </div>
    );
  }

}

export default App
