import { Tabs, Tab } from 'react-bootstrap';
import { Container, Row, Col } from 'react-bootstrap';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
function OurWork() {
    const { t } = useTranslation();
    const PROJECTS = [
        {
            title: t('project1'),
            images: [
                'https://picsum.photos/200/300?random=1',
                'https://picsum.photos/200/300?random=2',
                'https://picsum.photos/200/300?random=3',
                'https://picsum.photos/200/300?random=4',
            ]
        },
        {
            title: t('project2'),
            images: [
                'https://picsum.photos/200/300?random=5',
                'https://picsum.photos/200/300?random=6',
                'https://picsum.photos/200/300?random=7',
                'https://picsum.photos/200/300?random=8',
            ]
        },
        {
            title: t('project3'),
            images: [
                'https://picsum.photos/200/300?random=9',
                'https://picsum.photos/200/300?random=10',
                'https://picsum.photos/200/300?random=11',
                'https://picsum.photos/200/300?random=12',
            ]
        },
    ];
    return (
        <Container>
            <h2 className='title' id='work'>{t('work')}</h2>
            <Tabs defaultActiveKey="our-work-item-0" className="mb-3">
                {PROJECTS.map(({ title, images }, projectIndex)=> (
                    <Tab
                        key={`our-work-item-${title}-${projectIndex}`}
                        eventKey={`our-work-item-${projectIndex}`}
                        title={title}
                    >
                            <Row>
                                {images.map((imageURL, imageIndex)=> (
                                    <Col key={`project-image-${title}-${imageIndex}`} xs={12} sm={6} md={3}>
                                        <Image
                                            width='120'
                                            height='150'
                                            loader={() => imageURL}
                                            src={imageURL}
                                            alt={title}
                                        />
                                    </Col>
                                ))}
                            </Row>
                    </Tab>
                ))}
            </Tabs>
        </Container>
    )
}

export default OurWork;