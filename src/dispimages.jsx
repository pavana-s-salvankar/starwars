import React, { Component } from 'react';
import characters from './images/characters_normal.png';
import droids from './images/droids_normal.png';
import films from './images/films_normal.png';
import planets from './images/planets_normal.png';
import species from './images/species_normal.png';
import vehicles from './images/vehicles_normal.png';
import './App.css';
class DispImages extends Component {
    state = {  }
    render() { 
        return ( <div >

            <div className='images'>
               <img src={films} alt=''/>
               <img src={species} alt=''/>
               <img src={planets} alt=''/>
            </div>

            <div className='image-name'  >
               <p1>FILMS</p1>
               <p1>SPECIES</p1>
               <p1>PLANETS</p1>
            </div>

            <div className='images' >
                <img src={characters} alt=''/>
                <img src={droids} alt=''/>
                <img src={vehicles} alt=''/>
            </div>

            <div className='image-name'>
               <p1>PEOPLE</p1>
               <p1>STARSHIP</p1>
               <p1>VEHICLES</p1>
            </div>
        </div>);
    }
}
export default DispImages;