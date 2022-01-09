import React from 'react';

const Nav = () => {
    return(
        <header>
           <h1>
               <a herf="/">Charles Lee Freeman III</a>
           </h1>
           <nav>
               <ul>
                   <li>
                       <a href="#about-me">About Me</a>
                   </li>
                   <li>
                       <a href="#my-projects">Projects</a>
                   </li>
                   <li>
                       <a href="#contact-me">Contact Me</a>
                   </li>
                   <li>
                      <a href="./resume.html">Resume</a> 
                   </li>
               </ul>
           </nav>  
        </header>
    );
}

export default Nav;