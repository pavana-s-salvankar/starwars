import React, { Component } from 'react';
import {Link } from "react-router-dom";
import logo from './images/logo.png';
import people from './images/people_normal.png';
import starship from './images/starship_normal.png';
import films from './images/films_normal.png';
import planets from './images/planets_normal.png';
import species from './images/species_normal.png';
import vehicles from './images/vehicles_normal.png';
import DispImage from './dispimage.jsx';

import people1 from './images/people_pressed.png';
import starship1 from './images/starship_pressed.png';
import films1 from './images/films_pressed.png';
import planets1 from './images/planets_pressed.png';
import species1 from './images/species_pressed.png';
import vehicles1 from './images/vehicles_pressed.png';
import './App.css';
import Footer from './AllLinks/Footer/footer';
class DispImages extends Component {
    state = {
        imgNames: [
            {src:films,name:'FILMS',id:0,src2:films1},
            {src:species,name:'SPECIES',id:1,src2:species1},
            {src:planets,name:'PLANETS',id:2,src2:planets1},
            {src:people,name:'PEOPLE',id:3,src2:people1},
            {src:starship,name:'STARSHIP',id:4,src2:starship1},
            {src:vehicles,name:'VEHICLES',id:5,src2:vehicles1}]
    }
    handleChange=(id,name,src,src2)=>{
        let temp=src;
        let arr=[...this.state.imgNames];
        arr[id]={src:src2,name:name,id:id,src2:temp};
        this.setState({imgNames:arr});
    }
    render() {   
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
      <Footer/> 
    </div>);
    }
}
export default DispImages;