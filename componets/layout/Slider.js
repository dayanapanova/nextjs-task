import Head from 'next/head';
function Slider() {
    const dataSlider = [
        { id: 1, text: 'cover1' },
        { id: 2, text: 'cover2' },
      ]
    return(
        <div className='container'>
                <Head>
                <meta charset="UTF-8"/>
                <meta name="viewport" content="width=device-width, inital-scale=1.0"/>
                <title>Pre Pro Industries LTD</title>
                <link rel="stylesheet" href="//netdna.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap.min.css"/>
                <link rel="stylesheet" href="css/global.css"/>
                <script src="http://code.jquery.com/jquery-2.1.1.min.js"></script>
                <script src="//netdna.bootstrapcdn.com/bootstrap/3.1.1/js/bootstrap.min.js"></script>
                </Head>
            <div id="myCarousel" class="carousel slide" data-ride="carousel">
  
                    <ol class="carousel-indicators">
                        <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                        <li data-target="#myCarousel" data-slide-to="1"></li>
                        <li data-target="#myCarousel" data-slide-to="2"></li>
                    </ol>
                            <div class="carousel-inner">
                                    <div class="item active">
                                    <img src="https://www.hdnicewallpapers.com/Walls/Big/Dog/Dog_Running_on_Grass_Image.jpg" alt="Chania"/>
                                    <div class="carousel-caption">
                                        <h3>Los Angeles</h3>
                                        <p>LA is always so much fun!</p>
                                    </div>
                                    </div>

                                    <div class="item">
                                    <img src="https://www.hdnicewallpapers.com/Walls/Big/Dog/Dog_Running_on_Grass_Image.jpg" alt="Chicago"/>
                                    <div class="carousel-caption">
                                        <h3>Chicago</h3>
                                        <p>Thank you, Chicago!</p>
                                    </div>
                                    </div>

                                    <div class="item">
                                        <img src="https://www.hdnicewallpapers.com/Walls/Big/Dog/Dog_Running_on_Grass_Image.jpg" alt="New York"/>
                                        <div class="carousel-caption">
                                            <h3>New York</h3>
                                            <p>We love the Big Apple!</p>
                                    </div>
                                    </div>
                    </div>
            </div>
        </div>
    )
}

export default Slider;