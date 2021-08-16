import Head from 'next/head';
function NavImage() {
    return (
        <div>
        <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"/>
            <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
            <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
        </Head>
        <div class="container">
            <h2>Image</h2>
            <p>The .img-circle class shapes the image to a circle (not available in IE8):</p>            
            <img src="https://www.hdnicewallpapers.com/Walls/Big/Dog/Dog_Running_on_Grass_Image.jpg" class="img-circle" alt="Cinque Terre" width="304" height="236"/> 
            </div>
        </div>
    )
}

export default NavImage;