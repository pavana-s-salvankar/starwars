import React, { Component } from 'react';
import footerLogo from './images/footer_logo.png';
import './App.css';
const DispFooter=()=>{
    return ( 
        <div className='footer'>
        <img src={footerLogo} alt=''/ >
        <p2>TERMS OF USE</p2>
        <p2>LEGAL NOTICES</p2>
        <p2>PRIVACY POLICY</p2>
        <p2>STAR WARS HELPDESK</p2>
        <p2>STAR WARS AI DISNEY STORE</p2>
    </div >
    );
}
export default DispFooter;