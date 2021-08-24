import { Tabs, Tab } from 'react-bootstrap';
import {Container, Row, Col} from 'react-bootstrap';
function OurWork() {
    return(
        <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">
        <Tab eventKey="home" title="Home">
        <Container fluid>
                    <Row>
                        <Col lg={3}>1 of 1</Col>
                        <Col lg={3}>1 of 1</Col>
                        <Col lg={3}>1 of 1</Col>
                        <Col lg={3}>1 of 1</Col>
                    </Row>
            </Container>
        </Tab>
        <Tab eventKey="profile" title="Profile">
        <Container fluid>
                    <Row>
                        <Col lg={3}>1 of 1</Col>
                        <Col lg={3}>1 of 1</Col>
                        <Col lg={3}>1 of 1</Col>
                        <Col lg={3}>1 of 1</Col>
                    </Row>
            </Container>
        </Tab>
        <Tab eventKey="contact" title="Contact">
        <Container fluid>
                    <Row>
                        <Col lg={3}>1 of 1</Col>
                        <Col lg={3}>1 of 1</Col>
                        <Col lg={3}>1 of 1</Col>
                        <Col lg={3}>1 of 1</Col>
                    </Row>
            </Container>
        </Tab>
      </Tabs>
    )
}

export default OurWork;