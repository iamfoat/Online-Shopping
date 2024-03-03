import React from 'react'
import './all.css'

const Brand = () => {
  return (
    <div className='brand'>
    <div>
    <nav className='navi'>
        <ul class="menu_left">
            <li>              
                    <div class="logo">
                    <a href='/Home'><img src="https://i.ibb.co/zxVxxrR/logosketchuw.png" title="" alt="" width="124"></img></a>
                    </div>           
            </li>

                
            <li>
                <a href="/All">ALL PRODUCT</a>
            </li>


            <li>
                <a href="/Footwear">FOOTWEAR</a>
                
            </li>


            <li>
                <a href="/Bag">BAGS</a>
                <ul class="drop-menu">
    
                </ul>
            </li>


            <li>
                <a href="/access">ACCESSORIES</a>
            </li>


           

        </ul>
        


        <ul class="menu_right">
            <li>
                <a href="#">
                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/>
                <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
                </svg>

                </a>
            </li>
            <li>
                <a href="#">
                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/>
                <path d="M12 5.9c1.16 0 2.1.94 2.1 2.1s-.94 2.1-2.1 2.1S9.9 9.16 9.9 8s.94-2.1 2.1-2.1m0 9c2.97 0 6.1 1.46 6.1 2.1v1.1H5.9V17c0-.64 3.13-2.1 6.1-2.1M12 4C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 9c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z"/>
                </svg>
                      
                </a>
            </li>
            <li>
                <a href="#">
                <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 10V6a3 3 0 0 1 3-3v0a3 3 0 0 1 3 3v4m3-2 1 12c0 .5-.5 1-1 1H6a1 1 0 0 1-1-1L6 8h12Z"/>
                </svg>
                      
                </a>
            </li>

        </ul>

        
    </nav>
    <div>
        <div className='cover'>
        <div className='namebrand'>
        <h3 href="#">BRAND</h3>
        <a href="#">Adidas</a><br/>
        <a href="#">Converse</a><br/>
        <a href="#">Hoka</a><br/>
        <a href="#">Keds</a><br/>
        <a href="#">Mizuno</a><br/>
        <a href="#">New balance</a><br/>
        <a href="#">Lacoste</a><br/>
        <a href="#">Nike</a><br/>
        <a href="#">Puma</a><br/>
        <a href="#">Reebok</a><br/>
        <a href="#">Vans</a><br/>
        </div>
        </div>
    </div>
    </div>
    </div>

    
  )
}

export default Brand