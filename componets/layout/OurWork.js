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
                        <Col lg={3}><img height='120px' width='150px' src="https://picsum.photos/200/300?random=1"/></Col>
                        <Col lg={3}><img height='120px' width='150px' src="https://picsum.photos/200/300?random=2"/></Col>
                        <Col lg={3}><img height='120px' width='150px' src="https://picsum.photos/200/300?random=3"/></Col>
                        <Col lg={3}><img height='120px' width='150px' src="https://picsum.photos/200/300?random=4"/></Col>
                    </Row>
                    <Row>
                        <Col lg={3}><img height='120px' width='150px' src="https://picsum.photos/200/300?random=5"/></Col>
                        <Col lg={3}><img height='120px' width='150px' src="https://picsum.photos/200/300?random=6"/></Col>
                        <Col lg={3}><img height='120px' width='150px' src="https://picsum.photos/200/300?random=7"/></Col>
                        <Col lg={3}><img height='120px' width='150px' src="https://picsum.photos/200/300?random=8"/></Col>
                    </Row>
            </Container>
        </Tab>
        <Tab eventKey="profile" title="Project 2">
        <Container fluid>
                    <Row>
                        <Col lg={3}><img height='120px' width='150px' src="https://picsum.photos/200/300?random=9"/></Col>
                        <Col lg={3}><img height='120px' width='150px' src="https://picsum.photos/200/300?random=10"/></Col>
                        <Col lg={3}><img height='120px' width='150px' src="https://picsum.photos/200/300?random=11"/></Col>
                        <Col lg={3}><img height='120px' width='150px' src="https://picsum.photos/200/300?random=12"/></Col>
                    </Row>
                    <Row>
                        <Col lg={3}><img height='120px' width='150px' src="https://picsum.photos/200/300?random=13"/></Col>
                        <Col lg={3}><img height='120px' width='150px' src="https://picsum.photos/200/300?random=14"/></Col>
                        <Col lg={3}><img height='120px' width='150px' src="https://picsum.photos/200/300?random=15"/></Col>
                        <Col lg={3}><img height='120px' width='150px' src="https://picsum.photos/200/300?random=16"/></Col>
                    </Row>
            </Container>
        </Tab>
        <Tab eventKey="contact" title="Project 3">
        <Container fluid>
                    <Row>
                        <Col lg={3}><img height='120px' width='150px' src="https://picsum.photos/200/300?random=17"/></Col>
                        <Col lg={3}><img height='120px' width='150px' src="https://picsum.photos/200/300?random=18"/></Col>
                        <Col lg={3}><img height='120px' width='150px' src="https://picsum.photos/200/300?random=19"/></Col>
                        <Col lg={3}><img height='120px' width='150px' src="https://picsum.photos/200/300?random=20"/></Col>
                    </Row>
                    <Row>
                        <Col lg={3}><img height='120px' width='150px' src="https://picsum.photos/200/300?random=21"/></Col>
                        <Col lg={3}><img height='120px' width='150px' src="https://picsum.photos/200/300?random=22"/></Col>
                        <Col lg={3}><img height='120px' width='150px' src="https://picsum.photos/200/300?random=23"/></Col>
                        <Col lg={3}><img height='120px' width='150px' src="https://picsum.photos/200/300?random=2"/></Col>
                    </Row>
            </Container>
        </Tab>
      </Tabs>
      </Fragment>
    )
}

export default OurWork;