import { Button, Container, Row } from "react-bootstrap";
import { Fragment } from "react/jsx-runtime";
import ServiceCard from "./ServiceCard";


function OverviewContainer() {
    return(
        <Fragment>
            <section className="overview-container">
                <h1>1. Pick the services where you want to change information on</h1>
                <Container>
                    <Row>
                        <ServiceCard />
                    </Row>
                    <Button type="submit">Next</Button>
                </Container>
            </section>
        </Fragment>
    );
}

export default OverviewContainer;