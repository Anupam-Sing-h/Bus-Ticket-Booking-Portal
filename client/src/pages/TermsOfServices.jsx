import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

function TermsOfService() {
  return (
    <Container className="terms-of-service-section mt-5">
      <Row className="justify-content-center">
        <Col md={8} lg={6}>
          <Card className="p-4">
            <Card.Body>
              <h2 className="text-center mb-4">Terms of Service</h2>
              <p>Welcome to our bus ticket booking portal. These terms and conditions outline the rules and regulations for the use of our website.</p>
              <h4>1. Acceptance of Terms</h4>
              <p>By accessing this website, we assume you accept these terms and conditions. Do not continue to use the website if you do not agree to all the terms and conditions stated on this page.</p>
              <h4>2. Services</h4>
              <p>We provide an online platform for booking bus tickets. We act as an intermediary between bus operators and passengers.</p>
              <h4>3. User Responsibilities</h4>
              <p>Users are responsible for maintaining the confidentiality of their account information and for all activities that occur under their account.</p>
              <h4>4. Payment</h4>
              <p>All payments are processed securely. We are not responsible for any issues that arise during the payment process.</p>
              <h4>5. Changes to Terms</h4>
              <p>We reserve the right to make changes to these terms at any time. It is your responsibility to check this page periodically for updates.</p>
              <p>If you have any questions about these terms, please contact us.</p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default TermsOfService;
