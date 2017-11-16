import React from 'react';
import {Link} from 'react-router-dom';

export default function Nav () {

    return(
      <div className='header-nav'>
        <div className='home-icon'>
          <Link  to='/' >M.B.</Link>
        </div>
        <ul className='navigation'>
          <li>
            <Link  to='/' className='navigation-item'>About</Link>
          </li>
          <li>
            <Link  to='/portfolio' className='navigation-item'>Portfolio</Link>
          </li>
          <li>
            <Link  to='/contact' className='navigation-item'>Contact</Link>
          </li>
        </ul>
      </div>
    )
}
