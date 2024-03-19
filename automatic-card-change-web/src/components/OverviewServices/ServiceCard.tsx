import { Card, Col, Form } from "react-bootstrap";
import { Fragment } from "react/jsx-runtime";


function ServiceCard() {
    return(
        <Fragment>
            <Col>
                <Card>
                    <Card.Img variant="top" src="assets\images\drink_coffee.svg" />
                    <Card.Body>
                        <Card.Title>Service name</Card.Title>
                        <Form.Check ></Form.Check>
                    </Card.Body>
                </Card>
            </Col>
        </Fragment>
    );
}

export default ServiceCard;