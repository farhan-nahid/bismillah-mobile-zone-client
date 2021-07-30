import {
  faEnvelope,
  faMapMarkerAlt,
  faPhoneAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="mt-5 pt-5 bg-light">
      <Container>
        <Row>
          <Col xs={6} md={3}>
            <h6 className="name mb-4">Services</h6>
            <p className="text-muted">Computer Repair</p>
            <p className="text-muted">Electronics Repair</p>
            <p className="text-muted">Smartphone Repair</p>
            <p className="text-muted">Console Repair</p>
            <p className="text-muted">Electronics Recovery</p>
          </Col>
          <Col xs={6} md={3}>
            <h6 className="mb-4 name">Location</h6>
            <p className="text-muted">
              {" "}
              <span className="mr-2">
                <FontAwesomeIcon icon={faMapMarkerAlt} />{" "}
              </span>{" "}
              Level-4, 34, Savar City Centre, Savar, Dhaka
            </p>
            <p className="text-muted">
              {" "}
              <span className="mr-2">
                <FontAwesomeIcon icon={faEnvelope} />{" "}
              </span>{" "}
              Official:{" "}
              <a href="mailto:nahidahmed9933@gmail.com"> farhan@gmail.com</a>
            </p>
            <p className="text-muted">
              {" "}
              <span className="mr-2">
                {" "}
                <FontAwesomeIcon icon={faPhoneAlt} />{" "}
              </span>{" "}
              Helpline : <a href="tel:01879056875"> 01879056875</a> (Available :
              09:00am to 11:00pm)
            </p>
          </Col>
          <Col xs={12} md={6}>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Control
                  type="email"
                  placeholder="Email Address*"
                  required
                />
              </Form.Group>

              <Form.Group controlId="formBasicSubject">
                <Form.Control type="text" placeholder="Subject*" required />
              </Form.Group>

              <Form.Group controlId="exampleForm.ControlTextarea">
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Your Message*"
                  required
                />
              </Form.Group>

              <Button variant="danger" className="btn-brand" type="submit">
                {" "}
                Submit{" "}
              </Button>
            </Form>
          </Col>
        </Row>
        <div className="copy-right text-center mt-3">
          <p>
            {new Date().getFullYear()} &copy; by{" "}
            <a href="//facebook.com/farhan.nahid.01" target="-blank">
              {" "}
              Farhan Ahmed Nahid{" "}
            </a>{" "}
            . All Rights Reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
