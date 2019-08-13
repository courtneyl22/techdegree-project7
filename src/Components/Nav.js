import React from 'react';
import {Link} from 'react-router-dom';

const Nav = () => ( 
  <nav>
    <ul>
      <li><Link to="/beach">Beach</Link></li>
      <li><Link to="/food">Food</Link></li>
      <li><Link to="/money">Money</Link></li>
    </ul>
  </nav>
)

export default Nav;