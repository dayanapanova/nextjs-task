
import Head from 'next/head';
import { useState, useEffect } from 'react';
function OurWork() {
    const data = [
        { id: 1, text: 'something' },
        { id: 2, text: 'something' },
        { id: 3, text: 'something' },
        { id: 4, text: 'something' },
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
            <h2>OUR WORK</h2>
            <div className='container'>
                <ul className='nav nav-pills nav-justified'>
                    <li className='active'><a href='#Project1' data-toggle='tab'>Project 1</a></li>
                    <li><a href='#Project2' data-toggle='tab'>Project 2</a></li>
                    <li><a href='#Project3' data-toggle='tab'>Project 3</a></li>
                </ul>
                <div className='tab-content'>
                <div className='tab-pane fade in active' id='Project1'>
                   <div className='product-holder'>
                       <div className='product-holder-row'>
                           <div className='product-holder-single'>
                           <img src="https://www.hdnicewallpapers.com/Walls/Big/Dog/Dog_Running_on_Grass_Image.jpg" alt="Chania"/>
                           </div>
                           <div className='product-holder-single'>
                           <img src="https://www.hdnicewallpapers.com/Walls/Big/Dog/Dog_Running_on_Grass_Image.jpg" alt="Chania"/>
                           </div>
                           <div className='product-holder-single'>
                           <img src="https://www.hdnicewallpapers.com/Walls/Big/Dog/Dog_Running_on_Grass_Image.jpg" alt="Chania"/>
                           </div>
                           <div className='product-holder-single'>
                           <img src="https://www.hdnicewallpapers.com/Walls/Big/Dog/Dog_Running_on_Grass_Image.jpg" alt="Chania"/>
                           </div>
                       </div>
                       <div className='product-holder-row'>
                           <div className='product-holder-single'>
                           <img src="https://www.hdnicewallpapers.com/Walls/Big/Dog/Dog_Running_on_Grass_Image.jpg" alt="Chania"/>
                           </div>
                           <div className='product-holder-single'>
                           <img src="https://www.hdnicewallpapers.com/Walls/Big/Dog/Dog_Running_on_Grass_Image.jpg" alt="Chania"/>
                           </div>
                           <div className='product-holder-single'>
                           <img src="https://www.hdnicewallpapers.com/Walls/Big/Dog/Dog_Running_on_Grass_Image.jpg" alt="Chania"/>
                           </div>
                           <div className='product-holder-single'>
                           <img src="https://www.hdnicewallpapers.com/Walls/Big/Dog/Dog_Running_on_Grass_Image.jpg" alt="Chania"/>
                           </div>
                       </div>
                   </div>
                </div> 
                <div className='tab-pane fade in active' id='Project2'>  
                <div className='product-holder'>
                       <div className='product-holder-row'>
                           <div className='product-holder-single'>
                           <img src="https://www.hdnicewallpapers.com/Walls/Big/Dog/Dog_Running_on_Grass_Image.jpg" alt="Chania"/>
                           </div>
                           <div className='product-holder-single'>
                           <img src="https://www.hdnicewallpapers.com/Walls/Big/Dog/Dog_Running_on_Grass_Image.jpg" alt="Chania"/>
                           </div>
                           <div className='product-holder-single'>
                           <img src="https://www.hdnicewallpapers.com/Walls/Big/Dog/Dog_Running_on_Grass_Image.jpg" alt="Chania"/>
                           </div>
                           <div className='product-holder-single'>
                           <img src="https://www.hdnicewallpapers.com/Walls/Big/Dog/Dog_Running_on_Grass_Image.jpg" alt="Chania"/>
                           </div>
                       </div>
                       <div className='product-holder-row'>
                           <div className='product-holder-single'>
                           <img src="https://www.hdnicewallpapers.com/Walls/Big/Dog/Dog_Running_on_Grass_Image.jpg" alt="Chania"/>
                           </div>
                           <div className='product-holder-single'>
                           <img src="https://www.hdnicewallpapers.com/Walls/Big/Dog/Dog_Running_on_Grass_Image.jpg" alt="Chania"/>
                           </div>
                           <div className='product-holder-single'>
                           <img src="https://www.hdnicewallpapers.com/Walls/Big/Dog/Dog_Running_on_Grass_Image.jpg" alt="Chania"/>
                           </div>
                           <div className='product-holder-single'>
                           <img src="https://www.hdnicewallpapers.com/Walls/Big/Dog/Dog_Running_on_Grass_Image.jpg" alt="Chania"/>
                           </div>
                       </div>
                   </div> 
                </div>
                <div className='tab-pane fade in active' id='Project3'>
                <div className='product-holder'>
                       <div className='product-holder-row'>
                           <div className='product-holder-single'>
                           <img src="https://www.hdnicewallpapers.com/Walls/Big/Dog/Dog_Running_on_Grass_Image.jpg" alt="Chania"/>
                           </div>
                           <div className='product-holder-single'>
                           <img src="https://www.hdnicewallpapers.com/Walls/Big/Dog/Dog_Running_on_Grass_Image.jpg" alt="Chania"/>
                           </div>
                           <div className='product-holder-single'>
                           <img src="https://www.hdnicewallpapers.com/Walls/Big/Dog/Dog_Running_on_Grass_Image.jpg" alt="Chania"/>
                           </div>
                           <div className='product-holder-single'>
                           <img src="https://www.hdnicewallpapers.com/Walls/Big/Dog/Dog_Running_on_Grass_Image.jpg" alt="Chania"/>
                           </div>
                       </div>
                       <div className='product-holder-row'>
                           <div className='product-holder-single'>
                           <img src="https://www.hdnicewallpapers.com/Walls/Big/Dog/Dog_Running_on_Grass_Image.jpg" alt="Chania"/>
                           </div>
                           <div className='product-holder-single'>
                           <img src="https://www.hdnicewallpapers.com/Walls/Big/Dog/Dog_Running_on_Grass_Image.jpg" alt="Chania"/>
                           </div>
                           <div className='product-holder-single'>
                           <img src="https://www.hdnicewallpapers.com/Walls/Big/Dog/Dog_Running_on_Grass_Image.jpg" alt="Chania"/>
                           </div>
                           <div className='product-holder-single'>
                           <img src="https://www.hdnicewallpapers.com/Walls/Big/Dog/Dog_Running_on_Grass_Image.jpg" alt="Chania"/>
                           </div>
                       </div>
                   </div>
                </div>
                </div>
       </div>
    </div> 
         
    )
}

export default OurWork;