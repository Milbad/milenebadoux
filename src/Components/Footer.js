import React from 'react';
var FontAwesome = require('react-fontawesome');

export default function Footer () {

    return(
      <div className='footer'>
        <a href='https://github.com/Milbad'  target='_blank' rel='noopener noreferrer' >
          <FontAwesome
          className='social-icon'
          name='github'
          size='2x'
          />
        </a>
        <a href='https://www.linkedin.com/in/milenebadoux/' target='_blank' rel='noopener noreferrer'>
          <FontAwesome
          className='social-icon'
          name='linkedin'
          size='2x'
          />
        </a>
        <a href='https://codepen.io/MilBad/' target='_blank' rel='noopener noreferrer'>
          <FontAwesome
          className='social-icon'
          name='codepen'
          size='2x'
          />
        </a>
      </div>
    )
    
}
