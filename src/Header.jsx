import React from 'react';
import logo from "./Imagess/logo.png"

const Header = () => {
  return (
    <div className='header'>
    <img src={logo} slt="logo" width="70" height="50"/>
    <h1>Mickey Keep</h1>
    </div>
  )
}

export default Header
