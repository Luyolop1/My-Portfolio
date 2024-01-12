import React from 'react';
import './styles.css';
import Logo from '../../images/LP_Logo.png';
import Fade from 'react-reveal/Fade';

export default function index() {
  return (
<section id='header'>
    <div className="header">
      <nav>
      <Fade Left>
        <div className="logo-icon"> <img src={Logo} alt="" srcset=""  class="Logo"/></div>
        </Fade> 
        <div className="links">
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#About">About</a></li>
            <li><a href="#Projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
            
          </ul>
        </div>
      </nav>
    </div>
    </section>
     
   
  )
}