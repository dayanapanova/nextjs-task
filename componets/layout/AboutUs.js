
import Head from 'next/head';
function AboutUs() {
    return(
        <div>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"/>
                <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
                <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
            </Head>
            <div className='about-us-holder'>
                <div className='about-us-single'>
                    <img src="https://media.mercola.com/ImageServer/Public/2018/October/FB/dog-breeds-for-active-people-fb.jpg" class="img-circle" alt="Cinque Terre" width="100" height="80"/>
                    <p>Lorem ipsum dolor et</p>
                    <p>Lorem ipsum dolor et</p>
                    <p>Lorem ipsum dolor et</p>
                    <p>Lorem ipsum dolor et</p>
                    <p>Lorem ipsum dolor et</p>
                    <p>Lorem ipsum dolor et</p>
                    <p>Lorem ipsum dolor et</p>
                </div>
                <div className='about-us-single'>
                    Some text
                </div>
            </div>
        </div>
    )
}


export default AboutUs;