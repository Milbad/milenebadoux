import React from 'react';

export default function About () {
    return(

      <div className='container-content'>
        <div className='presentation'>
          <img className='profile-pict' alt='milene badoux' src='http://res.cloudinary.com/dmtewfk2q/image/upload/v1510085039/Milene_pict_c836jf.jpg' />
          <h2 className='presentation-text'>Hi, my name is Milene. I am a Front End Developer, living in Los Altos, CA</h2>
        </div>
        <div className='my-pict'></div>
        <div className='presentation-text'>
          <h2 >About</h2>
          <div className='my-text'>
            <p>I love to work with  HTML, CSS, JavaScript and React to create beautiful and functional web pages.</p>
            <p>When I am not coding, you may find me surfing, knitting, drinking coffee or reading a book.</p>
            <p>You can find out more about my current and past projects by exploring my portfolio. </p>
            </div>
        </div>
      </div>

    )
}
