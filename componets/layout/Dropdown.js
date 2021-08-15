import Head from 'next/head';
function Dropdown() {
    return (
        <div>
        <Head>
                <meta charset="UTF-8"/>
                <meta name="viewport" content="width=device-width, inital-scale=1.0"/>
                <title>Pre Pro Industries LTD</title>
                <link rel="stylesheet" href="//netdna.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap.min.css"/>
                <link rel="stylesheet" href="css/global.css"/>
                <script src="http://code.jquery.com/jquery-2.1.1.min.js"></script>
                <script src="//netdna.bootstrapcdn.com/bootstrap/3.1.1/js/bootstrap.min.js"></script>
        </Head>
        <div class="dropdown">
            <button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">Dropdown Example
            <span class="caret"></span></button>
            <ul class="dropdown-menu">
                <li><a href="#">HTML</a></li>
                <li><a href="#">CSS</a></li>
                <li><a href="#">JavaScript</a></li>
            </ul>
        </div>
        </div>

    )
}

export default Dropdown;