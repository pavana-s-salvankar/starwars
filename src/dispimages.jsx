/*import React, { Component } from 'react';
import {
    Link,
  } from "react-router-dom";
import logo from './images/logo.png';
import characters from './images/characters_normal.png';
import droids from './images/droids_normal.png';
import films from './images/films_normal.png';
import planets from './images/planets_normal.png';
import species from './images/species_normal.png';
import vehicles from './images/vehicles_normal.png';
import footerLogo from './images/footer_logo.png';
import './App.css';
class  DispImages extends Component
 {
    state = {  }
    render() { 
        return (  <div >
            <div className='logo'>
                  <img src={logo} alt=''/>
            </div>
            <hr></hr>
        <div className='images'>
            <ul>
                <li >
                    <Link to ='/films'>
                        <img src={films} alt=''/>
                        <div className='image-name'>FILMS</div>
                    </Link>
                </li>
                <li>
                    <Link to ='/species'>
                        <img src={species} alt=''/>
                        <div className='image-name'>SPECIES</div>
                     </Link>
                </li>
                <li>
                   <Link to ='/planets'>
                      <img src={planets} alt=''/>
                      <div className='image-name'>PLANETS</div>
                 </Link>
                 </li>
           </ul>
        </div>



        <div className='images'>
            <ul>
                <li>
                    <Link to ='/people'>
                        <img src={characters} alt=''/>
                        <div className='image-name'>PEOPLE</div>
                    </Link>
                </li>
                <li>
                    <Link to ='/starship'>
                        <img src={droids} alt=''/>
                        <div className='image-name'>STARSHIP</div>
                    </Link>
                </li>
                <li>
                   <Link to ='/vehicles'>
                      <img src={vehicles} alt=''/>
                      <div className='image-name'>VEHICLES</div>
                 </Link>
                 </li>
           </ul>
        </div>
        <hr></hr>

        <div className='footer'>
            <ul>
                <li>
                <img src={footerLogo} alt=''/ >
                </li>
                <li className='footer-element'>
                    <Link to ='/termsofuse'>
                        <div className='image-name'>TERMS OF USE</div>
                    </Link>
                </li >
                <li className='footer-element'>
                    <Link to ='/legalnotices'>
                        <div className='image-name'>LEGAL NOTICES</div>
                     </Link>
                </li>
                <li className='footer-element'>
                   <Link to ='/privacypolicy'>
                      <div className='image-name'>PRIVACY POLICY</div>
                   </Link>
                 </li >
                 <li className='footer-element'>
                    <Link to ='/help'>
                        <div className='image-name'>STAR WARS HELPDESK</div>
                     </Link>
                </li>
                <li className='footer-element'>
                    <Link to ='/disneystore'>
                        <div className='image-name'>STAR WARS AI DISNEY STORE</div>
                     </Link>
                </li>
           </ul>
        </div >
        <p3>TM &copy; Lucasfilm Ltd. All Rights Reserved</p3>
       </div> );
    }
    }
export default DispImages;
*/
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
                     <li className='image' >
                      <Link to ={`/${image.name.toLowerCase()}`}>
                      <img key={image} src={image.src} />
                          <div className='image-name'>{image.name}</div>
                      </Link>
                      </li>
                      );
            }
        );
        const footer = footerElements.map(ele => {
            return (
                <li className='footer-element'>
                <Link to ={ele.to}>
                    <div className='image-name'>{ele.name}</div>
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
       <hr></hr>
       </div>
       <div className='footer-elemenets'>
        <ul>
        <li>
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