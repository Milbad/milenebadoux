import React from 'react';

export default function Contact () {
    return(

      <div className='container-content-contact'>
        <h2>Contact</h2>
        <div className='contact'>
          <form  action='https://formspree.io/badouxmilene@gmail.com'  className='contact-form' method="POST">
              <label htmlFor="name">Name</label>
              <input name= 'name'  id='name' type='name' className='contact-input'/>
              <label htmlFor="email">Email</label>
              <input name='email' id='email' type='email' className='contact-input'/>
              <label htmlFor="message">Message</label>
              <textarea name='message' id='message' rows="5" className='contact-textarea'></textarea>
              <div className='btn'>
                <button type="submit" className="btn">Send</button>
              </div>
          </form>
          <div className="contact-text">
            <p>Want to request more info about myself or my experience, to ask for my resume... just feel free to drop me a line anytime.</p>
            <p> I promise to reply A.S.A.P.</p>
          </div>
        </div>
      </div>

    )
}
