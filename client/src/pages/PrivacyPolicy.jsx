import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

function PrivacyPolicy() {
  return (
    <Container className="privacy-policy-section mt-5">
      <Row className="justify-content-center">
        <Col md={8} lg={6}>
          <Card className="p-4">
            <Card.Body>
              <h2 className="text-center mb-4">Privacy Policy</h2>
              <p>Your privacy is important to us. It is our policy to respect your privacy regarding any information we may collect from you across our website.</p>
              <h4>1. Information We Collect</h4>
              <p>We may collect personal information such as your name, email address, and payment details. We also collect non-personal information such as browser type and version, and pages you view on our site.</p>
              <h4>2. How We Use Information</h4>
              <p>We use the information to provide and improve our services, communicate with you, and process transactions. We may also use the information for analytics and marketing purposes.</p>
              <h4>3. Data Security</h4>
              <p>We are committed to ensuring the security of your personal information. We implement various security measures to protect your data from unauthorized access.</p>
              <h4>4. Sharing Information</h4>
              <p>We do not share your personal information with third parties except as necessary to provide our services, comply with the law, or protect our rights.</p>
              <h4>5. Changes to This Policy</h4>
              <p>We may update our privacy policy from time to time. We will notify you of any changes by posting the new policy on our website. You are advised to review this policy periodically for any changes.</p>
              <p>If you have any questions about our privacy policy, please contact us.</p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default PrivacyPolicy;
