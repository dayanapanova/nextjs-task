
import Head from 'next/head';
import { useState, useEffect } from 'react';
function OurWork() {
    const data = [
        { id: 1, text: 'something' },
        { id: 2, text: 'something cool' },
        { id: 3, text: 'and another one' },
        { id: 4, text: 'and another cool one'},
        { id: 5, text: 'and another cool pic'},
        { id: 6, text: 'and another cool picture'},
        { id: 7, text: 'and another cool cool picture'},
        { id: 8, text: 'and another cool cool cool picture'}
      ]
      
    return(
    <div>
            <Head>
            <meta charset="utf-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous"/>
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css" integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossorigin="anonymous"/>
            <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
            </Head> 
            <div className='container'>
                <ul className='nav nav-pills nav-justified'>
                    <li className='active'><a href='#Project1' data-toggle='tab'>Project 1</a></li>
                    <li><a href='#Project2' data-toggle='tab'>Project 2</a></li>
                    <li><a href='#Project3' data-toggle='tab'>Project 3</a></li>
                </ul>
                <div className='tab-content'>
                    <div className='tab-pane fade in active' id='Project1'>
                        <p>First Para hi there</p>
                    </div>
                    <div className='tab-pane fade' id='Project2'>
                        <p>Second Para hi there</p>
                    </div>
                    <div className='tab-pane fade' id='Project3'>
                        <p>Third Para hi there</p>
                    </div>
                </div>
            </div> 
    </div>       
    )
}

export default OurWork;