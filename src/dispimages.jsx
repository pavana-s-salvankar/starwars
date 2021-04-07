import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
  } from "react-router-dom";
import characters from './images/characters_normal.png';
import droids from './images/droids_normal.png';
import films from './images/films_normal.png';
import planets from './images/planets_normal.png';
import species from './images/species_normal.png';
import vehicles from './images/vehicles_normal.png';
import Films from './films.jsx';
import './App.css';
const DispImages = ()=>
{
        return ( <Router><div >
            <div className='images'>
                <ul>
                    <li>
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
            <Switch>
            <Route path='/films'>
            <Films/>
        </Route>
        </Switch>
        </div>
        </Router>);
    }
export default DispImages;
