import './header.css';
import React from 'react';
import { NavLink, useParams, } from 'react-router-dom';
const Header=()=> {
    const menuItems=['FILMS',
        'SPECIES',
        'PLANETS',
        'PEOPLE',
        'STARSHIPS',
        'VEHICLES'] ;  
          const {id}=useParams();
        return ( <nav className='NavBar'>
            <div>
            {menuItems.map((item,index)=>{ return(<NavLink to={`/${item.toLowerCase()}`} activeClassName='selected' id={id} key={index} className='header-elements'>{item}</NavLink>)})}
            </div>
        </nav> );
    }
export default Header;