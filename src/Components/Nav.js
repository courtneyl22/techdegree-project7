import React from 'react';
import {
  BrowserRouter,
  NavLink
} from 'react-router-dom';

const Nav = (props) => {
  return (
    <BrowserRouter>
      <nav>
      <ul>
          <li><NavLink to="/beach" onClick={(event) => {
            props.performSearch("beach")
          }}>Beach</NavLink></li>

          <li><NavLink to="/food" onClick={(event) => {
            props.performSearch("food")
          }}>Food</NavLink></li>

          <li><NavLink to="/money" onClick={(event) => {
            props.performSearch("money")
          }}>Money</NavLink></li>
      </ul>
      </nav>
    </BrowserRouter>
  )
} 

export default Nav;