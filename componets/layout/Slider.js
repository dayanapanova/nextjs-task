import { Carousel } from 'react-bootstrap';
function Slider() {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://www.hdnicewallpapers.com/Walls/Big/Dog/Dog_Running_on_Grass_Image.jpg" alt="New York"
                alt="First slide"
                />
                <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://www.hdnicewallpapers.com/Walls/Big/Dog/Dog_Running_on_Grass_Image.jpg" alt="New York"
                alt="Second slide"
                />

                <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://www.hdnicewallpapers.com/Walls/Big/Dog/Dog_Running_on_Grass_Image.jpg" alt="New York"
                alt="Third slide"
                />

                <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )           
}

export default Slider;