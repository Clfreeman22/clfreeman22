import React from 'react';
import { capitalizeFirstLetter } from "../../utils/helpers";

const Nav = (props) => {


    return(
        <header className='header'>
           <h1 className='fullname'>
               Charles Lee Freeman III
           </h1>
           <nav>
                <ul>
                    <li>
                        <a href='#about' onClick={() => props.setCurrentPage('About')}>About</a>
                    </li>
                    <li>
                        <a href='#contact' onClick={() => props.setCurrentPage('Contact')}>Contact Me</a>
                    </li>
                    <li>
                        <a href='#portfolio' onClick={() => props.setCurrentPage('Portfolio')}>Portfolio</a>
                    </li>
                    <li>
                        <a href='#resume' onClick={() => props.setCurrentPage('Resume')}>Resume</a>
                    </li>
                </ul>
           </nav>  
        </header>
    );
}

export default Nav;