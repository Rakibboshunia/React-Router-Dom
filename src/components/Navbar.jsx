import React from 'react'
import logo from '../assets/img/logo5.png'
import {Link} from 'react-router-dom'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
      <img src={logo} alt="" width="130px" />
      <ul>
        <NavLink to='/'><li>Home</li></NavLink>
        <NavLink to='/product'><li>Products</li></NavLink>
        <NavLink to='/about'><li>About</li></NavLink>
        <NavLink to='/contact'><li>Contact</li></NavLink>
      </ul>
      <button>Get Started</button>
    </div>
  )
}

export default Navbar
