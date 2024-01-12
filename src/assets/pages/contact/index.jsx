
import React from 'react';
import "./styles.css";


export default function index() {
  return (
     <section id="contact">

        <div className="contact-form">
            
            <form action=""> 
                <div className="row">
                    <div className="input-group">
                        <input type="text" id='name' required />
                        <label for="name"><i class="fa-solid fa-user"></i> Name</label>
                    </div>
                    <div className="input-group">
                        <input type="text" id='phone' required/>
                        <label for="name"><i class="fa-solid fa-phone"></i> Phone No.</label>
                    </div>
                </div>

                 <div className="input-group">
                    <input type="text" id='email' required />
                    <label for="email"><i class="fa-solid fa-envelope"></i>  Email id</label>
                </div>
                <div className="input-group">
                    <textarea  type="message" rows={8} id='name' required />
                    <label for="message"><i class="fa-regular fa-message"></i> Your Message</label>
                </div>

                <button className='submit' type='submit'><i class="fa-regular fa-paper-plane"></i>  SUBMIT</button>
            </form>
        </div>
     </section>
  )
}