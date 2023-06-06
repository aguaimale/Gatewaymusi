import React from 'react'
import flecha from '../assets/Group16.png'
import logo from '../assets/Group.png'
import servisClient from '../assets/servisClient.png'

const Navbar = () => {
  return (
    <div className='Navbar'>
        <div style={{padding:'12px'}}><img src={flecha} alt="" /></div>
        <div style={{padding:'12px'}}><img src={logo} alt="" /></div>
        <div style={{padding:'12px'}}><img src={servisClient} alt="" /></div>
    </div>
  )
}

export default Navbar