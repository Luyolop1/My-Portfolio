import React from 'react';
import "./styles.css";
import Fade from 'react-reveal/Fade';

//Images
import Pic from "../../images/Luyolo Pondo pro.png";

export default function index() {
  return (
    <section id="About">
       
        <div className="about">
       
        <div className="about-title">
           <h1>About</h1>
        </div>

        <div className="about-group">
         
           <div className="col-right">
                <h3>About me</h3>
                <p>I'm Sofware Developer with Expertise in Web Development and Mobile Development
              Clean Quality Code, Expertise in React, React Native, Android Studio <br></br><br></br> 
              Serial innovator Entrepreneurship development using Design thinking. 
              Able to work Solo/Team & under pressure, learn during progress and adapter quickly.
              <br></br><br></br> culture wise I fit every style😄 ☝️community upliftment is my next child .</p>
                <button  className="Download-btn">Download Resume</button>
            </div>
      

          <Fade left>
            <div className="col-left">
                <img src={Pic} alt="" srcset="" />
            </div>
        </Fade>
        </div>
       
        </div>
    </section>
  )
}