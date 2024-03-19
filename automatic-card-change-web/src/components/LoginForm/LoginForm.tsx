import { Link } from "react-router-dom";
import { Fragment } from "react/jsx-runtime";

import './LoginForm.css'
import { Button, Form, Image } from "react-bootstrap";

function LoginForm() {
    return(
        <Fragment>
            <section className="form-section">
                <Form className="login-section">
                    <Form.Group>
                        <Image className="login-logo" src="assets\images\credit_card.svg" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Control type="email" placeholder="Enter email:"/>
                        <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
                    </Form.Group>
                    <Form.Group>
                        <Form.Control type="password" placeholder="Password:"/>
                    </Form.Group>
                    <Form.Group>
                        <Button className="login-btn" type="submit">Submit</Button>
                    </Form.Group>
                    <Form.Group>
                        <Form.Text>Don't have an account yet?</Form.Text><br/>
                        <Link className="signup-link" to="/signup">Signup</Link>
                    </Form.Group>
                </Form>
            </section>
        </Fragment>
    );
}

export default LoginForm;