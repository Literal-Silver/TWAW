import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../../img/twawlogo.png";

class contactus extends Component {
<Form>
  <Row>
    <Col>
      <Form.Control placeholder="First name" />
    </Col>
    <Col>
      <Form.Control placeholder="Last name" />
    </Col>
  </Row>
</Form>
<Form>
  <Form.Group controlId="form.email">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="name@example.com" />
  </Form.Group>
  <Form.Group controlId="form.textbox">
    <Form.Label>Write to us here!</Form.Label>
    <Form.Control as="textarea" rows="5" />
  </Form.Group>
</Form>
<button
    onClick= variant="success" onClick={() => alert("Your message has been recorded and you will recieve an email response in the next 72 hours. Thank you!")}>
</button>
}

export default contactus;