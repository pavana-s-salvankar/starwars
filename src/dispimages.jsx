import React, { Component } from 'react';
import {Link, } from "react-router-dom";
import logo from './images/logo.png';
import people from './images/people_normal.png';
import starship from './images/starship_normal.png';
import films from './images/films_normal.png';
import planets from './images/planets_normal.png';
import species from './images/species_normal.png';
import vehicles from './images/vehicles_normal.png';
import footerLogo from './images/footer_logo.png';
import './App.css';
class DispImages extends Component {
    state = {}
    render() { 
        const imgNames= [
            {src:films,name:'FILMS'},
            {src:species,name:'SPECIES'},
            {src:planets,name:'PLANETS'},
            {src:people,name:'PEOPLE'},
            {src:starship,name:'STARSHIP'},
            {src:vehicles,name:'VEHICLES'}];

            const footerElements=[
            {to:'/termsofuse' ,name:'TERMS OF USE'},
            {to:'/legalnotices', name:'LEGAL NOTICES'},
            {to:'/privacypolicy' ,name:'PRIVACY POLICY'},
            {to:'/help',name:'STAR WARS HELPDESK'},
            {to:'/disneystore',name:'STAR WARS AI DISNEY STORE'}
        ]
        const images = imgNames.map(image => {
            return (
                     <li className='image'>
                     <Link to ={`/${image.name.toLowerCase()}`}>
                           <img key={image} src={image.src} />
                           <div className='name'>{image.name}</div>
                      </Link>
                      </li>
                      );
            }
        );
        const footer = footerElements.map(ele => {
            return (
                <li className='footer-element'>
                <Link to ={ele.to}>
                    <div className='footer-name'>{ele.name}</div>
                 </Link>
            </li>
                      );
            }
        );
        return ( 
            <div >
                      <div className='logo'>
                      <img src={logo} alt=''/>
            </div>
             <hr></hr>
        <div className='images'>
        <ul>
            {images}
       </ul>
       </div>
       <hr></hr>
       <div className='footer-elemenets'>
        <ul>
        <li className='footer-logo'>
                <img src={footerLogo} alt=''/ >
                </li>
            {footer}
       </ul>
       </div>
       <div >
        <p3>TM &copy; Lucasfilm Ltd. All Rights Reserved</p3>
       </div> )
    </div>);
    }
}
export default DispImages;