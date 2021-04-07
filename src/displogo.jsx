import React, { Component } from 'react';
import logo from './images/logo.png';
import './App.css'
const DispLogo=()=>{
    return ( 
    <div className='logo'>
        <img src={logo} alt=''/>
    </div>);
}
export default DispLogo;