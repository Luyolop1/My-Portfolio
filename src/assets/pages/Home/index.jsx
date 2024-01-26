import React from 'react';
import '../Home/styles.css';
import Fade from 'react-reveal/Fade';

//Images
import azure from "../../Images/azure.jpg";
import Csharp from "../../Images/csharp.png";
import Java from "../../Images/java.png";
import html from "../../Images/html.png";
import css from "../../Images/CSS.png";
import javascript from "../../images/js.png"
import Reactjs from "../../images/React js.jpg"
import Reactnative from "../../images/react-native.png"

export default function index  () {

  return (
    
   <section id="Home">
    <div className="Home">
     <div className="title">
     <Fade bottom><h1>Luyolo pondo</h1></Fade>
     <p>Software Developer</p>
     </div>
     <button className='Download-resume'>Download Resume</button>  
     <div className="skill">
     <p>My Skills</p>  
      
    <div className="skills-group">
        <ul>
         
         <li><img src={azure} alt="" srcset="" /></li>
          <li><img src={Java} alt="" srcset="" /></li>
          <li><img src={javascript} alt="" srcset="" /></li>
          <li><img src={css} alt="" srcset="" /></li>
          <li><img src={html} alt="" srcset="" /></li>
          <li><img src={Csharp} alt="" srcset="" /></li>
          <li><img src={Reactnative} alt="" srcset="" /></li>
          <li><img src={Reactjs} alt="" srcset="" /></li>
          
        </ul>
      </div>
      
      </div>
     </div>
   </section>
   
  )
  
};