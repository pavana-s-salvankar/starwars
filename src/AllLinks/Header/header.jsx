import './header.css';
import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
class Header extends Component {
    state = { menuItems:['FILMS',
        'SPECIES',
        'PLANETS',
        'PEOPLE',
        'STARSHIPS',
        'VEHICLES'] 
    }
    render() { 
        return ( <nav className='NavBar'>
            <div>
            {this.state.menuItems.map((item,index)=>{ return(<NavLink to={`/${item.toLowerCase()}`} activeClassName='selected' key={index} className='header-elements'>{item}</NavLink>)})}
            </div>
        </nav> );
    }
}
 
export default Header;