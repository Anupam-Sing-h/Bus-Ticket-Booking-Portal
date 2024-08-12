import React from 'react';
import {FaLinkedin, FaGithub } from 'react-icons/fa';
import { Container, Row, Col, Card } from 'react-bootstrap';

function About() {
  const creators = [
    {
      name: 'Amit Kumar Singh',
      EmailId: 'amit@gmail.com',
      Linkdin: <FaLinkedin/>,
    },
    {
      name: 'Anupam Singh',
      EmailId: 'anupam@gmail.com',
      Linkdin: <FaLinkedin/>,
    },
    {
      name: 'Anup Chaurasia',
      EmailId: 'anup@gmail.com',
      Linkdin: <FaLinkedin/>,
    },
  ];

  return (
    <Container className="about-section mt-5">
      <Row className="mb-4">
        <Col>
          <h2>About Our Bus Booking App</h2>
          <p>
            Our bus booking app allows users to easily search and book bus tickets online. With booking history, and seamless user experience, our app aims to make your travel planning effortless.
          </p>
        </Col>
      </Row>
      <Row>
        {creators.map((creator, index) => (
          <Col md={4} key={index} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title>{creator.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{creator.EmailId}</Card.Subtitle>
                <Card.Text>{creator.Linkdin}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default About;
