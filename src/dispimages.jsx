import React, { Component } from 'react';
import {Link } from "react-router-dom";
import logo from './images/logo.png';
import people from './images/people_normal.png';
import starship from './images/starship_normal.png';
import films from './images/films_normal.png';
import planets from './images/planets_normal.png';
import species from './images/species_normal.png';
import vehicles from './images/vehicles_normal.png';
import footerLogo from './images/footer_logo.png';
import DispImage from './dispimage.jsx';

import people1 from './images/people_pressed.png';
import starship1 from './images/starship_pressed.png';
import films1 from './images/films_pressed.png';
import planets1 from './images/planets_pressed.png';
import species1 from './images/species_pressed.png';
import vehicles1 from './images/vehicles_pressed.png';
import './App.css';
class DispImages extends Component {
    state = {
        imgNames: [
            {src:films,name:'FILMS',id:0,src2:films1},
            {src:species,name:'SPECIES',id:1,src2:species1},
            {src:planets,name:'PLANETS',id:2,src2:planets1},
            {src:people,name:'PEOPLE',id:3,src2:people1},
            {src:starship,name:'STARSHIP',id:4,src2:starship1},
            {src:vehicles,name:'VEHICLES',id:5,src2:vehicles1}],

            footerElements:[
            {to:'/termsofuse' ,name:'TERMS OF USE'},
            {to:'/legalnotices', name:'LEGAL NOTICES'},
            {to:'/privacypolicy' ,name:'PRIVACY POLICY'},
            {to:'/help',name:'STAR WARS HELPDESK'},
            {to:'/disneystore',name:'STAR WARS AI DISNEY STORE'}
        ]
    }
    handleChange=(id,name,src,src2)=>{
        let temp=src;
        let arr=[...this.state.imgNames];
        arr[id]={src:src2,name:name,id:id,src2:temp};
        this.setState({imgNames:arr});
    }
    render() {   
        
        const footer = this.state.footerElements.map(ele => {
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
       {this.state.imgNames.map((image)=>{ return (
       <DispImage id={image.id} 
       src={image.src} 
       src2={image.src2}
       name={image.name}
    handleChange={this.handleChange}/>)})};
       </ul>
       </div>
       <hr></hr>
       <div className='footer-elemenets'>
        <ul>
        <li className='footer-logo'>
                <img src={footerLogo} alt=''/>
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