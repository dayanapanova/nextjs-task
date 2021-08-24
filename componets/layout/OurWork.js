import { Tabs, Tab } from 'react-bootstrap';
import {Container, Row, Col} from 'react-bootstrap';
import { Fragment } from 'react';
function OurWork() {
    return(
        <Fragment>
        <h2 className='title'>OUR WORK</h2>
        <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">
        <Tab eventKey="home" title="Project 1">
        <Container fluid>
                    <Row>
                        <Col lg={3}><img height='120px' width='150px' src='https://picsum.photos/id/237/200/300'/></Col>
                        <Col lg={3}><img height='120px' width='150px' src='https://picsum.photos/200/300'/></Col>
                        <Col lg={3}><img height='120px' width='150px' src='https://picsum.photos/200/300'/></Col>
                        <Col lg={3}><img height='120px' width='150px' src='https://picsum.photos/200/300'/></Col>
                    </Row>
                    <Row>
                        <Col lg={3}><img height='120px' width='150px' src='https://picsum.photos/200/300'/></Col>
                        <Col lg={3}><img height='120px' width='150px' src='https://picsum.photos/200/300'/></Col>
                        <Col lg={3}><img height='120px' width='150px' src='https://picsum.photos/200/300'/></Col>
                        <Col lg={3}><img height='120px' width='150px' src='https://picsum.photos/200/300'/></Col>
                    </Row>
            </Container>
        </Tab>
        <Tab eventKey="profile" title="Project 2">
        <Container fluid>
                    <Row>
                        <Col lg={3}><img height='120px' width='150px' src='https://picsum.photos/200/300'/></Col>
                        <Col lg={3}><img height='120px' width='150px' src='https://picsum.photos/200/300'/></Col>
                        <Col lg={3}><img height='120px' width='150px' src='https://picsum.photos/200/300'/></Col>
                        <Col lg={3}><img height='120px' width='150px' src='https://picsum.photos/200/300'/></Col>
                    </Row>
                    <Row>
                        <Col lg={3}><img height='120px' width='150px' src='https://picsum.photos/200/300'/></Col>
                        <Col lg={3}><img height='120px' width='150px' src='https://picsum.photos/200/300'/></Col>
                        <Col lg={3}><img height='120px' width='150px' src='https://picsum.photos/200/300'/></Col>
                        <Col lg={3}><img height='120px' width='150px' src='https://picsum.photos/200/300'/></Col>
                    </Row>
            </Container>
        </Tab>
        <Tab eventKey="contact" title="Project 3">
        <Container fluid>
                    <Row>
                        <Col lg={3}><img height='120px' width='150px' src='https://picsum.photos/200/300'/></Col>
                        <Col lg={3}><img height='120px' width='150px' src='https://picsum.photos/200/300'/></Col>
                        <Col lg={3}><img height='120px' width='150px' src='https://picsum.photos/200/300'/></Col>
                        <Col lg={3}><img height='120px' width='150px' src='https://picsum.photos/200/300'/></Col>
                    </Row>
                    <Row>
                        <Col lg={3}><img height='120px' width='150px' src='https://picsum.photos/200/300'/></Col>
                        <Col lg={3}><img height='120px' width='150px' src='https://picsum.photos/200/300'/></Col>
                        <Col lg={3}><img height='120px' width='150px' src='https://picsum.photos/200/300'/></Col>
                        <Col lg={3}><img height='120px' width='150px' src='https://picsum.photos/200/300'/></Col>
                    </Row>
            </Container>
        </Tab>
      </Tabs>
      </Fragment>
    )
}

export default OurWork;