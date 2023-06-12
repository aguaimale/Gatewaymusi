import React from 'react'
import flecha from '../assets/Group16.png'
import logo from '../assets/Group.png'
import servisClient from '../assets/servisClient.png'


const Navbar = (props) => {
  
 
  
  return (
    <div className='Navbar'>
        <div className='navArrowBack' style={{padding:'12px'}}><img src={flecha} alt="" onClick={()=>props.handleTabClick( props.activeTab - 1)}/></div>
        <div style={{padding:'12px'}}><img src={logo} alt="" /></div>
        <div style={{padding:'12px'}}><img src={servisClient} alt="" /></div>
    </div>
  )
}

export default Navbar