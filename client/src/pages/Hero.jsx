import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import "../css/hero.css"

const Hero = () => {
  return (
    <section className="booking-section py-5">
      <Container>
        <Row className="align-items-center">
          {/* Left Side Text */}
          <Col md={6}>
            <h1 className="booking-title">
              Personalized doctor <br /> appointment software
            </h1>
            <p className="booking-description">
              A good appointment scheduling app is indispensable for healthcare
              workers. With Zoho Bookings, you can eliminate phone calls for
              appointment confirmations and completely automate your booking
              process.
            </p>
            <Button variant="danger" size="lg">
              TRY BOOKINGS FOR FREE
            </Button>
          </Col>

          {/* Right Side Appointment Card */}
          <Col md={6}>
            <Card className="appointment-card text-center">
              <Card.Body>
                <h5 className="appointment-date">June 2024</h5>
                <div className="date-options d-flex justify-content-center">
                  <span className="date-box active">14 Mon</span>
                  <span className="date-box">15 Tue</span>
                  <span className="date-box">16 Wed</span>
                </div>
                <h6 className="mt-3">Available Slots</h6>
                <div className="slot-options">
                  <span className="slot-box">09:00 am</span>
                  <span className="slot-box active">09:30 am</span>
                  <span className="slot-box">10:30 am</span>
                  <span className="slot-box">11:00 am</span>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
