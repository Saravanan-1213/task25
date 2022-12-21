import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Container } from "react-bootstrap";
import React, { useState } from "react";
import Col from "react-bootstrap/Col";
import { Routes, Route, Link } from "react-router-dom";
import InputGroup from "react-bootstrap/InputGroup";
import { Navigate } from "react-router-dom";
import Row from "react-bootstrap/Row";

function App() {
  return (
    <div className="App">
      <img
        src="https://startbootstrap.com/assets/img/sb-logo.svg"
        className="logo"
      />
      <div className="header">
        <h4>Sign up on Start Bootstrap</h4>
        <h6>
          Join our community of designers and developers and manage your
          purchases, favorite themes and snippets, comments, and more!
        </h6>

        <div className="buttons">
          <Button variant="primary">Login with Twitter</Button>
          <Button variant="secondary">Login with FaceBook</Button>
          <Button variant="success">Login with Google</Button>
          <Button variant="warning">Login with GitHub</Button>
        </div>
      </div>

      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/createaccount" element={<CreateAccount />} />
      </Routes>
      <a href="/createaccount"> Create an Account</a>
      <a href="/"> Sign in</a>
    </div>
  );
}

function Signin() {
  return (
    <Container className="container-signin">
      <Form className="signin-form">
        <Form.Group className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <div className="specs">
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Remember password" />
          </Form.Group>
          <Button variant="danger">Login</Button>
        </div>
      </Form>
      <h6>
        This site is protected by reCAPTCHA and the Google Privacy Policy and
        Terms of Service apply.
      </h6>
    </Container>
  );
}

function CreateAccount() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <Container className="container-account">
      <Form
        className="form-create"
        noValidate
        validated={validated}
        onSubmit={handleSubmit}
      >
        <Row className="mb-3">
          <Form.Group as={Col} md="6" controlId="validationCustom01">
            <Form.Label>First name</Form.Label>
            <Form.Control required type="text" placeholder="First name" />
          </Form.Group>
          <Form.Group as={Col} md="6" controlId="validationCustom02">
            <Form.Label>Last name</Form.Label>
            <Form.Control required type="text" placeholder="Last name" />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3">
          <Form.Label>Email address</Form.Label>

          <Form.Control required type="text" placeholder="Enter email" />
        </Form.Group>

        <Row>
          <Form.Group as={Col} md="6" className="mb-3">
            <Form.Label>Password</Form.Label>

            <Form.Control required type="password" placeholder="Password" />
          </Form.Group>

          <Form.Group as={Col} md="6" className="mb-3">
            <Form.Label>Password</Form.Label>

            <Form.Control required type="password" placeholder="Password" />
          </Form.Group>
        </Row>
        <div className="specs-1">
          <Form.Group className="mb-3">
            <Form.Check
              required
              label="Agree to terms and conditions"
              feedback="You must agree before submitting."
              feedbackType="invalid"
            />
          </Form.Group>

          <Button variant="danger">Register</Button>
        </div>
      </Form>
    </Container>
  );
}
export default App;
