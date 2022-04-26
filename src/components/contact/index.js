import React from 'react';
import github from '../../utils/images/github-logo.png';
import linkedin from '../../utils/images/li-logo.png';
import './style.css';

const Contact = () => {
  return(
    <section>
      <div>
        <p className='contactinfo'>Phone: 615-967-5004</p>
      </div>
      <div>
        <p className='contactinfo'>Email: Clfreeman22@gmail.com</p>
      </div>
      <div>
        <div>
          <a href="https://www.linkedin.com/in/clfreeman22/" target='_blank' rel="noreferrer" >
            <img src = {linkedin} alt='' className='linkedinlogo'></img>
          </a>
        </div>
        <div className='git'>
          <a href="https://github.com/Clfreeman22/" target='_blank' rel="noreferrer" >
            <img src = {github} alt='' className='gitimg'></img>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;

