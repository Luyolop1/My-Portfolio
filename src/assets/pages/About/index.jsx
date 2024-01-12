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
          <Fade bottom>  <h1>About</h1></Fade>
        </div>

        <div className="about-group">
          <Fade right>
           <div className="col-right">
                <h3>About me</h3>
                <p>Hello</p>
                <button style={{marginLeft: 60}}>Download Resume</button>
            </div>
         </Fade>

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