import { Carousel, Image } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

function Slider() {
    const { t } = useTranslation();

    const SLIDES = [
        {
            title: t('firstSlide'),
            image: 'https://i.picsum.photos/id/121/1600/1067.jpg?hmac=QDrnlQAvC_54xDpx2afpzKMbjCZvnRljseYvkK8XPCQ',
            description: t("loremIpsum"),
        },
        {
            title: t('secondSlide'),
            image: 'https://i.picsum.photos/id/121/1600/1067.jpg?hmac=QDrnlQAvC_54xDpx2afpzKMbjCZvnRljseYvkK8XPCQ',
            description: t("loremIpsum"),
        },
        {
            title: t('thirdSlide'),
            image: 'https://i.picsum.photos/id/121/1600/1067.jpg?hmac=QDrnlQAvC_54xDpx2afpzKMbjCZvnRljseYvkK8XPCQ',
            description: t("loremIpsum"),
        },
    ];

    return (
        <section className="slider-section">
            <Carousel>
                {SLIDES.map(({ title, image, description }, index)=> (
                    <Carousel.Item key={`slide-${title}-${index}`}>
                        <Image
                            className='img-cover d-block w-100'
                            src={image}
                            alt={title}
                        />
                        <Carousel.Caption>
                            <h3>{title}</h3>
                            <p>{description}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))}
            </Carousel>
        </section>
    )
}

export default Slider;
