import React from 'react';
import { capitalizeFirstLetter } from "../../utils/helpers";

const Nav = () => {
    const categories = [
        { name: 'products', description: "Products that I have worked on.",},
        { name: 'coding', description: "Languages and libraries I enjoy the most." },
        { name: 'resume', description: "My Resume" },
      ];
      
      function categorySelected(name) {
        console.log(`${name} clicked`)
    }

    return(
        <header>
           <h1>
               <a herf="/">Charles Lee Freeman III</a>
           </h1>
           <nav>
               <ul className='flex-row'>
                   <li className='mx-2'>
                       <a href="#about-me">About Me</a>
                   </li>
                   <li>
                       <span>Contact Me</span>
                   </li>
                   {categories.map((category) => (
                       <li className='mx-1' key={category.name}>
                           <span onClick={() => {categorySelected(category.name); }} >
                                {capitalizeFirstLetter(category.name)}
                            </span>
                       </li>
                   ))}
               </ul>
           </nav>  
        </header>
    );
}

export default Nav;