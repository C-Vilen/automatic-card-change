import { Button, Col, Form, Row, Image } from "react-bootstrap";
import { Fragment } from "react/jsx-runtime";

import './SignupForm.css'
import { Link } from "react-router-dom";

function SignupForm() {
    return(
        <Fragment>
            <section className="form-section">
                <Form className="signup-section">
                    <Form.Group>
                        <Image className="signup-logo" src="assets\images\profile_data.svg" />
                    </Form.Group>
                    <Row className="mb-3">
                        <Form.Group as={Col}>
                            <Form.Control placeholder="First name" />
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Control placeholder="Last name" />
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col}>
                            <Form.Control type="email" placeholder="Enter email:"/>
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Control type="email" placeholder="Confirm email:"/>
                        </Form.Group>
                    </Row>
                    <Form.Group>
                        <Form.Control type="password" placeholder="Password:"/>
                    </Form.Group>


                    <Form.Group>
                        <Form.Check inline/>
                        <Form.Text muted>I've read and agreed to the terms of use and privacy notice</Form.Text>
                        <br/>
                        <Link className="terms-link" to="">Terms of use</Link>
                        <Form.Text> & </Form.Text>
                        <Link className="terms-link" to="">Privacy notice</Link>
                        <Button className="signup-btn" type="submit">Submit</Button>
                    </Form.Group>
                </Form>
            </section>

        </Fragment>
    );
}

export default SignupForm;