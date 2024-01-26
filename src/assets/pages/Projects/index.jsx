import React from 'react';
import './styles.css';
import 'react-slideshow-image/dist/styles.css';



export default function index() {
  return (
    <section id='Projects'>
        <div className="title">
            <h1>Projects</h1>
        </div>
     <div className="projects">
       <div className="slider-container">
      
        <div className="card-group">
   
   

            <div className="card-wrapper">
                <div className="card">
                    <div className="image-content">
                        <span className='overlay'></span>

                        <div className="card-image">
                            <img src="" alt="" srcset="" />
                        </div>

                        <div className="card-content">
                            <h2 className='name'>Eclipsus</h2>
                            <p className='description'>This is a Emergency services project </p>
                        </div>
                       <button className='Vmore-btn'>View more</button>
                    </div>
                </div>
             </div>

             <div className="card-wrapper">
                <div className="card">
                    <div className="image-content">
                        <span className='overlay'></span>

                        <div className="card-image">
                            <img src="" alt="" srcset="" />
                        </div>

                        <div className="card-content">
                            <h2 className='name'>Eclipsus</h2>
                            <p className='description'>This is a Emergency services project </p>
                        </div>
                       <button className='Vmore-btn'>View more</button>
                    </div>
                </div>
             </div>



             <div className="card-wrapper">
                <div className="card">
                    <div className="image-content">
                        <span className='overlay'></span>

                        <div className="card-image">
                            <img src="" alt="" srcset="" />
                        </div>

                        <div className="card-content">
                            <h2 className='name'>Eclipsus</h2>
                            <p className='description'>This is a Emergency services project </p>
                        </div>
                       <button className='Vmore-btn'>View more</button>
                    </div>
                </div>
             </div>
                

      

          
          </div>
        </div>
       </div>
    </section>
  )
}