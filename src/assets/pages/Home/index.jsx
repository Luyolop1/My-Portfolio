import React from 'react';
import '../Home/styles.css';
import Fade from 'react-reveal/Fade';



//Images
import azure from "../../Images/azure.jpg";

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
          <li><img src={azure} alt="" srcset="" /></li>
          <li><img src={azure} alt="" srcset="" /></li>
          <li><img src={azure} alt="" srcset="" /></li>
          <li><img src={azure} alt="" srcset="" /></li>
          <li><img src={azure} alt="" srcset="" /></li>
          <li><img src={azure} alt="" srcset="" /></li>
          
        </ul>
      </div>
      
      </div>
     </div>
   </section>
   
  )
  
};