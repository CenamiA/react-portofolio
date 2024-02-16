import React from 'react'
import './navbar.css'
import imagelogo from '../../assets/imagelogo.jpg'


export const Navbar = () => {
  return (
   <nav className="navbar">
    <img src = {imagelogo} alt='logo' />
    <div className='menu'>
    </div>

    <button className ="menuButton">
<img src="" alt="" className="menuButton" />
contact me
    </button>

   </nav>

  )
}

export default Navbar;