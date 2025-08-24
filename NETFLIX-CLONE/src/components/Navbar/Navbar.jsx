import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import search_icom from '../../assets/search_icon.svg'
import bell_icom from '../../assets/bell_icon.svg'
import profile_img from '../../assets/profile_img.png'
import caret_icon from '../../assets/caret_icon.svg'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="navbar-left">
        <img className='logo' src={logo} alt="netflix-logo" />
        <ul>
          <li>Home</li>
          <li>Tv Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My LIst</li>
          <li>Browse by Languages</li>
        </ul>
      </div>
      <div className="navber-right">
        <img src={search_icom} alt="" className='icons' />
        <p>Children</p>
        <img src={bell_icom} alt="" className='icons' />
        <div className="navber-profile">
          <img src={profile_img} alt="" className='profile' />
          <img src={caret_icon} alt=""/>
        </div>
      </div>
    </div>
  )
}

export default Navbar
