import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = (props) => {
  return (
    <nav className="main-nav">
    <ul>
      <li><NavLink to="/home" onClick={() => {
        props.performSearch("poodle")
      }}>Home</NavLink></li>

      <li><NavLink to="/beach" onClick={() => {
        props.performSearch("beach")
      }}> Beach </NavLink></li>

      <li><NavLink to="/food" onClick={() => {
        props.performSearch("food")
      }} > Food </NavLink></li>
      
      <li><NavLink to="/money" onClick={() => {
        props.performSearch("money")
      }}> Money </NavLink></li>
    </ul>
    </nav>
  )
} 

export default Nav;