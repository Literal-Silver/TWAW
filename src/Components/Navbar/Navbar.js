import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import FormControl from "react-bootstrap/FormControl";
import Form from "react-bootstrap/Form";
import logo from "../img/logo.png";

function App() {
    return (
<Navbar bg="light" expand="lg" sticky="top">
  <Navbar.Brand href="#home">
    <img
      alt=""
      src={logo}
      width="250"
      height="250"
      className="d-inline-block align-top"
    />
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#link">Food Protocols</Nav.Link>
      <NavDropdown title="Contact Us" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">
          Set up an appointment
        </NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Seminars</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Our Team</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="https://texasweightandwellness.com/">
          Extra Information
        </NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>;
    )}
export default Navbar;
