import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { Fragment } from "react/jsx-runtime";
import './GridGuide.css'

function GridGuide() {
    return(
        <Fragment>
            <Container>
                <Row className="grid-guide-row">
                   <Col sm={12} md={6} lg={3}>
                    <Card className="grid-guide-card">
                        <Card.Img variant="top" src="assets/images/profile_data.svg" />
                        <Card.Body>
                            <Card.Title>1. Signup securely</Card.Title>
                            <Card.Text>
                            signup securely to our service to ensure we have all of the necessary details
                            </Card.Text>
                        </Card.Body>
                    </Card>
                   </Col> 
                   <Col sm={12} md={6} lg={3}>
                    <Card className="grid-guide-card">
                        <Card.Img variant="top" src="assets/images/plain_credit_card.svg" />
                        <Card.Body>
                            <Card.Title>2. Insert your credit card</Card.Title>
                            <Card.Text>
                                Enter your credit card details that should be changed on the various memberships & etc.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                   </Col> 
                   <Col sm={12} md={6} lg={3}>
                    <Card className="grid-guide-card">
                        <Card.Img variant="top" src="assets/images/online_payments.svg" />
                        <Card.Body>
                            <Card.Title>3. pick the services</Card.Title>
                            <Card.Text>
                                Pick the services where you have a membership or your credit card is needed for other purposes.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                   </Col> 
                   <Col sm={12} md={6} lg={3}>
                    <Card className="grid-guide-card">
                        <Card.Img variant="top" src="assets/images/drink_coffee.svg" />
                        <Card.Body>
                            <Card.Title>4. Relax!</Card.Title>
                            <Card.Text>
                                Our system helps to change your credit card in the matter of seconds on all of your services.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                   </Col> 
                </Row>
                <div className="text-center">
                    <Button className="grid-guide-button" href="#">Get started now!</Button>
                </div>
            </Container>
        </Fragment>
    );
}

export default GridGuide;